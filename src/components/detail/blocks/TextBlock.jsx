import BlockShell from "./BlockShell";

function TextBlock({ title, text, blockIndex }) {
  return (
    <BlockShell blockIndex={blockIndex}>
      {title && <h3 className="detail-panel-section-title">{title}</h3>}
      <p className="detail-panel-section-text">{text}</p>
    </BlockShell>
  );
}

export default TextBlock;
