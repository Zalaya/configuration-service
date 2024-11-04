import { ReactNode } from "react";
import { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Configuration Service"
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
