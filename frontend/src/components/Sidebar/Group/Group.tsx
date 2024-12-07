import { NavItem, NavItemProps } from "@/components/Sidebar/Group/NavItem/NavItem";

export type GroupProps = {
  items: NavItemProps[];
};

export const Group = ({ items }: GroupProps) => {
  return (
    <div>
      {items.map((props, index) => (
        <NavItem key={index} {...props} />
      ))}
    </div>
  );
};
