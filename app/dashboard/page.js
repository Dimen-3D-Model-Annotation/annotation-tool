import SidePanel from "@components/dashboard/side_panel/SidePanel";
import Tab from "@components/tab_bar/Tab";

export default function Dashboard() {
  return (
    <div>
      <div className="flex">
        
        <Tab to="/dashboard" content = "Dashboard" />
        <Tab to="/" content = "Project 1" />
        <Tab to="/dashboard" content = "Project 2" />
       
      </div>
      <div>
        <SidePanel/>
      </div>
    </div>
    
  );
}
