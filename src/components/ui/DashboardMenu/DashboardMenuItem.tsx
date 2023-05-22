"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

interface DashboardMenuItemProps {
  children: React.ReactNode;
  link: string;
}

const DashboardMenuItem = ({ children, link }: DashboardMenuItemProps) => {
  const pathname = usePathname();
  const isActive = pathname.includes(link);

  return (
    <Link className="relative w-20 py-1.5" href={link}>
      <p
        className={clsx(
          "mx-auto relative gap-1 z-10 flex flex-col items-center justify-center duration-300 font-display font-bold tracking-wide text-xs",
          !isActive
            ? "text-slate-500 dark:text-slate-700"
            : "dark:text-slate-200"
        )}
      >
        {children}
      </p>
      {isActive && (
        <motion.span
          transition={{ duration: 0.3, ease: "easeInOut" }}
          layoutId="dashboardMenuItem"
          className="absolute left-0 top-0 rounded-md w-full h-full bg-white z-index dark:bg-slate-950"
        />
      )}
    </Link>
  );
};

export default DashboardMenuItem;
