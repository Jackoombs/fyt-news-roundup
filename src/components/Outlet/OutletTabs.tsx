import { Tab } from "../../pages/outlets";
import clsx from "clsx";
import { motion } from "framer-motion";

interface Props {
  activeTab: Tab["value"];
  setActiveTab: React.Dispatch<React.SetStateAction<Tab["value"]>>;
}

export const OutletTabs = ({ activeTab, setActiveTab }: Props) => {
  const tabTemplate: Tab[] = [
    {
      name: "Articles",
      value: "ARTICLES",
    },
    {
      name: "Categorys",
      value: "CATEGORYS",
    },
  ];

  return (
    <div>
      <ul className="grid w-max grid-cols-2">
        {tabTemplate.map(({ name, value }) => (
          <li role="tab" key={value} className="relative">
            <button
              className="relative z-10 w-40 px-6 py-2 font-semibold"
              onClick={() => setActiveTab(value)}
            >
              {name}
            </button>
            {value === activeTab && (
              <motion.div
                transition={{ duration: 0.3 }}
                layoutId="tab"
                className="absolute left-0 top-0 h-full w-full rounded-t-lg bg-indigo-300"
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
