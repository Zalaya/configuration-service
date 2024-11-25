import { SvgIconComponent } from "@mui/icons-material";
import { SvgIconProps } from "@mui/material/SvgIcon";

interface IconProps extends SvgIconProps {
  icon: SvgIconComponent;
  className?: string;
};

const Icon = ({ icon: Icon, className = "", ...props }: IconProps) => {
  return <Icon className={className} {...props} />;
};

export default Icon;
