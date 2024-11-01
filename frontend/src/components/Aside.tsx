import PublicRoundedIcon from '@mui/icons-material/PublicRounded';
import ToggleOffRoundedIcon from '@mui/icons-material/ToggleOffRounded';

export const Aside = () => {
    return (
        <div className="bg-blue-700 w-fit rounded-lg h-auto mx-auto p-3 flex gap-3">
            <div className="bg-blue-600 w-12 h-12 p-2 rounded-lg flex justify-center items-center">
                <PublicRoundedIcon className="text-white text-3xl" />
            </div>
            <div className="bg-blue-600 w-12 h-12 p-2 rounded-lg flex justify-center items-center">
                <ToggleOffRoundedIcon className="text-white text-3xl" />
            </div>
        </div>
    );
};
