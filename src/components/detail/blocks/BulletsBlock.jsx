import BlockShell from "./BlockShell";

function BulletsBlock({ title, items = [], blockIndex }) {
  return (
    <BlockShell blockIndex={blockIndex}>
      {title && <h3 className="detail-panel-section-title">{title}</h3>}
      <ul className="detail-panel-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </BlockShell>
  );
}

export default BulletsBlock;
