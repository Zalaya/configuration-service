import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import AutoAwesomeMotionOutlinedIcon from '@mui/icons-material/AutoAwesomeMotionOutlined';

import Item from "./Item";

const Sidebar = () => {
  return (
    <div className="w-1/5 h-full bg-white rounded-lg p-3 flex flex-col gap-1">
      <Item icon={LayersOutlinedIcon} label="Modules" to="/modules" />
      <Item icon={AutoAwesomeMotionOutlinedIcon} label="Properties" to="/properties" />
    </div>
  );
};

export default Sidebar;
