import { ReactNode, useState } from "react";
import { WorkspaceType } from "../enums/WorkspaceType";
import { Modules } from "../components/layout/Modules";
import { Properties } from "../components/layout/Properties";
import Settings from "@mui/icons-material/Settings";
import { NavigationContext } from "../contexts/NavigationContext";

export type NavigationProviderProps = {
    children: ReactNode;
};

const workspaceComponents: Record<WorkspaceType, JSX.Element> = {
    [WorkspaceType.MODULES]: <Modules />,
    [WorkspaceType.PROPERTIES]: <Properties />,
    [WorkspaceType.SETTINGS]: <Settings />
};

export const NavigationProvider = ({ children }: NavigationProviderProps) => {
    const [workspace, setWorkspace] = useState<WorkspaceType>(WorkspaceType.MODULES);

    const getWorkspace = () => {
        return workspaceComponents[workspace];
    };

    return (
        <NavigationContext.Provider value={{ workspace, getWorkspace, setWorkspace }}>
            {children}
        </NavigationContext.Provider>
    )
};