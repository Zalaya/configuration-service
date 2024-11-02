import { SvgIconComponent } from "@mui/icons-material";
import { SvgIconProps } from "@mui/material";
import { Icon } from "./Icon";

export type ItemProps = {
    icon: SvgIconComponent;
    iconSize?: SvgIconProps["fontSize"];
    iconColor?: SvgIconProps["htmlColor"];
    text?: string;
    onClick?: (event: React.MouseEvent) => void;
    className?: string;
}

export const Item = ({ icon, iconSize = "medium", iconColor = "inherit", text, onClick, className = "" }: ItemProps) => {
    return (
        <div
            className={`flex items-center justify-start text-white gap-3 p-3 transition-all duration-200 rounded-lg cursor-pointer select-none hover:bg-gray-200 hover:text-blue-600 ${className}`}
            onClick={onClick}
        >
            <Icon icon={icon} size={iconSize} color={iconColor} />
            {text && (
                <span className="font-semibold">{text}</span>
            )}
        </div>
    );
};
