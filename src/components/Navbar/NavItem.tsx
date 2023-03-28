import clsx from "clsx";
import { ActiveItem } from "../../pages";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  link: string;
  children: JSX.Element;
}

export const NavItem = ({ link, children }: Props) => {
  const router = useRouter();
  const isActive = router.pathname.startsWith(link);

  return (
    <Link href={link} className="relative">
      <div
        className={clsx(
          "relative z-10 flex aspect-square w-full flex-col items-center justify-center gap-2 rounded-lg p-2 text-xs outline outline-0 outline-indigo-500",
          isActive && "hover:outline-2"
        )}
      >
        {children}
      </div>
      {isActive && (
        <motion.div
          transition={{ duration: 0.3 }}
          layoutId="menuItem"
          className="absolute left-0 top-0 h-full w-full rounded-lg bg-indigo-500"
        />
      )}
    </Link>
  );
};
