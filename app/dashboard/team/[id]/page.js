"use client";

import DashboardWrapper from "@components/layout/DashboardWrapper";
import { useState, useEffect } from "react";
import Share from "@components/modals/Share"; // Import the Share component

export default function Team() {
  const [userId, setUserId] = useState(null);
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getCookie = (name) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(";").shift();
    };

    const id = getCookie("userId");
    setUserId(id);

    // Mock users
    const mockUsers = [
      { id: 1, name: "vishwanthieherath@gmail.com", permission: "view" },
      { id: 2, name: "nufdhamacky@gmail.com", permission: "view" },
    ];
    setUsers(mockUsers);
  }, []);

  const handlePermissionChange = (userId, permission) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, permission } : user
      )
    );
  };

  const handleUpdate = () => {
    console.log("Updated permissions:", users);
    setIsModalOpen(false); // Close modal after update
  };

  return (
    <DashboardWrapper>
      <div className="relative">
        {/* Share button */}
        <button
          className="absolute px-4 py-2 font-semibold text-white border rounded-full shadow-md border-gray bg-base top-8 right-8 hover:bg-hovergray focus:outline-none text-12px"
          onClick={() => setIsModalOpen(true)}
        >
          Share
        </button>

        {/* Share Modal */}
        <Share
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          users={users}
          onPermissionChange={handlePermissionChange}
          onUpdate={handleUpdate}
        />

        {/* Your existing content */}
        <div>{/* Other content */}</div>
      </div>
    </DashboardWrapper>
  );
}
