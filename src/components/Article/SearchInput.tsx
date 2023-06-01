"use client";

import { Input } from "@/components/ui/Input";
import useRouterUtils from "@/lib/hooks/useRouterUtils";
import debounce from "lodash.debounce";

const SearchInput = () => {
  const routerUtils = useRouterUtils();

  const updateSearchParams = ({
    key,
    value,
  }: {
    key: string;
    value: string | undefined;
  }) => {
    routerUtils.updateSearchParams([{ key, value }]);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedOnChange({
      key: "search",
      value: e.currentTarget.value || undefined,
    });
  };

  const debouncedOnChange = debounce(updateSearchParams, 500);

  return (
    <Input
      onChange={handleChange}
      className="w-56"
      type="text"
      placeholder="Search Title"
    />
  );
};

export default SearchInput;
