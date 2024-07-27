
"use client";

import { useState } from 'react';
import Image from 'next/image';
import Menu from './Menu';
import ProCard from './ProCard';
import MenuTab from './MenuTab';




export default function SidePanel () {

    const [isActive , setIsActive] = useState('');
  
    return (
        <div className="flex">
            
            <div className="fixed left-0 h-full bg-base w-72 ">
                    
                <div className="p-6 text-white">
                    
                    {/* <h2 className="mb-8 font-semibold text-14px">Siyara Wijewardane</h2> */}
                    <div className='overflow-y-auto max-h-72 hide-scrollbar'>
                        <Menu />
                        
                    </div>
                    <div className='mb-8'>
                        <ProCard />
                        
                    </div>
                    <div>

                        <MenuTab to="/" image="./assets/icons/trash.svg" text = "Trash" />
                        <MenuTab to="/" image="./assets/icons/help.svg" text = "Help & Support" />
                        
                    </div>
                    
                </div>
                
            </div>
       
        </div>
    );
    };

   
