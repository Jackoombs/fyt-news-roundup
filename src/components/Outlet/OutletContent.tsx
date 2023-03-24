import { Tab } from ".";
import { trpc } from "../../utils/trpc";
import clsx from "clsx";
import { ArticleGrid } from "../Article/ArticleGrid";
import { OutletCategorys } from "./OutletCategorys";

interface Props {
  activeOutlet: string;
  activeTab: Tab["value"];
}

export const OutletContent = ({ activeOutlet, activeTab }: Props) => {
  const { data, isLoading, error } = trpc.outlet.get.useQuery({
    name: activeOutlet,
  });

  const renderContent = () => {
    switch (activeTab) {
      case "ARTICLES":
        return (
          data?.articles &&
          data.articles.length && (
            <ArticleGrid
              articles={data.articles}
              {...{ activeTab }}
              outlet={activeOutlet}
            />
          )
        );
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
