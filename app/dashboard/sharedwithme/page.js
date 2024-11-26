"use client";

import { useState , useEffect } from "react";

export default function SharedWithMe() {

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
    <div>
        
    </div>
    
    
  );
}