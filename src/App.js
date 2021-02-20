import Footer from "./components/Footer";
import { Switch, Route } from "react-router-dom";

import { Provider } from "./context/State";

import Header from "./components/Header";
import Overview from "./components/Overview";

import "./styles/style.css";
import { Tour } from "./components/Tour";

function App() {
  return (
    <Provider>
      <Route component={Header} />

      <Switch>
        <Route exact path="/" component={Overview} />
        <Route exact path="/:id" component={Tour} />
      </Switch>

      <Route component={Footer} />
    </Provider>
  );
}

export default App;
