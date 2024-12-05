import { Group } from "@/components/Sidebar/Group/Group";

import { topGroup, bottomGroup } from "@/configuration/sidebarConfiguration.ts";

export const Sidebar = () => {
  return (
    <div>
      {[topGroup, bottomGroup].map((items, index) => (
        <Group key={index} items={items}/>
      ))};
    </div>
  );
};
