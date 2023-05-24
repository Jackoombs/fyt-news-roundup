import { getClient } from "@/lib/client";
import { GET_CATEGORYS } from "@/lib/queries";
import { Categories, GetCategoriesOptions } from "@/types/graphql";
import { Card } from "../ui/Card";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import DashboardSubHeader from "../ui/DashboardSubHeader";
import clsx from "clsx";

interface Props {
  options: GetCategoriesOptions;
  className?: string;
}

const ActiveCategorys = async ({ options, className }: Props) => {
  const apollo = getClient();
  const { data } = await apollo.query<Categories>({
    query: GET_CATEGORYS,
    variables: options,
  });

  const getPathname = (url: string) => {
    const parsedUrl = new URL(url);
    return parsedUrl.pathname;
  };

  return (
    <div className={className}>
      <DashboardSubHeader>Active pages</DashboardSubHeader>
      <Card>
        <ul className="divide-y-[1px] divide-slate-200 dark:divide-slate-800">
          {data.categories.map((category, index) => {
            const pathname = getPathname(category.url);
            return (
              <li
                className={clsx(
                  "flex justify-between py-4",
                  index === 0 && "pt-0",
                  index === data.categories.length - 1 && "pb-0"
                )}
                key={pathname}
              >
                <p>{pathname}</p>
                <a
                  target="_blank"
                  className="flex gap-1 bg-blue-600 text-white text-sm px-2 py-0.5 rounded-xl items-center"
                  href={category.url}
                >
                  Visit <ArrowTopRightOnSquareIcon className="h-4" />
                </a>
              </li>
            );
          })}
        </ul>
      </Card>
    </div>
  );
};

export default ActiveCategorys;
