import { SvgIconComponent } from "@mui/icons-material";

import { Icon } from "@/components/Sidebar/NavItem/Icon.tsx";
import { Label } from "@/components/Sidebar/NavItem/Label.tsx";

export type NavItemProps = {
  component: SvgIconComponent;
  text: string;
};

export const NavItem = ({ component, text }: NavItemProps) => {
  return (
    <div>
      <Icon component={component} />
      <Label text={text} />
    </div>
  );
};
