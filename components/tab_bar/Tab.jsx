"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Tab({ to, content }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='flex'>
      <Link
        href={to}
        className="relative flex items-center justify-start w-32 px-4 py-2 overflow-hidden font-semibold text-gray text-11px bg-lightgray"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="w-full overflow-hidden whitespace-nowrap">
          {content} <div className=""></div>
        </div>
    
        {isHovered && (
          <span className="absolute text-white right-4">&times;</span>
        )}

      
      </Link>
      
    </div>
  );
}
