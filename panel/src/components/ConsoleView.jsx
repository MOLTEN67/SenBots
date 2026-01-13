import { useEffect, useRef, useState } from "react";
import LogLine from "./LogLine.jsx";

function ConsoleView({ title, logs }) {
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const container = containerRef.current;
    if (!container) return;
    container.scrollTop = container.scrollHeight;
  }, [logs, isPaused]);

  return (
    <section className="console-shell">
      <div className="console-toolbar">
        <div className="mac-controls">
          <span className="control-dot red" />
          <span className="control-dot yellow" />
          <span className="control-dot green" />
        </div>
        <div className="console-title">{title}</div>
        <button
          className="console-toggle"
          type="button"
          onClick={() => setIsPaused((prev) => !prev)}
        >
          {isPaused ? "Wznów scroll" : "Pauzuj scroll"}
        </button>
      </div>
      <div className="console-body" ref={containerRef}>
        {logs.map((log) => (
          <LogLine key={log.id} log={log} />
        ))}
      </div>
      <div className="console-footer">
        <span className="prompt">senbots@panel</span>
        <span className="prompt-separator">:</span>
        <span className="prompt-path">~/console</span>
        <span className="prompt-symbol">$</span>
        <span className="prompt-hint">status --watch</span>
      </div>
    </section>
  );
}

export default ConsoleView;
