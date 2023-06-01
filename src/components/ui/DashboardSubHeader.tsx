import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  padding?: string;
}

const DashboardSubHeader = ({ children, padding = "pb-2" }: Props) => {
  return (
    <h2
      className={clsx(
        "font-display font-bold text-xl text-slate-800 dark:text-slate-200",
        padding
      )}
    >
      {children}
    </h2>
  );
};

export default DashboardSubHeader;
