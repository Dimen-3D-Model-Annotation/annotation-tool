"use client";

import { useState, useEffect } from "react";
import DashboardWrapper from "@components/layout/DashboardWrapper";
import NotificationModal from "@components/modals/NotificationModal"; 

export default function Notifications() {
  const [userId, setUserId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    const getCookie = (name) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(";").shift();
    };

    const id = getCookie("userId");
    setUserId(id);
  }, []);

  const notifications = [
    {
      id: 1,
      message:
        "You have a new invitation to collaborate on a project! Click to view the invitation.",
    },
    {
      id: 2,
      message:
        "You have a new invitation to collaborate on a team! Click to view the invitation.",
    },
  ];

  const handleNotificationClick = (notification) => {
    setNotification(notification);
    setIsModalOpen(true); 
  };

  return (
    <DashboardWrapper>
      <div className="p-4 space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="flex items-center gap-4 p-4 mt-8 text-white rounded-lg shadow-md cursor-pointer bg-hover hover:bg-gray-600 text-12px"
            onClick={() => handleNotificationClick(notification)}
          >
          
            <img
              src="/assets/icons/messages.svg" 
              alt="Notification Icon"
              className="w-6 h-6" 
            />
            {/* Notification message */}
            <span>{notification.message}</span>
          </div>
        ))}
      </div>

      <NotificationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </DashboardWrapper>
  );
}
