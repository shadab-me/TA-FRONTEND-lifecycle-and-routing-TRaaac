import logo from "./logo.svg";
import "./App.css";
import News from "./components/List";
import Header from "./components/Header";

function App() {
  return (
    <div className="nav">
      <Header />
      <News />
    </div>
  );
}

export default App;
