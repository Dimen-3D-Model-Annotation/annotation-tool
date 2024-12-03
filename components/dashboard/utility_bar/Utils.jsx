"use client";

import Account from "./Account";
import Button from "./Button";
import {useState} from 'react';
import Modal from "@components/modals/Modal";
import Modal2 from "@components/modals/Modal2";
import { usePathname } from 'next/navigation';
import Dashboard from "@app/dashboard/page";


export default function Utils(){

    const [isModal1Open, setIsModal1Open] = useState(false);
    const [isModal2Open, setIsModal2Open] = useState(false);
    const pathname = usePathname();

    const openModal1 = () => setIsModal1Open(true);
    const closeModal1 = () => setIsModal1Open(false);

    const openModal2 = () => setIsModal2Open(true);
    const closeModal2 = () => setIsModal2Open(false);

    let displayText = 'Home';
    if (pathname === "/dashboard") {
      displayText = "Home";
    } else if (pathname === "/dashboard/sharedwithme") {
      displayText = "Shared with Me";
    } else if (pathname === "/dashboard/notifications") {
      displayText = "Notifications";
    } else if (pathname === "/dashboard/trash") {
      displayText = "Archive";
    } else if (pathname === "/dashboard/support") {
      displayText = "Help & Support";
    } else if (pathname === "/dashboard/account") {
      displayText = "My Account";
    } 



    const hideAdditionalParts =
      pathname === "/dashboard/sharedwithme" ||
      pathname === "/dashboard/notifications" ||
      pathname === "/dashboard/trash" ||
      pathname === "/dashboard/support" ||
      pathname === "/dashboard/team" ||
      pathname === "/dashboard/account";

    
    return(
        <div className="fixed z-40 flex justify-between w-full bg-base">
            <div className="flex items-center gap-8">
                <Account />
                <div>
                    <span className="font-semibold text-gray text-14px">{displayText}</span>
                </div>
                {!hideAdditionalParts && (
                    <div>
                        <Button icon="/assets/icons/plus.svg" text="New Folder" bg="rgba(211, 211, 211, 0.1)" onClick={openModal2} />
                    </div>
                    )}
            </div>
            {!hideAdditionalParts && (
                <div className="flex items-center mr-8">
                <div>
                    <input
                    type="text"
                    placeholder="Search"
                    className="w-full max-w-md px-4 py-2 text-white border-none rounded-full placeholder-gray bg-hover focus:outline-none focus:ring-none caret-white text-12px"
                    />
                </div>
                <div className="mx-4">
                    
                </div>
                <div>
                    <Button icon="/assets/icons/plus.svg" text="Create" bg="rgb(106, 0, 255)" onClick={openModal1} />
                </div>
                </div>
            )}
            <Modal isOpen={isModal1Open} onClose={closeModal1} />
            <Modal2 isOpen={isModal2Open} onClose={closeModal2} />

        </div>
    );
}