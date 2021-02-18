import Footer from "./components/Footer";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";

import "./styles/style.css";
import Overview from "./components/Overview";

function App() {
  return (
    <div>
      <Route component={Header} />

      <switch>
        <Route exact path="/" component={Overview} />
      </switch>

      <Route component={Footer} />
    </div>
  );
}

export default App;
