import { NavItem, NavItemProps } from "@/components/Sidebar/NavItem/NavItem.tsx";

import { Label } from "@/components/Sidebar/Group/Label.tsx";
import { Separator } from "@/components/Sidebar/Group/Separator.tsx";

export type GroupProps = {
  text: string;
  items: NavItemProps[];
};

export const Group = ({ text, items }: GroupProps) => {
  return (
    <div>
      <Label text={text} />
      <Separator />
      <div>
        {items.map((props, index) => (
          <NavItem key={index} {...props} />
        ))}
      </div>
    </div>
  );
}
