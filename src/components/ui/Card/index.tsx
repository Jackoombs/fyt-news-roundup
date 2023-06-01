import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className }: Props) => {
  return (
    <div
      className={clsx(
        "bg-white dark:bg-slate-950 ring-1 ring-slate-200 dark:ring-slate-800 p-6 rounded-lg",
        className
      )}
    >
      {children}
    </div>
  );
};

interface CardHeaderProps {
  children: React.ReactNode;
  margin?: string;
  size?: "text-sm" | "text-md" | "text-lg";
}

const CardHeader = ({
  children,
  margin = "mb-2",
  size = "text-sm",
}: CardHeaderProps) => {
  return (
    <h3
      className={clsx(
        "text-slate-900 font-bold line-clamp-2 dark:text-slate-200",
        margin,
        size
      )}
    >
      {children}
    </h3>
  );
};

export { Card, CardHeader };
