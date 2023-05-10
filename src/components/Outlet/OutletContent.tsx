import clsx from "clsx";
import { ArticleGrid } from "../Article/ArticleGrid";
import { OutletCategorys } from "./OutletCategorys";
import { OutletListOutput } from "../../types/trpc";
import { Tabs } from "../../pages/outlets";

interface Props {
  activeOutlet: OutletListOutput[0];
  activeTab: Tabs;
}

export const OutletContent = ({ activeOutlet, activeTab }: Props) => {
  const renderContent = () => {
    switch (activeTab) {
      case "ARTICLES":
        return activeOutlet && <ArticleGrid query={{}} />;
      case "CATEGORYS":
        return <OutletCategorys activeOutlet={activeOutlet} />;
    }
  };

  return (
    <div
      className={clsx(
        "h-full rounded-lg bg-indigo-300 p-8 duration-200",
        activeTab === "ARTICLES" && "rounded-tl-none"
      )}
    >
      {renderContent()}
    </div>
  );
};
