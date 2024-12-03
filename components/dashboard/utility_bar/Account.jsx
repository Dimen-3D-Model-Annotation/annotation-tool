"use client";

import Image from "next/image";
import Link from "next/link";
import DropDown from "./DropDown";
import { useState , useEffect } from "react";

export default function Account(){

    const [dropdownOpen, setDropdownOpen] = useState(false);
    
    
    return(

        <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
        >

            
            <Link href= "/dashboard/account" className="flex items-center py-4 bg-base">
                <div className="flex gap-4 ml-8">
                    <div >
                        <Image 
                            src="/assets/images/profile.svg"
                            alt="Profile"
                            width={30}
                            height={30}
                            className="object-contain"
                        />
                        
                    </div>
                    <div>

                        <span className="mr-4 font-semibold text-14px text-gray">siyarawijewardane@gmail.com</span>

                    </div>
                    
                </div>
                
                
                <div className="mr-8">
                    <Image 
                        src="/assets/icons/drop.svg"
                        alt=""
                        width={20}
                        height={20}
                        className="object-contain"
                    />
                    

                </div>
        

            </Link>

            {dropdownOpen && (
                <div className="absolute right-0 z-10 w-64 border-b-2 shadow-lg border-x-2 bg-hover border-hovergray">
                    <ul className="">
                        <li>
                            <DropDown to ="/dashboard/account" text="Account Settings" image="/assets/icons/settings.svg"/>
                        </li>
                        <li>
                            <DropDown to ="/" text="Add another account" image="/assets/icons/plus.svg"/>
                            
                        </li>
                        
                    </ul>
                    <hr className="text-hovergray opacity-90" />
                    <div >
                        <DropDown to ="/" text="Log out" image="/assets/icons/logout.svg"/>
                    </div>
                    
                </div>
            )}

        </div>
    );
}