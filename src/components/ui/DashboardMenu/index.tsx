import clsx from "clsx";

interface DashboardMenuProps {
  children: React.ReactNode;
  padding?: string;
}
const DashboardMenu = ({ children, padding = "mb-8" }: DashboardMenuProps) => {
  return (
    <nav
      className={clsx(
        "flex bg-slate-100 px-2 py-1 rounded-md w-max gap-2 dark:bg-slate-900",
        padding
      )}
    >
      {children}
    </nav>
  );
};

export { DashboardMenu };
