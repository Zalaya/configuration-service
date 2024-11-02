import { createContext, useContext } from "react";
import { ItemProps } from "../components/ui/Item";
import WebRoundedIcon from '@mui/icons-material/WebRounded';
import BuildRoundedIcon from '@mui/icons-material/BuildRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

type SidebarSections = {
    main: ItemProps[];
    footer: ItemProps[];
}

const SidebarContext = createContext<SidebarSections>({
    main: [
        {
            icon: WebRoundedIcon,
            text: "Modules"
        },
        {
            icon: BuildRoundedIcon,
            text: "Properties"
        }
    ],
    footer: [
        {
            icon: SettingsRoundedIcon,
            text: "Settings"
        }
    ]
});

export const useSidebar = () => {
    return useContext(SidebarContext)
};
