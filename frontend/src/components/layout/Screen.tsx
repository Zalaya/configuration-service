import { ReactNode } from "react";

type ScreenProps = {
    children: ReactNode;
}

export const Screen = ({ children }: ScreenProps) => {
    return (
        <div className="h-screen p-3 bg-gray-300">
            {children}
        </div>
    )
}