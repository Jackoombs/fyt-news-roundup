import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  outlets: string[];
  activeOutlet: string;
  setActiveOutlet: React.Dispatch<React.SetStateAction<string | null>>;
}

export const OutletSelect = ({
  outlets,
  activeOutlet,
  setActiveOutlet,
}: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = outlets.filter((name) => name !== activeOutlet);

  return (
    <div className="relative w-full max-w-[16rem]">
      <button
        onClick={() => setMenuOpen((prev) => !prev)}
        className={clsx(
          "flex h-12 w-full items-center justify-between rounded bg-indigo-50 px-4 duration-100",
          menuOpen && "rounded-b-none bg-indigo-50"
        )}
      >
        <h2 className="text-xl font-semibold">{activeOutlet}</h2>
        <div className="flex h-8 w-6 flex-col items-center justify-self-end">
          <ChevronUpIcon className="-mb-2" />
          <ChevronDownIcon />
        </div>
      </button>
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute left-0 z-20 w-full origin-top-left overflow-hidden rounded-b-lg bg-indigo-50"
          >
            {menuItems.map((name) => (
              <li key={name}>
                <button
                  className="w-full px-4 py-2 text-left text-lg font-medium duration-150 hover:bg-indigo-700 hover:text-indigo-50"
                  onClick={() => {
                    setActiveOutlet(name);
                    setMenuOpen(false);
                  }}
                >
                  {name}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};
