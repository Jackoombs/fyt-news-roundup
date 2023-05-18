import { gql } from "@apollo/client";
import { getClient } from "@/lib/client";
import { Outlets } from "@/types/graphql";
import DashboardHeader from "@/components/ui/DashboardHeader";
import OutletSelect from "@/components/Outlet/OutletSelect";

const Page = async ({ params }: { params: { outletName: string } }) => {
  const apollo = getClient();

  let outlets = await apollo.query<Outlets>({
    query: gql`
      query {
        outlets {
          name
        }
      }
    `,
  });

  const articles = await apollo.query({
    query: gql`
      query {
        articles {
          title
          id
        }
      }
    `,
  });

  return (
    <>
      <div className="flex justify-between">
        <DashboardHeader>Outlets</DashboardHeader>
        <OutletSelect
          currentOutlet={params.outletName}
          outlets={outlets.data}
        />
      </div>
    </>
  );
};

export default Page;
