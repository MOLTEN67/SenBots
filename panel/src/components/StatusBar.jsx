function StatusBar({ status }) {
  return (
    <div className="status-bar">
      <span className={`status-dot ${status.label}`} />
      <div className="status-text">
        <span className="status-label">{status.label}</span>
        <span className="status-detail">{status.detail}</span>
      </div>
    </div>
  );
}

export default StatusBar;
