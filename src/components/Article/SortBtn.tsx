"use client";

import useRouterUtils from "@/lib/hooks/useRouterUtils";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "../ui/Select";

const SortBtn = () => {
  const routerUtils = useRouterUtils();

  const handleChange = (value: string) => {
    routerUtils.updateSearchParams([{ key: "sort", value }]);
  };

  return (
    <Select defaultValue={"dateAsc"} onValueChange={handleChange}>
      <SelectTrigger className="max-w-[8rem]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Sort By</SelectLabel>
          <SelectItem value={"dateDesc"}>Latest</SelectItem>
          <SelectItem value={"dateAsc"}>Oldest</SelectItem>
          <SelectItem value={"titleAsc"}>Title A-Z</SelectItem>
          <SelectItem value={"titleDesc"}>Title Z-A</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SortBtn;
