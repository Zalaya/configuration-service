import { SvgIconComponent } from "@mui/icons-material";

interface ActionItemProps {
  icon: SvgIconComponent;
  label?: string;
  onClick: () => void;
};

const ActionItem = ({ icon: Icon, label = "", onClick }: ActionItemProps) => {
  return (
    <div className="w-full flex gap-3 rounded-lg p-3 items-center transition-all cursor-pointer duration-200 hover:text-blue-700 hover:bg-gray-200 text-gray-700" onClick={onClick}>
      <Icon />
      {label && (
        <span className="font-semibold">
          {label}
        </span>
      )}
    </div>
  );
};

export default ActionItem;
