const levelStyles = {
  info: "log-line info",
  warn: "log-line warn",
  error: "log-line error",
  system: "log-line system",
};

function LogLine({ log }) {
  return (
    <div className={levelStyles[log.level] ?? "log-line"}>
      <span className="log-timestamp">{log.timestamp}</span>
      <span className="log-divider">•</span>
      <span className="log-source">{log.source}</span>
      <span className="log-message">{log.message}</span>
    </div>
  );
}

export default LogLine;
