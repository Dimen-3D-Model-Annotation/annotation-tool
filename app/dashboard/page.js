"use client";
import ProjectCard from "@components/dashboard/projects_area/ProjectCard";
import { useState, useEffect } from "react";
import Image from "next/image";
import Folder from "@components/dashboard/projects_area/Folder";
import DashboardWrapper from "@components/layout/DashboardWrapper";
import { fetchProjects , fetchFolders} from "../../services/dashboardApi";


export default function Dashboard() {
  const [folders, setFolders] = useState([]);
  const [projects, setProjects] = useState([]);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const getCookie = (name) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(";").shift();
    };

    const id = getCookie("userId");
    setUserId(id);
  }, []);

  const loadProjects = async () => {
    try {
      const result = await fetchProjects(userId);
      setProjects(result);
      console.log(result);
    } catch (error) {
      console.error("Error loading projects:", error);
    }
  };

  useEffect(() => {
    loadProjects();
  }, [userId]);


  useEffect(() => {
    if (userId) {
      const loadFolders = async () => {
        try {
          const fetchedFolders = await fetchFolders(userId);
          setFolders(fetchedFolders);
        } catch (error) {
          console.error("Error loading folders:", error);
        }
      };

      loadFolders();
    }
  }, [userId]);

  
  return (
    <DashboardWrapper>
      <div className="flex gap-4 mt-8">
        <div>
          <Image
            src="../assets/icons/folder.svg"
            alt=""
            width={20}
            height={20}
            className="object-contain"
          />
        </div>
        <div>
          <h2 className="font-semibold text-gray text-14px">Projects</h2>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-1 gap-4 my-8 mr-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {userId ? (
            projects.length > 0 ? (
              projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  name={project.name}
                  projectId={project.id}
                />
              ))
            ) : (
              <p className="font-semibold text-12px text-gray">
                Please Sign In.
              </p>
            )
          ) : (
            <p className="font-semibold text-12px text-gray">Please Sign In.</p>
          )}
        </div>

        <div className="flex gap-4 mt-8">
          <div>
            <Image
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
                <Folder
                  key={folder.id}
                  name={folder.name}
                  folderId={folder.id}
                />
              ))
            ) : (
              <p className="font-semibold text-12px text-gray">
                Please Sign In.
              </p>
            )
          ) : (
            <p className="font-semibold text-12px text-gray">Please Sign In.</p>
          )}
        </div>
      </div>
    </DashboardWrapper>
  );
}
