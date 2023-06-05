import DashboardHeader from "@/components/ui/DashboardHeader";

interface Props {
  children: React.ReactNode;
}

const Layout = async ({ children }: Props) => {
  return (
    <>
      <DashboardHeader className="pb-6">Saved</DashboardHeader>
      {children}
    </>
  );
};

export default Layout;
