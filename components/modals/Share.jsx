"use client";

import { useState } from "react";

const Share = ({ isOpen, onClose, users, onPermissionChange, onUpdate }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="w-1/2 p-6 text-white bg-black rounded-lg">
        <h2 className="mb-4 text-lg font-bold">Share with Users</h2>
        <ul>
          {users.map((user) => (
            <li
              key={user.id}
              className="flex items-center justify-between py-2"
            >
              <span className="text-sm">{user.name}</span>
              <select
                className="px-2 py-1 text-white border-none rounded bg-hovergray"
                value={user.permission}
                onChange={(e) => onPermissionChange(user.id, e.target.value)}
              >
                <option value="view">Reviewer</option>
                <option value="edit">Designer</option>
              </select>
            </li>
          ))}
        </ul>
        <div className="flex justify-end mt-4">
          <button
            className="px-4 py-2 mr-2 text-white rounded bg-hovergray hover:bg-gray-600"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 text-white rounded bg-theme1 hover:bg-theme1-dark"
            onClick={onUpdate}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Share;
