import { NavLink } from "react-router-dom";

import { SvgIconComponent } from "@mui/icons-material";

import Icon from "@/components/Layout/Sidebar/Item/Icon";
import Label from "@/components/Layout/Sidebar/Item/Label";

interface ItemProps {
  icon: SvgIconComponent;
  label: string;
  to: string;
  isMinimized?: boolean;
};

const Item = ({ icon, label, to, isMinimized = false }: ItemProps) => {
  return (
    <NavLink to={to} className={({ isActive }) =>
      `w-full flex gap-3 rounded-lg p-3 items-center transition-colors duration-200 hover:text-blue-700 ${
        isActive ? "bg-gray-200 text-blue-700" : "hover:bg-gray-200 text-gray-700"
      }`
    }>
      <Icon icon={icon} isMinimized={isMinimized} />
      <Label label={label} isMinimized={isMinimized} />
    </NavLink>
  );
};

export default Item;
