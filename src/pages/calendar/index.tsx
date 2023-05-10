import { useState } from "react";
import { clsx } from "clsx";
import { Tab } from "../../components/ui/Tab";
import { getPastWeekDates, isTodayOrYesterday } from "../../utils/dates";
import { format } from "date-fns";
import { ArticleGrid } from "../../components/Article/ArticleGrid";

const Calendar = () => {
  const pastWeekDates = getPastWeekDates();

  const [activeTab, setActiveTab] = useState(pastWeekDates[0]);

  console.log(pastWeekDates[0], activeTab);

  const tabTemplate = pastWeekDates.map((date) => ({
    name: isTodayOrYesterday(date) ?? format(date, "EEE do MMM"),
    value: date,
  }));

  return (
    <div className="mx-auto flex h-full flex-col pb-10">
      <div className="h-full p-8">
        <ul className="grid w-full grid-cols-7 ">
          {tabTemplate.map((tab) => (
            <Tab {...{ tab, activeTab, setActiveTab }} tabWidth="w-full" />
          ))}
        </ul>
        <div
          className={clsx(
            "h-full rounded-lg bg-indigo-300 p-8 duration-200",
            activeTab === pastWeekDates[0] && "rounded-tl-none"
          )}
        >
          <ArticleGrid query={{ date: activeTab }} />
        </div>
      </div>
    </div>
  );
};

export default Calendar;
