import { useState } from "react";
import { useSidebar } from "../../contexts/SidebarContext"
import { Item, ItemProps } from "../ui/Item";

export const Sidebar = () => {
    const { main, footer } = useSidebar();
    const [isMinimized, setIsMinimized] = useState<Boolean>(false);

    const handleClick = () => {
        setIsMinimized(isMinimized => !isMinimized);
    }  

    const renderItems = (items: ItemProps[]) => {
        return items.map((item, index) => (
            <Item key={index} icon={item.icon} text={!isMinimized ? item.text : undefined} onClick={event => event.stopPropagation()} />
        ));
    }

    return (
        <div 
            className={`flex flex-col justify-between h-full p-3 bg-gray-100 rounded-lg transition-all duration-200 ${!isMinimized ? "w-[12rem]" : "w-[4.5rem]"}`}
            onClick={handleClick}
        >
            {main && (
                <div className="flex flex-col gap-1">
                    {renderItems(main)}
                </div>
            )}
            {footer && (
                <div className="flex flex-col gap-1 mt-auto">
                    {renderItems(footer)}
                </div>
            )}
        </div>
    )
}