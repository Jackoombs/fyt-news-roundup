import { OutletListOutput } from "../../types/trpc";
import { trpc } from "../../utils/trpc";
import { Loading } from "../ui/Loading";
import { OutletCategoryCard } from "./OutletCategoryCard";

interface Props {
  activeOutlet: OutletListOutput[0];
}

export const OutletCategorys = ({ activeOutlet }: Props) => {
  const { data, isLoading, isError } = trpc.category.list.useQuery({
    outletId: activeOutlet.id,
  });

  if (isLoading) return <Loading />;

  return (
    <div className="mx-auto max-w-4xl">
      <div className="flex flex-col gap-2 pb-2">
        <p className="pb-4 text-lg font-semibold">
          Activate the news pages you would like to receive articles for.
        </p>
        <ul className="flex flex-col gap-1">
          {data?.map((category, index) => (
            <OutletCategoryCard
              key={category.url}
              {...{ category, index, activeOutlet }}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
