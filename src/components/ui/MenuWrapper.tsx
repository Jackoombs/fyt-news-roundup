interface Props {
  children: JSX.Element | JSX.Element[];
}

export const MenuWrapper = ({ children }: Props) => {
  return (
    <div
      role="menubar"
      className="flex gap-10 bg-gradient-to-r from-indigo-300 to-indigo-500 px-8 py-4"
    >
      {children}
    </div>
  );
};
