"use client";

import MenuTab from "./MenuTab";
import Image from "next/image";
import { useState , useEffect } from "react";
import Modal3 from "@components/Modal3";

export default function Menu(){
    const [teams, setTeams] = useState([]);
    const [userId, setUserId] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

  
    useEffect(() => {
      // Function to get user ID from cookies
      const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
      };
  
      const id = getCookie('userId');
      setUserId(id);
    }, []);
  
    useEffect(() => {
      if (userId) {
        const fetchTeams = async () => {
          try {
            const response = await fetch(`http://localhost:3501/api/teams?userId=${userId}`, {
              method: 'GET',
              credentials: 'include', // Include credentials like cookies
            });
  
            if (!response.ok) {
              const errorText = await response.text();
              throw new Error(`Failed to fetch teams: ${errorText}`);
            }
  
            const result = await response.json();
            setTeams(result);
          } catch (error) {
            console.error('Error fetching teams:', error);
          }
        };
  
        fetchTeams();
      }
    }, [userId]);

    
    return(
        <div>
            <div className="mt-4 mb-16">
                <ul >
                    
                    <li className="py-3 rounded-full hover:bg-hover"><MenuTab to="/dashboard" image = "../assets/icons/home.svg" text = "Home" /></li>
                    <li className="py-3 rounded-full hover:bg-hover" ><MenuTab to="/" image = "../assets/icons/shared.svg" text = "Shared with me" /></li>
                    <li className="py-3 rounded-full hover:bg-hover"><MenuTab to="/dashboard/notifications" image = "../assets/icons/notification.svg" text = "Notifications" /></li>
                    
                </ul>
                    
            </div>
            
            <div className="flex items-start justify-between ml-8">
                <h2 className="mb-8 font-semibold text-12px">Teams</h2>
                <button onClick={openModal}>
                    <Image 
                        src="../assets/icons/plus.svg"
                        alt=""
                        width={15}
                        height={15}
                        className="object-contain"
                    />
                    
                </button>
                
            </div>
            <div>
            <ul>
                {userId ? (
                    teams.length > 0 ? (
                    teams.map((team) => (
                        <li key={team.id} className="py-3 rounded-full hover:bg-hover">
                        <MenuTab
                            to={`/dashboard/team/${team.id}`} // Adjust the path as needed
                            image="../assets/icons/team.svg" // Assuming icon is a URL or relative path
                            text={team.name}
                        />
                        </li>
                    ))
                    ) : (
                    <li className="py-3 font-semibold rounded-full hover:bg-hover text-12px text-gray">No teams found.</li>
                    )
                ) : (
                    <li className="py-3 font-semibold rounded-full hover:bg-hover text-12px text-gray">No User ID found. Please log in.</li>
                )}
    </ul>
                
            </div>
            
            <Modal3 isOpen={isModalOpen} onClose={closeModal} />

        </div>

    );
}