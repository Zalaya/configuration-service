import { MdMonitor } from "react-icons/md";
import { RiListSettingsFill } from "react-icons/ri";
import { PiGearBold } from "react-icons/pi";
import SidebarItem from "./SidebarItem";


const Sidebar = () => {
  return (
    <div className="h-full bg-white w-1/6 rounded-lg p-3 flex flex-col justify-between">
      <div>
        <SidebarItem href="/modules" icon={<MdMonitor />} label="Modules" />
        <SidebarItem href="/properties" icon={<RiListSettingsFill />} label="Properties" />
      </div>
      <div>
        <SidebarItem href="/settings" icon={<PiGearBold />} label="Settings" />
      </div>
    </div>
  );
};

export default Sidebar;