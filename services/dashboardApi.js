export const fetchProjects = async (userId) => {
  try {
    const response = await fetch(
      `http://localhost:3501/api/projects?userId=${userId}`,
      {
        method: "GET",
        credentials: "include",
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch projects");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};

export const fetchFolders = async (userId) => {
  try {
    const response = await fetch(
      `http://localhost:3501/api/folders?userId=${userId}`,
      {
        method: "GET",
        credentials: "include", 
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to fetch folders: ${errorText}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching folders:", error);
    throw error;
  }
};

