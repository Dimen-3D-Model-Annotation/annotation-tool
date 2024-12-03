"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const NewModal = ({ isOpen, onClose }) => {
  const [userId, setUserId] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const getCookie = (name) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(";").shift();
    };

    const id = getCookie("userId");
    setUserId(id);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;

    if (!userId) {
      console.error("User ID is not available");
      return;
    }

    try {
      const response = await fetch("http://localhost:3501/api/folders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ name, userId }),
      });

      if (!response.ok) {
        throw new Error("Failed to create project");
      }

      const result = await response.json();
      console.log("Project created:", result);
      onClose(); // Close the modal
      router.push("/dashboard");
    } catch (error) {
      console.error("Error creating project:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="w-full max-w-md p-8 rounded-lg shadow-xl bg-base">
        <h2 className="mb-6 text-2xl font-semibold text-white">
          Accept Invitation
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter folder name"
              defaultValue="Untitled"
              className="px-4 py-3 text-white placeholder-gray-400 bg-gray-800 border-none rounded text-14px focus:ring-2 focus:ring-theme1"
            />
          </div>
          <div className="flex justify-between gap-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="w-1/2 px-4 py-2 text-white bg-gray-600 rounded hover:bg-gray-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-1/2 px-4 py-2 text-white rounded bg-theme1 hover:bg-hover2"
            >
              Accept
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewModal;
