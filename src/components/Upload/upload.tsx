import React,{ useRef, useState} from 'react';
import Button from '../Button/button';
import axios from 'axios';
import { UploadList } from './UploadList';
import './_style.scss';




export type UploadFileStatus ='ready' | 'uploading'| 'success' | 'error';;
export interface UploadFile{
    uid:string;
    name:string;
    status:UploadFileStatus;
    percent:number;
    raw:File;
}
export interface UploadProps{
    action: string;
    accept?:string;
    onSuccess?:(data:any,file:File)=>void;
    beforeUpload?:(file:File)=>boolean|Promise<File>;
    onError?:(err:any,file:File)=>void;
    onRemove?:(file:UploadFile)=>void;
}

const uploadWithLimit = (tasks:(()=>Promise<any>)[],max:number)=>{
    return new Promise<void>((resolve,reject)=>{
        if(tasks.length===0){
            return resolve();
        }
        let i=0,active=0,finished=0;

        function next(){
            while(active<max && i<tasks.length){
                const task =tasks[i++];
                active++;
                task().then(()=>{
                    active--;
                    finished++;
                    if(finished ===tasks.length){
                        resolve();
                    }else{
                        next();
                    }
                }).catch(reject);
            }
        }
        next();
    });

};
const CHUNK_SIZE=1024*1024*5;


export const Upload: React.FC<UploadProps>=(props)=>{
    const { action, accept, onSuccess, onError}=props;
    const fileInputRef=useRef<HTMLInputElement>(null);
    const [fileList, setFileList]= useState<UploadFile[]>([]);
    const updateFileList = (updateFile: UploadFile, updateObj: Partial<UploadFile>) => {
    setFileList(prevList => {
      return prevList.map(file => {
        if (file.uid === updateFile.uid) {
          return { ...file, ...updateObj }; // 找到对应的文件，合并新属性
        } else {
          return file;
        }
      });
    });
  };
    const handleClick = ()=>{
        if(fileInputRef.current){
            fileInputRef.current.click();
        }
    };
    const handleFileChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
        const files=e.target.files;
        if(!files || files.length===0){
            return;
        }
        const rawFile=files[0];
        if(fileInputRef.current){
            fileInputRef.current.value='';
        }
        upLoadFile(rawFile);
    };
    const upLoadFile=async(file:File)=>{
        const _file: UploadFile={
            uid: Date.now() + 'upload-file',
            name: file.name,
            status: 'ready',
            percent: 0,
            raw: file
        };
        setFileList(prevList => [...prevList, _file]);
        const chunks:Blob[]=[];
        let cur =0;
        while(cur<file.size){
            chunks.push(file.slice(cur,cur+CHUNK_SIZE));
            cur+=CHUNK_SIZE;
        }
        let finishedChunks=0;
        const tasks = chunks.map((chunk,index)=>{
            return ()=>{
                const formData =new FormData();
                formData.append('chunk',chunk);
                formData.append('filename',file.name);
                formData.append('index',String(index));
                return axios.post(action,formData).then(()=>{
                    finishedChunks++;
                    const percentage=Math.round(finishedChunks/chunks.length*100);
                    if(percentage<100){
                        updateFileList(_file,{percent:percentage,status:'uploading'});
                    }
                })
            }
        })
        try{
            await uploadWithLimit(tasks,3);
            await axios.post('/api/merge',{filename:file.name});
            updateFileList(_file,{status:'success',percent:100});
            if(onSuccess){
                onSuccess('上传成功',file);
            }
        } catch (error) {
            updateFileList(_file,{status:'error',percent:0});
            if(onError){
                onError('上传失败',file);
            }
        }
    }
    const handleRemove=(file:UploadFile)=>{
        setFileList((prevList)=>{
            return prevList.filter(item=>item.uid !==file.uid);
        });
        if(props.onRemove){
            props.onRemove(file);
        }
    };
    return(
        <div className="v-upload-component">
            <Button btnType="primary" onClick={handleClick}>点击上传</Button>
            <input
                className="v-file-input"
                style={{ display: 'none' }}
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept={accept}
            />
            <UploadList fileList={fileList} onRemove={handleRemove}/>
        </div>
    )
}