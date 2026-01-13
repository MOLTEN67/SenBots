import ConsoleView from "./components/ConsoleView.jsx";
import StatusBar from "./components/StatusBar.jsx";
import { mockLogs } from "./data/mockLogs.js";

const status = {
  label: "offline",
  detail: "Brak połączenia z botem",
};

function App() {
  return (
    <div className="app-shell">
      <header className="panel-header">
        <div className="panel-title">
          <span className="panel-badge">SenBots</span>
          <h1>Panel administracyjny</h1>
        </div>
        <StatusBar status={status} />
      </header>
      <main className="panel-main">
        <ConsoleView title="Console" logs={mockLogs} />
      </main>
    </div>
  );
}

export default App;
