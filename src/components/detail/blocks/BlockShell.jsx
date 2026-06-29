function BlockShell({ blockIndex, children }) {
  return (
    <section
      className="detail-panel-block"
      style={{ "--block-index": blockIndex }}
    >
      {children}
    </section>
  );
}

export default BlockShell;
