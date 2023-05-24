import { Article } from "@/types/graphql";
import { format } from "date-fns";
import { Card, CardHeader } from "../ui/Card";

interface Props {
  article: Article;
  index: number;
}

export const ArticleThumbnail = ({
  article: {
    title,
    date,
    category,
    outlet: { name },
  },
  index,
}: Props) => {
  return (
    <Card className="h-full">
      <div className="flex flex-col justify-between gap font-body h-full">
        <CardHeader>{title}</CardHeader>
        <div>
          <div className="pb-3 flex justify-between items-center text-xs font-bold text-slate-500">
            <div>
              <p className="text-blue-600">{name}</p>
              <p>{category}</p>
            </div>
            {date && <p className="">{format(new Date(date), "dd/MM/yyyy")}</p>}
          </div>

          <a
            className="w-full flex bg-blue-600 text-sm text-white justify-center p-2 rounded-full"
            href=""
          >
            Read more
          </a>
        </div>
      </div>
    </Card>
  );
};
