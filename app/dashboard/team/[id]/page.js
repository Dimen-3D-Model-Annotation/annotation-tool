"use client";

import DashboardWrapper from "@components/layout/DashboardWrapper";
import { useState , useEffect } from "react";

export default function Team() {

  const [userId, setUserId] = useState(null);
  const [projects, setProjects] = useState([]);
  
  const [error, setError] = useState(null);

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
    <DashboardWrapper>
      <div className="relative">
        {/* Share button */}
        <button className="absolute px-4 py-2 font-semibold text-white border rounded-full shadow-md border-gray bg-base top-8 right-8 hover:bg-hovergray focus:outline-none text-12px">
          Share
        </button>

        {/* Your existing content */}
        <div>{/* Other content */}</div>
      </div>
    </DashboardWrapper>
  );
}