import { SvgIconComponent } from "@mui/icons-material"
import { SvgIconProps } from "@mui/material";

export type IconProps = {

    icon: SvgIconComponent;
    size?: SvgIconProps["fontSize"];
    color?: SvgIconProps["htmlColor"];
    className?: string;

}

export const Icon = ({ icon: Icon, size = "medium", color = "inherit", className }: IconProps) => {

    return Icon ? (
        <Icon className={`${className}`} fontSize={size} htmlColor={color} />
    ) : null;

}
