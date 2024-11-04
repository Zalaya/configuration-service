import { ReactNode } from "react";
import { Metadata } from "next";

import MainLayout from "@/components/MainLayout";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Configuration Service"
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html>
      <body>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
};

export default RootLayout;
