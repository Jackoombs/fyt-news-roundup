import { Article } from "@/types/graphql";
import { format } from "date-fns";
import { Card, CardHeader } from "../ui/Card";
import ButtonOrLink from "../ui/ButtonLink/ButtonOrLink";
import path from "path";

interface Props {
  article: Article;
  articlePagePath: string;
}

export const ArticleThumbnail = ({
  article: {
    title,
    date,
    category,
    outlet: { name },
    id,
  },
  articlePagePath,
}: Props) => {
  const href = path.join(articlePagePath, id);
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
          <ButtonOrLink
            variant="BLUE"
            className=" flex justify-center"
            href={href}
          >
            Read more
          </ButtonOrLink>
        </div>
      </div>
    </Card>
  );
};
