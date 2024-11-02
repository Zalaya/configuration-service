import { createContext } from "react";
import { WorkspaceType } from "../enums/WorkspaceType";

export type NavigationContextProps = {
    workspace: WorkspaceType;
    getWorkspace: () => JSX.Element;
    setWorkspace: (workspace: WorkspaceType) => void;
};

export const NavigationContext = createContext<NavigationContextProps | undefined>(undefined);
