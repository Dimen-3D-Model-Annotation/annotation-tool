import Link from "next/link";
import Image from "next/image";

export default function DropDown({ to , text , image}){
    return(
        <Link href= {to} className="block px-4 py-2 text-14px text-gray font-14px bg-base hover:opacity-90">
           <div className="flex items-center gap-8">
            <div className="">
                    <Image 
                        src={image}
                        alt=""
                        width={15}
                        height={15}
                        className="object-contain"
                    />
                    
                </div>
                <div>
                    {text}
                </div>
            
           </div>

            
            
        </Link>
    );
}