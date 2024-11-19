import { SvgIconComponent } from "@mui/icons-material";

interface IconProps {
  icon: SvgIconComponent;
  isMinimized?: boolean;
};

const Icon = ({ icon: Icon, isMinimized = false}: IconProps) => {
  return (
    <div className={`flex justify-center items-center transition-transform duration-200 ${isMinimized ? "rotate-[-360deg]" : ""}`}>
      <Icon />
    </div>
  );
};

export default Icon;
