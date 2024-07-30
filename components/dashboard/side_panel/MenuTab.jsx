import Link from "next/link"
import HoverCard from "./HoverCard"
import Image from "next/image"

export default function MenuTab({to ,  text , image}){
    return(
        <div className="relative group">
            
                
                
           
            
            <Link href={to} className="relative flex items-center gap-4 ml-8 bg-gray-900 z-100 group">
                <div className="" >
                    <Image 
                        src={image}
                        alt=""
                        width={20}
                        height={20}
                        className="object-contain"
                    />
                </div>
                <div className="font-semibold text-gray text-12px">
                    {text}
                </div>
                
                
            </Link>
            
            
        </div>
    )
}