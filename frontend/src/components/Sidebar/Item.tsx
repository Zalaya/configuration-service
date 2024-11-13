import { SvgIconComponent } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

interface ItemProps {
  icon: SvgIconComponent;
  label: string;
  to: string;
};

const Item = ({ icon: Icon, label, to }: ItemProps) => {
  return (
    <NavLink to={to} className="">
      <Icon className="" />
      <span>
        {label}
      </span>
    </NavLink>
  );
};

export default Item;
