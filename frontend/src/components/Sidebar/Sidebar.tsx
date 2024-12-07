import { Group } from "@/components/Sidebar/Group/Group";

import { sidebarConfiguration } from "@/configuration/sidebarConfiguration.ts";

export const Sidebar = () => {
  return (
    <div>
      {sidebarConfiguration.map((props, index) => (
        <Group key={index} {...props} />
      ))}
    </div>
  );
};
