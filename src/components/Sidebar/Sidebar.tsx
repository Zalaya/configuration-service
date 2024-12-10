import FolderCopyOutlinedIcon from "@mui/icons-material/FolderCopyOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

import { Group } from "@/components/Sidebar/Group/Group.tsx";
import { NavItem } from "@/components/Sidebar/Group/NavItem/NavItem.tsx";

export const Sidebar = () => {
  return (
    <div>
      <Group>
        <NavItem icon={FolderCopyOutlinedIcon} text="Modules"  />
        <NavItem icon={ListAltOutlinedIcon} text="Properties" />
      </Group>
      <Group>
        <NavItem icon={SettingsOutlinedIcon} text="Settings"  />
      </Group>
    </div>
  );
};
