import Link from "next/link";

export default function ProjectCard({name}) {
  return (
    <Link href ="./" >
       <div className="py-24 border-2 w-72 rounded-xl border-lightgray bg-hover hover:border-theme1"></div>
        <div className="w-64 mt-4 font-semibold text-gray text-12px">
          {name ? <p>{name}</p> : <p>Untitled</p>}
          {/* {userId ? (
            <p>User ID: {userId}</p>
          ) : (
            <p>No User ID found. Please log in.</p>
          )} */}
          <span className="font-medium text-10px">
            
          </span>
        </div>
      
    </Link>
   
  
  );
}


