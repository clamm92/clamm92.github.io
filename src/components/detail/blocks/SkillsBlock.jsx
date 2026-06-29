import BlockShell from "./BlockShell";

function SkillsBlock({ title = "Skills", items = [], blockIndex }) {
  if (!items.length) return null;

  return (
    <BlockShell blockIndex={blockIndex}>
      <h3 className="detail-panel-section-title">{title}</h3>
      <div className="detail-panel-tech">
        {items.map((item) => (
          <span key={item} className="detail-panel-tech-tag">
            {item}
          </span>
        ))}
      </div>
    </BlockShell>
  );
}

export default SkillsBlock;
