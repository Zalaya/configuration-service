import { Sidebar } from "./components/Sidebar"
import { Item } from "./components/Item"
import { Layout } from "./components/Layout"
import MonitorOutlinedIcon from '@mui/icons-material/MonitorOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';

export const App = () => {

    return (
        <Layout>
            <Sidebar>
                <Item icon={ MonitorOutlinedIcon } iconSize="medium" text="Modules" />       
                <Item icon={ SettingsSuggestOutlinedIcon } iconSize="medium" text="Properties" />      
            </Sidebar>
        </Layout>
    )
    
}