import { ScreenType } from "../screens/enums/ScreenType";
import { Modules } from "../screens/Modules";
import { Properties } from "../screens/Properties";

type WorkspaceProps = {

    screen: ScreenType;

};

export const Workspace = ({ screen }: WorkspaceProps) => {
    
    return (
        <div className="bg-gray-100 h-full w-full rounded-lg shadow-lg p-5">
            { screen === ScreenType.MODULES && <Modules />}
            { screen === ScreenType.PROPERTIES && <Properties />}
        </div>
    );

};