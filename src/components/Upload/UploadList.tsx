import React from "react";
import type{ UploadFile } from "./upload";

export interface UploadListProps {
    fileList: UploadFile[];
    onRemove:(_file: UploadFile)=>void;
}
export const UploadList: React.FC<UploadListProps>=(props)=>{
    const {fileList,onRemove}=props;
    return(
        <ul className="v-upload-list">
            {fileList.map(item =>{
                return (
                    <li key={item.uid} className={`v-upload-list-item is-${item.status}`}>
                        <span className="file-name">
                        
                        {item.name}
                        </span>

                        <span className="file-status">
                        
                        {item.status === 'uploading' && <span>上传中... {item.percent}%</span>}
                        {item.status === 'success' && <span>✅</span>}
                        {item.status === 'error' && <span>❌</span>}
                        </span>

                        <span className="file-actions">
                       
                        <button onClick={() => onRemove(item)}>
                            删除
                        </button>
                        </span>
                    </li>
                )
            })}
        </ul>
    )
}