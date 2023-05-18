interface Props {
  children: React.ReactNode;
}

const DashboardHeader = ({ children }: Props) => {
  return (
    <h1 className="font-display font-bold text-4xl text-slate-800 dark:text-slate-200">
      {children}
    </h1>
  );
};

export default DashboardHeader;
