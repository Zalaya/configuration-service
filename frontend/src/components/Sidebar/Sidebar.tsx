import FolderCopyOutlinedIcon from "@mui/icons-material/FolderCopyOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

import { Group } from "@/components/Sidebar/Group/Group";
import { NavItem } from "@/components/Sidebar/Group/NavItem/NavItem.tsx";

export const Sidebar = () => {
  return (
    <div>
      <Group>
        <NavItem text="Modules" component={FolderCopyOutlinedIcon} />
        <NavItem text="Properties" component={ListAltOutlinedIcon} />
      </Group>
      <Group>
        <NavItem text="Settings" component={SettingsOutlinedIcon} />
      </Group>
    </div>
  );
};
