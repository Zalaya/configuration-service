import { Screen } from "./components/Screen";
import { Sidebar } from "./components/Sidebar";
import { Workspace } from "./components/Workspace";
import { NavigationProvider } from "./providers/NavigationProvider";
export const App = () => {
    return (
        <NavigationProvider>
            <Screen>
                <Sidebar />
                <Workspace />
            </Screen>
        </NavigationProvider>
    )
}