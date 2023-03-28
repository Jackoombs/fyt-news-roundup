import { useEffect } from "react";
import { OutletListOutput } from "../../types/trpc";
import { trpc } from "../../utils/trpc";
import { OutletSelect } from "./OutletSelect";

interface Props {
  activeOutlet: OutletListOutput[0] | null;
  setActiveOutlet: React.Dispatch<
    React.SetStateAction<OutletListOutput[0] | null>
  >;
}

export const OutletMenu = ({ activeOutlet, setActiveOutlet }: Props) => {
  const { data: outlets, isLoading, error } = trpc.outlet.list.useQuery();

  useEffect(() => {
    if (outlets && outlets.length > 0 && outlets[0] !== undefined) {
      setActiveOutlet(outlets[0]);
    }
  }, [outlets]);

  return (
    <div className=" flex gap-10 bg-gradient-to-r from-indigo-300 to-indigo-500 px-8 py-4">
      {outlets && activeOutlet && (
        <OutletSelect {...{ outlets, activeOutlet, setActiveOutlet }} />
      )}
    </div>
  );
};
