import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const DashboardHeader = ({ children, className }: Props) => {
  return (
    <h1
      className={clsx(
        "font-display font-bold text-4xl text-primary",
        className
      )}
    >
      {children}
    </h1>
  );
};

export default DashboardHeader;
