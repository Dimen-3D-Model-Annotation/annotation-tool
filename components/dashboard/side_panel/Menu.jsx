import MenuTab from "./MenuTab";
import Image from "next/image";

export default function Menu(){
    return(
        <div>
            <div className="mt-4 mb-16">
                <ul>
                    
                    <li ><MenuTab to="/" image = "./assets/icons/home.svg" text = "Home" /></li>
                    <li ><MenuTab to="/" image = "./assets/icons/shared.svg" text = "Shared with me" /></li>
                    <li ><MenuTab to="/" image = "./assets/icons/notification.svg" text = "Notifications" /></li>
                    
                </ul>
                    
            </div>
            
            <div className="flex items-start justify-between ml-8">
                <h2 className="mb-8 font-semibold text-12px">Teams</h2>
                <button>
                    <Image 
                        src="./assets/icons/plus.svg"
                        alt=""
                        width={15}
                        height={15}
                        className="object-contain"
                    />
                    
                </button>
                
            </div>
            <div>
            <ul>
                <li>
                    <MenuTab to="/" image="./assets/icons/team.svg" text = "Team 1" />
                    <MenuTab to="/" image="./assets/icons/team.svg" text = "Team 2" />
                    <MenuTab to="/" image="./assets/icons/team.svg" text = "Team 3" />
                    <MenuTab to="/" image="./assets/icons/team.svg" text = "Team 4" />




                </li>
            </ul>
                
            </div>
            
            

        </div>

    );
}