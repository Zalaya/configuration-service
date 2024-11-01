import { Sidebar } from "./components/Sidebar"
import { SidebarItem } from "./components/SidebarItem"
import { Layout } from "./components/Layout"
import MonitorOutlinedIcon from '@mui/icons-material/MonitorOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import { Workspace } from "./components/Workspace";
import { useState } from "react";
import { ScreenType } from "./screens/enums/ScreenType";

export const App = () => {

    const [screen, setScreen] = useState<ScreenType>(ScreenType.MODULES)

    return (
        <Layout>
            <Sidebar>
                <SidebarItem icon={ MonitorOutlinedIcon } iconSize="medium" text="Modules" onClick={ () => setScreen(ScreenType.MODULES) }  />       
                <SidebarItem icon={ SettingsSuggestOutlinedIcon } iconSize="medium" text="Properties" onClick={ () => setScreen(ScreenType.PROPERTIES) } />      
            </Sidebar>
            <Workspace screen={ screen } />
        </Layout>
    )
    
}