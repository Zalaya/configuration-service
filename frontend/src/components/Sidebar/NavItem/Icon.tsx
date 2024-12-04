import { SvgIconComponent } from "@mui/icons-material";

export type IconProps = {
  component: SvgIconComponent;
};

export const Icon = ({ component: Component }: IconProps) => {
  return (
    <Component />
  );
};
