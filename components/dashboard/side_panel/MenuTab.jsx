import Link from "next/link"

export default function MenuTab({to ,  text}){
    return(
        <Link href={to} className="flex mb-4 bg-gray-900 text-10px">
            <div className="" >
                

            </div>
            <div className="text-sm text-white">
                {text}
            </div>

        </Link>
    )
}