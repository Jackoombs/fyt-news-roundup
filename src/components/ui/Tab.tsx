import { TabType } from "../../types/types";
import { motion } from "framer-motion";
import clsx from "clsx";

interface Props<T> {
  tab: TabType<T>;
  activeTab: TabType<T>["value"];
  setActiveTab: React.Dispatch<React.SetStateAction<TabType<T>["value"]>>;
  tabWidth?: string;
}

export const Tab = <T,>({
  tab,
  activeTab,
  setActiveTab,
  tabWidth = "w-40",
}: Props<T>) => {
  return (
    <li role="tab" className="relative w-full">
      <button
        className={clsx("relative z-10 px-6 py-2 font-semibold", tabWidth)}
        onClick={() => setActiveTab(tab.value)}
      >
        {tab.name}
      </button>
      {tab.value === activeTab && (
        <motion.div
          transition={{ duration: 0.3 }}
          layoutId="tab"
          className="absolute left-0 top-0 h-full w-full rounded-t-lg bg-indigo-300"
        />
      )}
    </li>
  );
};
