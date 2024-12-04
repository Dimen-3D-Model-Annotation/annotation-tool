import axios from "axios";

export default async function upload(selectedFile) {
  
  const formData = new FormData();
  formData.append("file", selectedFile);

  try {
    const response = await axios.post("http://localhost:3500/api/models/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    console.log("Upload successful:");
    
    return response;

  } catch (error) {
    console.error("Upload failed:", error);
  }

}
