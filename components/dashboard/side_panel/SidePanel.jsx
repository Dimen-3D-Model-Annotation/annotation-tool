"use client";

import { useState } from 'react';
import Image from 'next/image';
import arrowLeft from '../../../public/assets/icons/arrow-left.svg';
import MenuTab from './MenuTab';
import HoverCard from './HoverCard';



const SidePanel = () => {
  
  return (
    <div className="flex">
        
      <div className="fixed top-0 left-0 h-full transition-transform transform translate-x-0 bg-base w-72 ">
            
        <div className="p-6 text-white">
            
          <h2 className="mb-16 font-semibold text-14px">Siyara Wijewardane</h2>
          
          <ul>
            <HoverCard/>
            
            <li ><MenuTab to="/"  text = "Home" /></li>
            <li ><MenuTab to="/"  text = "Shared with me" /></li>
            <li ><MenuTab to="/"  text = "Notifications" /></li>
          </ul>
          
        </div>
        
      </div>
      
      
      
    </div>
  );
};

export default SidePanel;
