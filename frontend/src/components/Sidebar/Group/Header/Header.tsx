import { Title, TitleProps } from "@/components/Sidebar/Group/Header/Title";
import { Separator } from "@/components/Sidebar/Group/Header/Separator";

export type HeaderProps = TitleProps;

export const Header = ({ text }: HeaderProps) => {
  return (
    <div>
      <Title text={text} />
      <Separator />
    </div>
  );
};
