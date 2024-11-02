import { Screen } from "./components/layout/Screen";
import { Sidebar } from "./components/layout/Sidebar";
import { Workspace } from "./components/layout/Workspace";
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