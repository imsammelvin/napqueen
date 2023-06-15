import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import SuperHeader from "./SuperHeader";

function App() {
  return (
    <div className="App">
      <SuperHeader />
      <div style={{ flex: 1 }}>
        <Sidebar />
        <Header />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
