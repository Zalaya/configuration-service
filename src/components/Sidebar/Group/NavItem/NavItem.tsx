import { SvgIconComponent } from "@mui/icons-material";

export type NavItemProps = {
  icon: SvgIconComponent;
  text: string;
};

export const NavItem = ({ icon: Icon, text }: NavItemProps) => {
  return (
    <div>
      <Icon />
      <div>
        {text}
      </div>
    </div>
  );
};
