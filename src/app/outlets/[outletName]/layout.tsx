import { gql } from "@apollo/client";
import { getClient } from "@/lib/client";
import { Outlets } from "@/types/graphql";
import DashboardHeader from "@/components/ui/DashboardHeader";
import OutletSelect from "@/components/Outlet/OutletSelect";
import { DashboardMenu } from "@/components/ui/DashboardMenu";
import DashboardMenuItem from "@/components/ui/DashboardMenu/DashboardMenuItem";
import path from "path";

interface Props {
  children: React.ReactNode;
  params: { outletName: string };
}

const Layout = async ({ params, children }: Props) => {
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

  const currentPath = path.join("outlets", params.outletName);

  return (
    <>
      <div className="flex justify-between pb-6">
        <DashboardHeader>Outlets</DashboardHeader>
        <OutletSelect
          currentOutlet={params.outletName}
          outlets={outlets.data}
        />
      </div>
      <DashboardMenu>
        <DashboardMenuItem link={path.join(currentPath, "overview")}>
          Overview
        </DashboardMenuItem>
        <DashboardMenuItem link={path.join(currentPath, "categories")}>
          Categories
        </DashboardMenuItem>
      </DashboardMenu>
      <div className="">{children}</div>
    </>
  );
};

export default Layout;
