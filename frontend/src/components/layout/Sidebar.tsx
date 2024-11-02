import { useState } from "react";
import { useSidebar } from "../../hooks/useSidebar";
import { SidebarSection } from "./SidebarSection";
import { useNavigation } from "../../hooks/useNavigation";
import { WorkspaceType } from "../../contexts/NavigationContext";

export type SidebarProps = {
    className?: string;
}

export const Sidebar = ({ className = "" }: SidebarProps) => {
    const { main, footer } = useSidebar();
    const { setWorkspace } = useNavigation();
    const [isMinimized, setIsMinimized] = useState(false);

    const handleClick = (event: React.MouseEvent) => {
        if (event.target === event.currentTarget) {
            setIsMinimized(prev => !prev);
        }
    };

    return (
        <div
            className={`flex flex-col justify-between h-full p-3 bg-blue-600 rounded-lg transition-all duration-200 ${!isMinimized ? "w-[12rem]" : "w-[4.5rem]"} ${className}`}
            onClick={handleClick}
        >
            <SidebarSection items={main} isMinimized={isMinimized} onClick={(workspace: WorkspaceType) => setWorkspace(workspace)} />
            <SidebarSection items={footer} isMinimized={isMinimized} onClick={(workspace: WorkspaceType) => setWorkspace(workspace)} />
        </div>
    );
};
