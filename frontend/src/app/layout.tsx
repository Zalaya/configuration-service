import { ReactNode } from "react";

import Container from "@/components/Container";

import "@/styles/globals.css";

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html>
      <body>
        <Container>
          {children}
        </Container>
      </body>
    </html>
  );
};

export default RootLayout;
