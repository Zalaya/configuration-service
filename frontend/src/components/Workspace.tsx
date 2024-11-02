import { useNavigation } from "../hooks/useNavigation";

export type WorkspaceProps = {
    className?: string;
}

export const Workspace = ({ className = "" }: WorkspaceProps) => {
    const { getWorkspace } = useNavigation();

    return (
        <div className={`h-full w-full bg-blue-600 rounded-lg p-3 select-none shadow-lg ${className}`}>
            {getWorkspace()}
        </div>
    )   
}