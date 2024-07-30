"use client";
import ProjectCard from "@components/dashboard/projects_area/ProjectCard";
import { useState , useEffect } from "react";
import Image from "next/image";
import Folder from "@components/dashboard/projects_area/Folder";

export default function Dashboard() {
  const [folders, setFolders] = useState([]);
  const [projects, setProjects] = useState([]);
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

  useEffect(() => {
    if (userId) {
      const fetchProjects = async () => {
        try {
          const response = await fetch(`http://localhost:3501/api/projects?userId=${userId}`, {
            method: 'GET',
            credentials: 'include', // Include credentials like cookies
          });

          if (!response.ok) {
            throw new Error('Failed to fetch projects');
          }

          const result = await response.json();
          setProjects(result);
        } catch (error) {
          console.error('Error fetching projects:', error);
        }
      };

      fetchProjects();
    }
  }, [userId]);


  useEffect(() => {
    if (userId) {
      const fetchFolders = async () => {
        try {
          const response = await fetch(`http://localhost:3501/api/folders?userId=${userId}`, {
            method: 'GET',
            credentials: 'include', // Include credentials like cookies
          });

          if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Failed to fetch folders: ${errorText}`);
          }

          const result = await response.json();
          setFolders(result);
        } catch (error) {
          console.error('Error fetching folders:', error);
        }
      };

      fetchFolders();
    }
  }, [userId]);



  return (

    <div>
       <div className="grid grid-cols-1 gap-4 my-8 mr-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
       {userId ? (
          projects.length > 0 ? (
            projects.map((project) => (
              <ProjectCard key={project.id} name={project.name} />
            ))
          ) : (
            <p className="font-semibold text-12px text-gray">No projects found for this user.</p>
          )
        ) : (
          <p className="font-semibold text-12px text-gray">No User ID found. Please log in.</p>
        )}
      </div>

      <div className="flex gap-4 mt-8">
        <div>
          < Image 
              src="../assets/icons/folder.svg"
              alt=""
              width={20}
              height={20}
              className="object-contain"
              />
          
        </div>
        <div>
          <h2 className="font-semibold text-gray text-14px">Folders</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 mt-8 mb-16 mr-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {userId ? (
        folders.length > 0 ? (
          folders.map((folder) => (
            <Folder key={folder.id} name={folder.name} />
          ))
        ) : (
          <p className="font-semibold text-12px text-gray">No folders found for this user.</p>
        )
      ) : (
        <p className="font-semibold text-12px text-gray">No User ID found. Please log in.</p>
      )}
    </div>


     

      
    </div>
   
  

     
      
    
    
  );
}
