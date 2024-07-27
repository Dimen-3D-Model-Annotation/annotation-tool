import MenuTab from "./MenuTab";

export default function Menu(){
    return(
        <div>
            <div className="mb-8">
                <ul>
                    
                    
                    <li ><MenuTab to="/"  text = "Home" /></li>
                    <li ><MenuTab to="/"  text = "Shared with me" /></li>
                    <li ><MenuTab to="/"  text = "Notifications" /></li>
                    
                </ul>
                    
            </div>
            
            <div className="flex justify-between">
                <h2 className="mb-8 font-semibold text-14px">Teams</h2>
                

            </div>
            <ul>
                <li>
                    <MenuTab to="/"  text = "Team 1" />

                </li>
            </ul>
            

        </div>

    );
}