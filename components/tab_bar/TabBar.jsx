import Tab from "./Tab";

export default function TabBar(){
    return(
        <div className="flex bg-base">

            <Tab to="/dashboard" content = "Dashboard" />
            <Tab to="/" content = "Project 1" />
            <Tab to="/dashboard" content = "Project 2" />
      

        </div>
    );
}