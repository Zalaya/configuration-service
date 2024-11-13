import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";

import Item from "./Item";

const Sidebar = () => {
  return (
    <div className="w-1/5 h-full bg-white rounded-lg p-3">
      <Item icon={LayersOutlinedIcon} label="Home" to="/" />
    </div>
  );
};

export default Sidebar;
