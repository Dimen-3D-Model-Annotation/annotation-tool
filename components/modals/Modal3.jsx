"use client"

import { useState , useEffect } from "react";

const Modal3 = ({ isOpen, onClose }) => {
    const [userId, setUserId] = useState(null);
    const [emails, setEmails] = useState('');
    console.log(emails);

    useEffect(() => {
        const getCookie = (name) => {
          const value = `; ${document.cookie}`;
          const parts = value.split(`; ${name}=`);
          if (parts.length === 2) return parts.pop().split(';').shift();
        };
    
        const id = getCookie('userId');
        setUserId(id);
      }, []);
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
    
        if (!userId) {
          console.error('User ID is not available');
          return;
        }
    
        try {
          const response = await fetch('http://localhost:3501/api/teams', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({ name, userId, emails }),
          });
    
          if (!response.ok) {
            throw new Error('Failed to create team');
          }
    
          const result = await response.json();
          console.log('Team created:', result);
          onClose(); 
        } catch (error) {
          console.error('Error creating team:', error);
        }
      };
    
      if (!isOpen) return null;

      
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-1000">
            <div className="w-full max-w-sm p-6 text-center text-white bg-black rounded-lg">
                <h2 className="mb-4 font-semibold text-14px">New Team</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter team name"
                            defaultValue="Untitled"
                            className="w-full px-4 py-2 text-white placeholder-gray-400 border-none rounded text-12px bg-hover"
                        />
                    </div>
                    <div className="mb-4">
                        
                        <textarea
                            id="emails"
                            name="emails"
                            placeholder="Enter emails separated by commas"
                            value={emails}
                            onChange={(e) => setEmails(e.target.value)}
                            className="w-full h-48 px-4 py-2 text-white placeholder-gray-400 border-none rounded text-12px bg-hover"
            />
                    </div>
                    <div className="flex justify-end gap-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 font-semibold bg-gray-600 rounded hover:bg-gray-700 text-12px"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 font-semibold rounded text-12px bg-theme1 hover:bg-hover2"
                        >
                            Create 
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal3;
