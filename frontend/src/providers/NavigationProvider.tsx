import { ReactNode, useState } from "react";
import { WorkspaceType } from "../enums/WorkspaceType";
import { NavigationContext } from "../contexts/NavigationContext";
import { Modules } from "../components/Modules";
import { Properties } from "../components/Properties";
import { Settings } from "../components/Settings";

const workspaceComponents: Record<WorkspaceType, JSX.Element> = {
    [WorkspaceType.MODULES]: <Modules />,
    [WorkspaceType.PROPERTIES]: <Properties />,
    [WorkspaceType.SETTINGS]: <Settings />
};

export type NavigationProviderProps = {
    children: ReactNode;
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