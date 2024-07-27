"use client";

import { useState } from 'react';
import Image from 'next/image';
import MenuTab from './MenuTab';
import Menu from './Menu';




const SidePanel = () => {

    const [isActive , setIsActive] = useState('');
  
    return (
        <div className="flex">
            
        <div className="fixed top-0 left-0 h-full transition-transform transform translate-x-0 bg-base w-72 ">
                
            <div className="p-6 text-white">
                
                <h2 className="mb-16 font-semibold text-14px">Siyara Wijewardane</h2>
                
                <Menu />
            </div>
            
        </div>
        
        
        
        </div>
    );
    };

    export default SidePanel;
