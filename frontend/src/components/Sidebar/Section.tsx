import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
}

const Section = ({ children }: SectionProps) => {
  return (
    <div className="flex flex-col gap-1">
      {children}
    </div>
  );
};

export default Section;
