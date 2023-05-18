"use client";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/Select";
import { removeWhiteSpace } from "@/lib/utils";
import { Outlets } from "@/types/graphql";
import { useRouter } from "next/navigation";
import path from "path";

interface Props {
  currentOutlet: string;
  outlets: Outlets;
}

const OutletSelect = ({ currentOutlet, outlets }: Props) => {
  const router = useRouter();

  const handleChange = (value: string) => {
    const newPath = path.join("outlets", value);
    router.push(newPath);
  };

  return (
    <Select
      defaultValue={removeWhiteSpace(currentOutlet)}
      onValueChange={handleChange}
    >
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Outlets</SelectLabel>
          {outlets.outlets.map((outlet) => (
            <SelectItem key={outlet.name} value={removeWhiteSpace(outlet.name)}>
              {outlet.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default OutletSelect;
