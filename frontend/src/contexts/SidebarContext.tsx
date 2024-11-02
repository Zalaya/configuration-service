import { createContext } from "react";
import { WorkspaceType } from "../enums/WorkspaceType";
import WebRoundedIcon from "@mui/icons-material/WebRounded";
import BuildRoundedIcon from "@mui/icons-material/BuildRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import { ItemProps } from "../components/Item";

export type SidebarContextProps = {
    main: (ItemProps & { screen: WorkspaceType })[];
    footer: (ItemProps & { screen: WorkspaceType })[];
};

export const SidebarContext = createContext<SidebarContextProps>({
    main: [
        {
            icon: WebRoundedIcon,
            text: "Modules",
            screen: WorkspaceType.MODULES,
        },
        {
            icon: BuildRoundedIcon,
            text: "Properties",
            screen: WorkspaceType.PROPERTIES,
        },
    ],
    footer: [
        {
            icon: SettingsRoundedIcon,
            text: "Settings",
            screen: WorkspaceType.SETTINGS,
        }
    ]
});
