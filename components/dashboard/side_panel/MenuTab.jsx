import Link from "next/link"
import HoverCard from "./HoverCard"

export default function MenuTab({to ,  text}){
    return(
        <div className="relative group">
            <HoverCard />
            <Link href={to} className="flex mb-6 ml-8 bg-gray-900 group">
                <div className="" >
                    

                </div>
                <div className="font-semibold text-white  text-12px">
                    {text}
                </div>
                
                
            </Link>
            
            
        </div>
    )
}