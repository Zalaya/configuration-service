import { SvgIconComponent } from "@mui/icons-material"
import { SvgIconProps } from "@mui/material";

export type IconProps = {
    icon: SvgIconComponent;
    size?: SvgIconProps["fontSize"];
    color?: SvgIconProps["htmlColor"];
}

export const Icon = ({ icon: Icon, size = "medium", color = "inherit" }: IconProps) => {
    return Icon ? (
        <Icon fontSize={size} htmlColor={color} />
    ) : null;
}
