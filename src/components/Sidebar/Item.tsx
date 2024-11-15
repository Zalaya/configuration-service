import { NavLink } from "react-router-dom";

import { SvgIconComponent } from "@mui/icons-material";

interface ItemProps {
  icon: SvgIconComponent;
  label?: string;
  to: string;
};

const Item = ({ icon: Icon, label = "", to }: ItemProps) => {
  return (
    <NavLink to={to} className={({ isActive }) =>
      `w-full flex gap-3 rounded-lg p-3 items-center transition-all duration-200 hover:text-blue-700 ${
        isActive ? "bg-gray-200 text-blue-700" : "hover:bg-gray-200 text-gray-700"
      }`
    }>
      <Icon />
      {label && (
        <span className="font-semibold">
          {label}
        </span>
      )}
    </NavLink>
  );
};

export default Item;
