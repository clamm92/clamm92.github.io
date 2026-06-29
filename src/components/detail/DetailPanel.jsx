import { useDetailPanel } from "../../hooks/useDetailPanel";
import "../../styles/detail-panel.css";

function DetailPanel({
  titleId,
  closeLabel = "Close details",
  header,
  children,
  onClose,
}) {
  const { closeButtonRef, initiateClose, rootClassName } = useDetailPanel(onClose);

  return (
    <div className={rootClassName}>
      <button
        type="button"
        className="detail-panel-backdrop"
        aria-label={closeLabel}
        onClick={initiateClose}
      />

      <aside
        className="detail-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <header className="detail-panel-header">
          <div className="detail-panel-header-text">{header}</div>
          <button
            ref={closeButtonRef}
            type="button"
            className="detail-panel-close"
            aria-label={closeLabel}
            onClick={initiateClose}
          >
            ×
          </button>
        </header>

        <div className="detail-panel-body">{children}</div>
      </aside>
    </div>
  );
}

export default DetailPanel;
