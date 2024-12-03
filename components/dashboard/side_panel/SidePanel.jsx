
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
            
            <div className="fixed left-0 z-20 h-full bg-base w-72 ">
                    
                <div className="p-6 text-white">
                    
                    {/* <h2 className="mb-8 font-semibold text-14px">Siyara Wijewardane</h2> */}
                    <div className='overflow-y-auto max-h-72 hide-scrollbar'>
                        <Menu />
                        
                    </div>
                    <div className='mb-8'>
                        <ProCard />
                        
                    </div>
                    <div>
                        <ul>
                            <li className='py-3 rounded-full hover:bg-hover'><MenuTab to="/dashboard/trash" image="/assets/icons/trash.svg" text = "Archive" /></li>
                            <li className='py-3 rounded-full hover:bg-hover'><MenuTab to="/dashboard/support" image="/assets/icons/help.svg" text = "Help & Support" /></li>
                        </ul>

                        
                        
                    </div>
                    
                </div>
                
            </div>
       
        </div>
    );
    };

   
