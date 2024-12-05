import { sidebarConfiguration } from "@/configuration/sidebarConfiguration";

import { Group } from "@/components/Sidebar/Group/Group";

export const Sidebar = () => {
  return (
    <div>
      {sidebarConfiguration.map((props, index) => (
        <Group key={index} {...props} />
      ))}
    </div>
  );
};
