import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import AutoAwesomeMotionOutlinedIcon from '@mui/icons-material/AutoAwesomeMotionOutlined';

import Item from "./Item";
import { MouseEvent, useState } from "react";

const Sidebar = () => {
  const [isMinimized, setIsMinimized] = useState<boolean>(false);

  const handleClick = (event: MouseEvent) => {
    if (event.target === event.currentTarget) {
      setIsMinimized(isMinimized => !isMinimized);
    };
  };

  return (
    <div
      className={`h-full bg-white rounded-lg p-3 flex flex-col gap-1 transition-all duration-200 ${!isMinimized ? "w-1/6" : "w-[4.5em]"}`}
      onClick={handleClick}
    >
      <Item icon={LayersOutlinedIcon} label={!isMinimized ? "Modules" : undefined} to="/modules" />
      <Item icon={AutoAwesomeMotionOutlinedIcon} label={!isMinimized ? "Properties" : undefined} to="/properties" />
    </div>
  );
};

export default Sidebar;
