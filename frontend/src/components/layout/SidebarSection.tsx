import { Item, ItemProps } from "../ui/Item"

export type SidebarSectionProps = {

    items: ItemProps[];
    isMinimized: Boolean;
    className?: string;

}

export const SidebarSection = ({ items, isMinimized, className }: SidebarSectionProps) => {

    return (
        <div className={`flex flex-col gap-1 ${className}`}>
            {items.map((item, index) => (
                <Item key={index} icon={item.icon} text={!isMinimized ? item.text : undefined} onClick={event => event.stopPropagation()} />
            ))}
        </div>
    )

}