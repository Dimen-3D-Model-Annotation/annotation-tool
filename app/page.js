import Image from "next/image";
import Header from "@components/header";
import SidePanel from "@components/dashboard/side_panel/SidePanel";
import Utils from "@components/dashboard/utility_bar/Utils";

export default function Home() {
  return (
    <div>

      <SidePanel />
      

      
     

      <Utils />
    </div>
  );
}
