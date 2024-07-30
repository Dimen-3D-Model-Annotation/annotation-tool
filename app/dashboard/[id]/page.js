import SidePanel from "@components/dashboard/side_panel/SidePanel";
import Utils from "@components/dashboard/utility_bar/Utils";
import TabBar from "@components/tab_bar/TabBar";

export default function Dashboard() {
  return (
    <div >
      
     <TabBar/>
     <Utils />
     <SidePanel/>
      
    </div>
    
  );
}
