import { NavItemProps } from "@/components/Sidebar/Group/NavItem/NavItem";

import FolderCopyOutlinedIcon from "@mui/icons-material/FolderCopyOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

export const topGroup: NavItemProps[] = [
  { text: "Modules", component: FolderCopyOutlinedIcon },
  { text: "Properties", component: ListAltOutlinedIcon },
];

export const bottomGroup: NavItemProps[] = [
  { text: "Settings", component: SettingsOutlinedIcon },
];
