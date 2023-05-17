"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  link: string;
}

const NavItem = ({ children, link }: Props) => {
  const pathname = usePathname();
  const isActive = pathname.startsWith(link);

  return (
    <Link
      className="relative flex text-xs w-20 h-20 rounded-lg duration-300 font-bold tracking-wide"
      href={link}
    >
      <span
        className={clsx(
          "mx-auto relative gap-1 z-10 flex flex-col items-center justify-center duration-300",
          !isActive
            ? "text-slate-500 dark:text-slate-800"
            : "dark:text-slate-200"
        )}
      >
        {children}
      </span>
      {isActive && (
        <motion.div
          transition={{ duration: 0.3, ease: "easeInOut" }}
          layoutId="menuItem"
          className="absolute left-0 top-0 h-full w-full rounded-lg bg-white z-index ring-1 ring-slate-700 dark:bg-slate-900"
        />
      )}
    </Link>
  );
};

export default NavItem;
