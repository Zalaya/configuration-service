import { MouseEvent, useState } from "react";

import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import AutoAwesomeMotionOutlinedIcon from '@mui/icons-material/AutoAwesomeMotionOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

import Section from "@/components/Layout/Sidebar/Section";
import Item from "@/components/Layout/Sidebar/Item";

const Sidebar = () => {
  const [isMinimized, setIsMinimized] = useState<boolean>(false);

  return (
    <div
      className={`h-full bg-white rounded-lg p-3 flex flex-col justify-between transition-all duration-200 select-none overflow-hidden ${!isMinimized ? "w-[15em]" : "w-[4.684em]"}`}
      onClick={(event: MouseEvent) => (event.target === event.currentTarget) ? setIsMinimized(isMinimized => !isMinimized) : undefined}
    >
      <Section>
        <Item icon={LayersOutlinedIcon} label="Modules" to="/modules" isMinimized={isMinimized} />
        <Item icon={AutoAwesomeMotionOutlinedIcon} label="Properties" to="/properties" isMinimized={isMinimized} />
      </Section>
      <Section>
        <Item icon={SettingsOutlinedIcon} label="Settings" to="/settings" isMinimized={isMinimized} />
      </Section>
    </div>
  );
};

export default Sidebar;
