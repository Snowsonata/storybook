// src/components/Tabs/tabs.tsx
import React, { useState } from 'react';
import classNames from 'classnames';
import './_style.scss';

export interface TabPaneProps{
  label: string;
  children: React.ReactNode;
}

export interface TabsProps{
  defaultIndex?:number;
  onSelect?:(selectedIndex:number)=>void;
  children:React.ReactNode;
}

export const Tabs: React.FC<TabsProps>=(props)=>{
  const{defaultIndex = 0, onSelect, children}=props;
  const[activeIndex,setActiveIndex]=useState(defaultIndex);

  const handleClick=(index:number)=>{
    setActiveIndex(index);
    if(onSelect){
      onSelect(index);
    }
  };

  const renderNavLinks=()=>{
    return React.Children.map(children,(child,index)=>{
      const childElement=child as React.FunctionComponentElement<TabPaneProps>;
      const { label }= childElement.props;

      const isActive=index===activeIndex;

      return(
        <li
          key={index}
          className={isActive ? 'is-active':''}
          onClick={()=>handleClick(index)}
        >
          {label}
        </li>
      );
    });
  };

  const renderContent=()=>{
    return React.Children.map(children,(child,index)=>{
      if(activeIndex===index){
        return child;
      }
      return null;
    });
  }

  return(
    <div className="v-tabs">
      <ul className="v-tabs-nav">
        {renderNavLinks()}
      </ul>
      <div className="v-tabs-content">
        {renderContent()}
      </div>
    </div>
  );
};