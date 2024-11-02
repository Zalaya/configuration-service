import { useNavigation } from "../../hooks/useNavigation";

export type WorkspaceProps = {
    className?: string;
}

export const Workspace = ({ className = "" }: WorkspaceProps) => {
    const { getWorkspace } = useNavigation();

    return (
        <div className={`h-full w-full bg-gray-300 rounded-lg p-3 select-none ${className}`}>
            {getWorkspace()}
        </div>
    )
}