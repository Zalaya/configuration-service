import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Configuration Service"
};

interface RootLayoutProps {
  children: ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
};
