import { SvgIconComponent } from "@mui/icons-material";

import NavItem from "@/components/Layout/Sidebar/Item/NavItem";
import ActionItem from "@/components/Layout/Sidebar/Item/ActionItem";

interface ItemProps {
  icon: SvgIconComponent;
  label?: string;
  to?: string;
  onClick?: () => void;
};

const Item = ({ icon: Icon, label = "", to = "", onClick = () => {} }: ItemProps) => {
  return to ? (
    <NavItem icon={Icon} label={label} to={to} />
  ) : (
    <ActionItem icon={Icon} label={label} onClick={onClick} />
  )
};

export default Item;
