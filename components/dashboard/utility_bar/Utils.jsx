import Account from "./Account";
import Button from "./Button";
import Image from "next/image";

export default function Utils(){
    return(
        <div className="flex justify-between bg-base">
            <div className="flex items-center gap-8">
                <Account />
                <div>
                    <span className="font-semibold text-gray text-14px">Home</span>
                </div>
                <div>
                    <Button icon = "./assets/icons/plus.svg" text = "New Folder" bg = "rgba(211, 211, 211, 0.1)" />
                </div>
            </div>
            <div className="flex items-center mr-8">
                
                
                <div>
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full max-w-md px-4 py-2 text-white border-none rounded-full placeholder-gray bg-hover focus:outline-none focus:ring-none caret-white text-12px"
                />
                    
                </div>
                <div className="mx-4">
                    <Button icon = "./assets/icons/import.svg" text = "Import" bg = "rgba(211, 211, 211, 0.1)" />
                </div>
                <div>
                    <Button icon = "./assets/icons/plus.svg" text = "Create" bg = "rgb(106, 0, 255)"/>
                </div>

            </div>

        </div>
    );
}