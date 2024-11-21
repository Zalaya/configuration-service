import { SvgIconComponent } from "@mui/icons-material";

interface IconProps {
  icon: SvgIconComponent;
};

const Icon = ({ icon: Icon}: IconProps) => {
  return (
    <div className="flex justify-center items-center">
      <Icon />
    </div>
  );
};

export default Icon;
