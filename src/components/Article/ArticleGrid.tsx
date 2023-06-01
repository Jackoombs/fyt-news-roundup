interface Props {
  children: React.ReactNode;
}

const ArticleGrid = ({ children }: Props) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
      {children}
    </div>
  );
};

export default ArticleGrid;
