import Link from "next/link";
import { ReactNode } from "react";

interface SidebarItemProps {
  href: string;
  icon: ReactNode;
  label: string;
};

const SidebarItem = ({ href, icon, label }: SidebarItemProps) => {
  return (
    <Link href={href} className="flex text-black items-center gap-3 p-3 rounded-lg hover:bg-gray-200 transition-all duration-200 hover:text-blue-700">
      <div className="text-2xl">
        {icon}
      </div>
      <span className="font-semibold">
        {label}
      </span>
    </Link>
  );
};

export default SidebarItem;