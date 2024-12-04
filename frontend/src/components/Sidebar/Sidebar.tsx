import { sidebarConfiguration } from "@/configuration/sidebarConfiguration.ts";

import { Group } from "@/components/Sidebar/Group/Group.tsx";

export const Sidebar = () => {
  return (
    <div>
      {sidebarConfiguration.map((props, index) => (
        <Group key={index} {...props} />
      ))}
    </div>
  );
};
