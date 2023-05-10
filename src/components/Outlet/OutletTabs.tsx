import type { TabType } from "../../types/types";
import { Tab } from "../ui/Tab";
import type { Tabs } from "../../pages/outlets";

interface Props {
  activeTab: Tabs;
  setActiveTab: React.Dispatch<React.SetStateAction<Tabs>>;
}

export const OutletTabs = ({ activeTab, setActiveTab }: Props) => {
  const tabTemplate: TabType<Tabs>[] = [
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
        {tabTemplate.map((tab) => (
          <Tab key={tab.value} {...{ tab, activeTab, setActiveTab }} />
        ))}
      </ul>
    </div>
  );
};
