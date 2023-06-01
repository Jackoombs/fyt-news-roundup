"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

export interface SearchParams {
  key: string;
  value: string | undefined;
}

const useRouterUtils = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const updateSearchParams = (searchParamsArr: SearchParams[]) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());

    for (const { key, value } of searchParamsArr) {
      newSearchParams.delete(key);

      if (value !== undefined) {
        newSearchParams.set(key, value);
      }
    }
    router.push(pathname + "?" + newSearchParams);
  };

  const toggleListValue = (key: string, value: string) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());

    let currentValue = newSearchParams.get(key);

    if (currentValue) {
      let valueArr = currentValue.split(";");
      if (valueArr.includes(value)) {
        valueArr = valueArr.filter((item) => item !== value);
      } else {
        valueArr.push(value);
      }

      let updatedValue = valueArr.join(";");

      if (!updatedValue) {
        newSearchParams.delete(key);
      } else {
        newSearchParams.set(key, updatedValue);
      }
    } else {
      newSearchParams.set(key, value);
    }
    router.push(pathname + "?" + newSearchParams);
  };

  const checkListValueExists = (key: string, value: string): boolean => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    let currentValue = newSearchParams.get(key);

    if (!currentValue) {
      return false;
    }

    let valueArr = currentValue.split(";");

    if (valueArr.includes(value)) {
      return true;
    } else {
      return false;
    }
  };

  return {
    updateSearchParams,
    toggleListValue,
    checkListValueExists,
  };
};

export default useRouterUtils;
