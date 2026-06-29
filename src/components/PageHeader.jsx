function PageHeader({ title, children }) {
  return (
    <header className="page-header">
      <h1 className="page-title">{title}</h1>
      {children && <p className="page-intro">{children}</p>}
    </header>
  );
}

export default PageHeader;
