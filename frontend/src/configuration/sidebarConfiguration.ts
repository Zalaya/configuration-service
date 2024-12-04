import { GroupProps } from "@/components/Sidebar/Group/Group.tsx";

import FolderCopyOutlinedIcon from "@mui/icons-material/FolderCopyOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

export const sidebarConfiguration: GroupProps[] = [
  {
    text: "Management",
    items: [
      {
        text: "Modules",
        component: FolderCopyOutlinedIcon
      },
      {
        text: "Properties",
        component: ListAltOutlinedIcon
      }
    ]
  },
  {
    text: "Configuration",
    items: [
      {
        text: "Settings",
        component: SettingsOutlinedIcon
      }
    ]
  }
];