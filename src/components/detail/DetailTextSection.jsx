function DetailTextSection({ title, text, blockIndex }) {
  return (
    <section className="detail-panel-block" style={{ "--block-index": blockIndex }}>
      <h3 className="detail-panel-section-title">{title}</h3>
      <p className="detail-panel-section-text">{text}</p>
    </section>
  );
}

export default DetailTextSection;
