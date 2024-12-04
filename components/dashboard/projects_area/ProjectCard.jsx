"use client";

import Link from "next/link";
import { useState , useEffect } from "react";


export default function ProjectCard({name , projectId}) {

  const [userId, setUserId] = useState(null);

  useEffect(() => {
    
    const getCookie = (name) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
    };

    const id = getCookie('userId');
    setUserId(id);
  }, []);
  
  
  return (
    <Link
      href={`dashboard/project/${projectId}`}
      passHref
    >
      <div
        className="py-24 border-2 w-72 rounded-xl border-lightgray bg-hover hover:border-theme1"
        
        onClick={(e) => {
          e.preventDefault();
          window.open(
            `dashboard/project/${projectId}`,
            "_blank"
          );
        }}
      ></div>
      <div className="w-64 mt-4 font-semibold text-gray text-12px">
        {name ? <p>{name}</p> : <p>Untitled</p>}
        {/* {userId ? (
      <p>User ID: {userId}</p>
    ) : (
      <p>No User ID found. Please log in.</p>
    )} */}
        <span className="font-medium text-10px"></span>
      </div>
    </Link>
  );
}

