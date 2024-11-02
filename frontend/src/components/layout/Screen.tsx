import { ReactNode } from "react";

export type ScreenProps = {
    children: ReactNode;
    className?: string;
}

export const Screen = ({ children, className = "" }: ScreenProps) => {
    return (
        <div className={`h-screen p-3 bg-white ${className}`}>
            {children}
        </div>
    );
};
