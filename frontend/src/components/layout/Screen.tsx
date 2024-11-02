import { ReactNode } from "react";

export type ScreenProps = {
    children: ReactNode;
    className?: string;
}

export const Screen = ({ children, className = "" }: ScreenProps) => {
    return (
        <div className={`flex gap-3 h-screen p-3 bg-white ${className}`}>
            {children}
        </div>
    );
};
