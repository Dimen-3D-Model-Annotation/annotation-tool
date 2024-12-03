"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import DeleteConfirm from "@components/modals/DeleteConfirm";

export default function Folder({ name, folderId }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleDropdownToggle = (e) => {
    e.preventDefault();
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="relative w-56 py-4 border-2 rounded-xl border-lightgray bg-hover hover:border-theme1">
      <Link href={`./dashboard/folder/${folderId}`} className="">
        <div className="flex items-center justify-between w-full mt-4 font-semibold text-gray text-12px">
          {name ? (
            <p className="ml-4">{name}</p>
          ) : (
            <p className="ml-4">Untitled</p>
          )}
          <div
            ref={buttonRef}
            className="relative flex items-center justify-center p-2 cursor-pointer"
            onClick={handleDropdownToggle}
          >
            <img
              src="/assets/icons/vert-3.svg"
              alt="menu"
              className="w-4 h-4"
            />
          </div>
        </div>
      </Link>

      {showDropdown && (
        <div
          ref={dropdownRef}
          className="absolute right-0 z-50 w-32 mt-2 bg-white border rounded-md shadow-lg"
        >
          <button
            className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
            onClick={() => alert("Rename clicked")}
          >
            Rename
          </button>
          <button
            className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
            onClick={() => setIsModalOpen(true)}
          >
            Delete
          </button>

          <DeleteConfirm
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </div>
      )}
    </div>
  );
}
