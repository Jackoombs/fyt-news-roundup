import { Article } from "@/types/graphql";
import { Card } from "../ui/Card";
import DashboardSubHeader from "../ui/DashboardSubHeader";
import SaveBtn from "./SaveBtn";
import { format } from "date-fns";

interface Props {
  article: Article;
}

const Article = ({
  article: {
    id,
    saved,
    title,
    summary,
    content,
    outlet: { name },
    category,
    date,
  },
}: Props) => {
  return (
    <Card className="text-slate-900 dark:text-slate-200">
      <div className="pb-8">
        <div className="flex gap-1 justify-between pb-3">
          <h3 className="font-display font-bold text-2xl">{title}</h3>
          <SaveBtn {...{ id, saved }} />
        </div>
        <p className="text-sm text-slate-700 font-bold pb-2 dark:text-slate-500">
          {summary}
        </p>
        <div className="text-xs font-bold text-slate-500">
          <div className="flex divide-x-2 pb-0.5">
            <p className="text-blue-600 pr-1">{name}</p>
            <p className="pl-1">{category}</p>
          </div>
          {date && <p>{format(new Date(date), "dd/MM/yyyy")}</p>}
        </div>
      </div>

      <div className="space-y-3 px-10 mx-atuo">
        <hr />
        {content.map((paragraph, index) => (
          <p key={index} className="font-body text-sm">
            {paragraph}
          </p>
        ))}
      </div>
    </Card>
  );
};

export default Article;
