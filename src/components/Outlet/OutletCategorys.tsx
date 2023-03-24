import { trpc } from "../../utils/trpc";
import { OutletCategoryCard } from "./OutletCategoryCard";

interface Props {
  activeOutlet: string;
}

export const OutletCategorys = ({ activeOutlet }: Props) => {
  const { data, isLoading, isError } = trpc.category.list.useQuery({
    outletName: activeOutlet,
  });

  return (
    <div className="mx-auto max-w-4xl">
      <div className="flex flex-col gap-2 pb-2">
        <p className="pb-4 text-lg font-semibold">
          Activate the news pages you would like to receive articles for.
        </p>
        {data?.map((category, index) => (
          <OutletCategoryCard
            key={category.url}
            {...{ category, index, activeOutlet }}
          />
        ))}
      </div>
    </div>
  );
};
