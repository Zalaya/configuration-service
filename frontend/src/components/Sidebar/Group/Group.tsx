import { NavItem, NavItemProps } from "@/components/Sidebar/Group/NavItem/NavItem";

import { Title } from "@/components/Sidebar/Group/Header/Title";
import { Separator } from "@/components/Sidebar/Group/Header/Separator";
import { HeaderProps } from "@/components/Sidebar/Group/Header/Header";

export type GroupProps = HeaderProps & {
  items: NavItemProps[];
}

export const Group = ({ text, items }: GroupProps) => {
  return (
    <div>
      <Title text={text} />
      <Separator />
      <div>
        {items.map((props, index) => (
          <NavItem key={index} {...props} />
        ))}
      </div>
    </div>
  );
}
