import TabBar from "@components/tab_bar/TabBar"
import Utils from "@components/dashboard/utility_bar/Utils"
import SidePanel from "@components/dashboard/side_panel/SidePanel"

export default function DashboardLayOut({children}){
    return(
        <div className="max-h-screen overflow-hidden" >
      
            <TabBar/>
            <Utils />
            <div className="flex ">
                <div className="">
                    <SidePanel />
                </div>
            
            <div className="w-full h-screen mt-0 overflow-auto bg-base ml-72">{children}</div>
        </div>

     
      
    </div>
    
    )
}