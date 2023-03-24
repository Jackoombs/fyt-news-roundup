import { useEffect } from "react";
import { trpc } from "../../utils/trpc";
import { OutletSelect } from "./OutletSelect";

interface Props {
  activeOutlet: string | null;
  setActiveOutlet: React.Dispatch<React.SetStateAction<string | null>>;
}

export const OutletMenu = ({ activeOutlet, setActiveOutlet }: Props) => {
  const { data, isLoading, error } = trpc.outlet.list.useQuery();

  useEffect(() => {
    if (data && data.length > 0 && data[0] !== undefined) {
      setActiveOutlet(data[0].name);
    }
  }, [data]);

  return (
    <div className=" flex gap-10 bg-gradient-to-r from-indigo-300 to-indigo-500 px-8 py-4">
      {data && activeOutlet && (
        <OutletSelect
          outlets={data?.map((e) => e.name)}
          {...{ activeOutlet, setActiveOutlet }}
        />
      )}
    </div>
  );
};
