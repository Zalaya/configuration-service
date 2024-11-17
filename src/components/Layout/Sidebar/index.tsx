import { MouseEvent, useState } from "react";

import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import AutoAwesomeMotionOutlinedIcon from '@mui/icons-material/AutoAwesomeMotionOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import Item from "./Item";
import Section from "./Section";

const Sidebar = () => {
  const [isMinimized, setIsMinimized] = useState<boolean>(false);

  return (
    <div
      className={`h-full bg-white rounded-lg p-3 flex flex-col justify-between transition-all duration-200 ${!isMinimized ? "w-[15em]" : "w-[4.5em]"}`}
      onClick={(event: MouseEvent) => (event.target === event.currentTarget) ? setIsMinimized(isMinimized => !isMinimized) : undefined}
    >
      <Section>
        <Item icon={LayersOutlinedIcon} label={!isMinimized ? "Modules" : undefined} to="/modules" />
        <Item icon={AutoAwesomeMotionOutlinedIcon} label={!isMinimized ? "Properties" : undefined} to="/properties" />
      </Section>
      <Section>
        <Item icon={SettingsOutlinedIcon} label={!isMinimized ? "Settings" : undefined} to="/settings" />
        <Item icon={AccountCircleOutlinedIcon} label={!isMinimized ? "Account" : undefined} to="/settings" />
      </Section>
    </div>
  );
};

export default Sidebar;
