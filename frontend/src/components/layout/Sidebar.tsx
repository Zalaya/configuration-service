import { useState } from "react";
import { useSidebar } from "../../contexts/SidebarContext"
import { SidebarSection } from "./SidebarSection";

export type SidebarProps = {

    className?: string;

}

export const Sidebar = ({ className }: SidebarProps) => {

    const { main, footer } = useSidebar();
    const [isMinimized, setIsMinimized] = useState<Boolean>(false);

    const handleClick = () => {
        setIsMinimized(isMinimized => !isMinimized);
    }  

    return (
        <div 
            className={`flex flex-col justify-between h-full p-3 bg-gray-100 rounded-lg transition-all duration-200 ${!isMinimized ? "w-[12rem]" : "w-[4.5rem]"} ${className}`}
            onClick={handleClick}
        >
            <SidebarSection items={main} isMinimized={isMinimized} />
            <SidebarSection items={footer} isMinimized={isMinimized} />
        </div>
    )

}