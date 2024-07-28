import Image from "next/image";

export default function Button({icon , text , bg , hover}){
    return(
        <div className={`flex items-center gap-4 px-8 py-1 rounded-full cursor-pointer ${hover ? hover : ''}`} style={{ backgroundColor: bg }}>
            <div>
                <Image 
                    src={icon}
                    alt=""
                    width={15}
                    height={15}
                    className="object-contain"
                />
        
       </div>
            <div>
                <span className="font-semibold text-12px text-gray">{text}</span>
                
            </div>
        </div>
    );
}