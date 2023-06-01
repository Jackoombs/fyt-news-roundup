import clsx from "clsx";
import Link from "next/link";
import { ButtonHTMLAttributes } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  padding?: string;
  variant?: "DEFAULT" | "BLUE";
  buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
  linkProps?: typeof Link;
  href?: string;
}

const ButtonOrLink = ({
  children,
  className,
  padding = "px-3 py-2",
  variant = "DEFAULT",
  buttonProps,
  linkProps,
  href,
}: Props) => {
  const classes = clsx(
    "w-full duration-150",
    variant === "DEFAULT" &&
      "h-10 rounded-md border border-slate-200 dark:border-slate-800 bg-transparent text-sm text-slate-900 dark:text-slate-200",
    variant === "BLUE" &&
      "bg-blue-600 text-sm text-white hover:bg-blue-500 rounded-full",
    padding,
    className
  );

  if (href) {
    return (
      <Link className={classes} href={href} {...linkProps}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
};

export default ButtonOrLink;
