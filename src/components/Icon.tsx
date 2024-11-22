import { ComponentType, SVGProps } from "react";

interface IconProps {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  className?: string;
};

const Icon = ({ icon: Icon, className = "" }: IconProps) => {
  return <Icon className={className} />;
};

export default Icon;
