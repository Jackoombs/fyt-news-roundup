interface Props {
  children: React.ReactNode;
}

const DashboardSubHeader = ({ children }: Props) => {
  return (
    <h2 className="font-display font-bold text-xl text-slate-800 dark:text-slate-200 pb-2">
      {children}
    </h2>
  );
};

export default DashboardSubHeader;
