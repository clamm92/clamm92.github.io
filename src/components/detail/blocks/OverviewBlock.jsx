import BlockShell from "./BlockShell";

function OverviewBlock({ text, blockIndex }) {
  return (
    <BlockShell blockIndex={blockIndex}>
      <p className="detail-panel-section-text">{text}</p>
    </BlockShell>
  );
}

export default OverviewBlock;
