import { SvgIconComponent } from "@mui/icons-material";

type ItemProps = {
  icon: SvgIconComponent;
  text: string;
}

const Item = ({ icon: Icon, text }: ItemProps) => {
  return (
    <div className="hover:bg-gray-200 hover:text-blue-700 transition-colors duration-200 cursor-pointer flex gap-2 p-3 rounded-lg items-center">
      <Icon />
      <span className="font-semibold text-base">
        {text}
      </span>
    </div>
  );
};

export default Item;
