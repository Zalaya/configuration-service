import { ReactNode } from "react";

type LayoutProps = {
    children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {

    return (
        <div className="h-screen p-5 bg-gray-300">
            { children }
        </div>
    );
    
};
