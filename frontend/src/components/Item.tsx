import { SvgIconComponent } from "@mui/icons-material";
import { SvgIconProps } from "@mui/material";

type ItemProps = {
    icon: SvgIconComponent;
    iconSize?: SvgIconProps["fontSize"];
    text: string;
    isMinimized?: boolean;
};

export const Item = ({ icon: Icon, iconSize = "medium", text = "", isMinimized = false }: ItemProps) => {

    const handleClickEvent = (event: React.MouseEvent) => {
        event.stopPropagation();
    }

    return (
        <div 
            className="flex items-center gap-3 p-3 transition-all duration-200 rounded-lg cursor-pointer hover:bg-gray-200 hover:text-blue-700"
            onClick={ handleClickEvent }
        >
            <Icon fontSize={iconSize} />
            {!isMinimized && (
                <span className="text-base font-semibold transition-opacity duration-200">
                    { text }
                </span>
            )}
        </div>
    );
    
};