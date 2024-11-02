import { WorkspaceType } from "../../enums/WorkspaceType";
import { Item, ItemProps } from "../ui/Item";

export type SidebarSectionProps = {
    items: (ItemProps & { screen: WorkspaceType })[];
    isMinimized: boolean;
    onClick: (workspace: WorkspaceType) => void;
    className?: string;
}

export const SidebarSection = ({ items, isMinimized, onClick, className = "" }: SidebarSectionProps) => {
    return (
        <div className={`flex flex-col gap-1 ${className}`}>
            {items.map((item, index) => (
                <Item key={index} icon={item.icon} text={!isMinimized ? item.text : undefined} onClick={() => onClick(item.screen)} />
            ))}
        </div>
    );
};
