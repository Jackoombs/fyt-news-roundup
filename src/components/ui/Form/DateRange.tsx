"use client";

import { Button } from "@/components/ui/Button";
import { Calendar } from "@/components/ui/Calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/Popover";
import useRouterUtils from "@/lib/hooks/useRouterUtils";
import { cn } from "@/lib/utils";
import { format, parse } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { DateRange } from "react-day-picker";

const DatePicker = ({ className }: React.HTMLAttributes<HTMLDivElement>) => {
  const routerUtils = useRouterUtils();
  const searchParams = useSearchParams();

  const [date, setDate] = useState<DateRange | undefined>();

  const handleSelect = (e: DateRange | undefined) => {
    setDate(e);
    routerUtils.updateSearchParams([
      {
        key: "startDate",
        value: e?.from ? format(e?.from, "LLLddy") : undefined,
      },
      {
        key: "endDate",
        value: e?.to ? format(e?.to, "LLLddy") : undefined,
      },
    ]);
  };

  useEffect(() => {
    const parseDates = () => {
      const date: DateRange = { from: undefined, to: undefined };

      if (searchParams.has("startDate")) {
        date.from = parse(
          searchParams.get("startDate")!.toString(),
          "LLLddy",
          new Date()
        );
      }

      if (searchParams.has("endDate")) {
        date.to = parse(
          searchParams.get("endDate")!.toString(),
          "LLLddy",
          new Date()
        );
      }
      return date;
    };
    setDate(parseDates());
  }, [searchParams]);

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={handleSelect}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DatePicker;
