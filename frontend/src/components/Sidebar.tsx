import React, { ReactElement, ReactNode, useState } from "react";

type SidebarProps = {

    children: ReactNode;
    
}

export const Sidebar = ({ children }: SidebarProps) => {

    const [isMinimized, setIsMinimized] = useState<Boolean>(false);

    const handleClickEvent = () => {
        setIsMinimized(isMinimized => !isMinimized)
    }
 
    return (
        <div 
            className={ `flex flex-col h-full p-5 space-y-2.5 transition-all duration-200 bg-gray-100 rounded-lg shadow-lg ${ isMinimized ? "w-[6%]" : "w-1/6" }` }
            onClick={ handleClickEvent }
        >
            {children && React.Children.map(children, (child) =>
                React.isValidElement(child) ? (
                    React.cloneElement(child as ReactElement, { isMinimized })
                ) : (
                    child
                )
            )}
        </div>
    );

};