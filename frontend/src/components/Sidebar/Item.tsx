import { SvgIconComponent } from "@mui/icons-material";

type ItemProps = {
  icon: SvgIconComponent;
  text: string;
}

const Item = ({ icon: Icon, text }: ItemProps) => {
  return (
    <div className="hover:bg-gray-200 transition-colors duration-200 cursor-pointer flex gap-2 px-3 py-2 rounded-lg items-center">
      <Icon />
      <span>{text}</span>
    </div>
  );
};

export default Item;
