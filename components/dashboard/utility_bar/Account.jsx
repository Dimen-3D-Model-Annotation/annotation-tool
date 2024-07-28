import Image from "next/image";
import Link from "next/link";

export default function Account(){
    return(
        <Link href= "/" className="flex items-center py-4 bg-base">
            <div className="flex gap-4 ml-8">
                <div >
                    <Image 
                        src="./assets/images/profile.svg"
                        alt="Profile"
                        width={30}
                        height={30}
                        className="object-contain"
                    />
                    
                </div>
                <div>

                    <span className="mr-4 font-semibold text-14px text-gray">Siyara Wijewardane</span>

                </div>
                
            </div>
            
            
            <div className="mr-8">
                <Image 
                    src="./assets/icons/settings.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="object-contain"
                />
                

            </div>
            <div>
                <Image 
                    src="./assets/icons/plus.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="object-contain"
                />

            </div>

        </Link>
    );
}