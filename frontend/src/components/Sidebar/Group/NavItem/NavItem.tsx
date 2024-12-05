import { Icon, IconProps } from "@/components/Sidebar/Group/NavItem/Icon";
import { Label, LabelProps } from "@/components/Sidebar/Group/NavItem/Label";

export type NavItemProps = IconProps & LabelProps;

export const NavItem = ({ component, text }: NavItemProps) => {
  return (
    <div>
      <Icon component={component} />
      <Label text={text} />
    </div>
  );
};
