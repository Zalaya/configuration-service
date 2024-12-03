import AppsIcon from '@mui/icons-material/Apps';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SettingsIcon from '@mui/icons-material/Settings';

import Group from "./Group";
import Item from "./Item/Item";

const Sidebar = () => {
  return (
    <div className="bg-white h-full flex justify-between flex-col rounded-lg w-64 p-3">
      <Group>
        <Item icon={AppsIcon} text="Modules" />
        <Item icon={AutoAwesomeIcon} text="Properties" />
      </Group>
      <Group>
        <Item icon={SettingsIcon} text="Settings" />
      </Group>
    </div>
  );
};

export default Sidebar;
