import Link from "next/link";

export default function Folder({name}) {
    return (
      <Link href="./" className="">
         <div className="w-56 py-4 border-2 rounded-xl border-lightgray bg-hover hover:border-theme1">
            <div className="flex items-center w-64 mt-4 font-semibold text-gray text-12px">
                {name ? <p className="ml-4 ">{name}</p> : <p>Untitled</p>}
                {/* {userId ? (
                <p>User ID: {userId}</p>
                ) : (
                <p>No User ID found. Please log in.</p>
                )} */}
            
            </div>
            
            
         </div>
          
      </Link>
     
    
    );
  }