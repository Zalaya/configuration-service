import { SvgIconComponent } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

interface ItemProps {
  icon: SvgIconComponent;
  label: string;
  to: string;
};

const Item = ({ icon: Icon, label, to }: ItemProps) => {
  return (
    <NavLink to={to} className="w-full flex gap-3 rounded-lg p-3 items-center transition duration-200 hover:bg-gray-200">
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
