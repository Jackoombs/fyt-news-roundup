"use client";

import { Button } from "@/components/ui/Button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";
import useRouterUtils from "@/lib/hooks/useRouterUtils";
import { removeWhiteSpace } from "@/lib/utils";
import { Outlets } from "@/types/graphql";

interface Props {
  outlets: Outlets;
}

const OutletDropdown = ({ outlets }: Props) => {
  const routerUtils = useRouterUtils();

  const handleChange = (outletName: string) => {
    routerUtils.toggleListValue("outlets", removeWhiteSpace(outletName));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-36 justify-start" asChild>
        <Button variant="outline">Outlets</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {outlets.outlets.map((outlet) => (
          <DropdownMenuCheckboxItem
            checked={routerUtils.checkListValueExists(
              "outlets",
              removeWhiteSpace(outlet.name)
            )}
            onCheckedChange={() => handleChange(outlet.name)}
            key={outlet.name}
          >
            {outlet.name}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default OutletDropdown;
