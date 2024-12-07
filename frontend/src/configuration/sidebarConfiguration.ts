import { GroupProps } from "@/components/Sidebar/Group/Group";

import FolderCopyOutlinedIcon from "@mui/icons-material/FolderCopyOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

export const sidebarConfiguration: GroupProps[] = [
  {
    items: [
      { text: "Modules", component: FolderCopyOutlinedIcon },
      { text: "Properties", component: ListAltOutlinedIcon },
    ]
  },
  {
    items: [
      { text: "Settings", component: SettingsOutlinedIcon },
    ]
  }
];
