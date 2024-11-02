import { SvgIconComponent } from "@mui/icons-material"
import { SvgIconProps } from "@mui/material";
import { Icon } from "./Icon";

export type ItemProps = {
    icon: SvgIconComponent;
    iconSize?: SvgIconProps["fontSize"];
    iconColor?: SvgIconProps["htmlColor"];
    text?: string;
    onClick?: (event: React.MouseEvent) => void;
}

export const Item = ({ icon, iconSize, iconColor, text, onClick }: ItemProps) => {
    return (
        <div 
            className="flex items-center justify-start gap-3 p-3 transition-all duration-200 rounded-lg cursor-pointer select-none hover:bg-gray-200 hover:text-blue-700"
            onClick={onClick}
        >
            <Icon icon={icon} size={iconSize} color={iconColor}  />
            {text && <span className="font-semibold">
                {text}
            </span>}
        </div>
    )
}