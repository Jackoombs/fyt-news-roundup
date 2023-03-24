import clsx from "clsx";
import { ActiveItem } from "../../pages";
import { motion } from "framer-motion";

interface Props {
  children: JSX.Element;
  item: ActiveItem;
  activeItem: ActiveItem;
  setActiveItem: React.Dispatch<React.SetStateAction<ActiveItem>>;
}

export const NavItem = ({
  children,
  item,
  activeItem,
  setActiveItem,
}: Props) => {
  return (
    <li className="relative">
      <button
        className={clsx(
          "relative z-10 flex aspect-square w-full flex-col items-center justify-center gap-2 rounded-lg p-2 text-xs outline outline-0 outline-indigo-500",
          item !== activeItem && "hover:outline-2"
        )}
        onClick={() => setActiveItem(item)}
      >
        {children}
      </button>
      {item === activeItem && (
        <motion.div
          transition={{ duration: 0.3 }}
          layoutId="menuItem"
          className="absolute left-0 top-0 h-full w-full rounded-lg bg-indigo-500"
        />
      )}
    </li>
  );
};
