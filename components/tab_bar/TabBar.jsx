import Tab from "./Tab";

export default function TabBar(){
    return(
        <div className="flex bg-base">

            <Tab to="/dashboard" content = "Dashboard" />
            <Tab to="/" content = "Test" />
            <Tab to="/dashboard" content = "Untitled" />
      

        </div>
    );
}