import Footer from "./components/Footer";
import { Switch, Route } from "react-router-dom";

import { Provider } from "./context/State";

import Header from "./components/Header";
import Overview from "./components/Overview";

import "./styles/style.css";
import { Tour } from "./components/Tour";
import { Login } from "./components/Login";
import { Account } from "./components/Account";

function App() {
  return (
    <Provider>
      <Route component={Header} />

      <Switch>
        <Route exact path="/" component={Overview} />
        <Route exact path="/tour/:id" component={Tour} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/account" component={Account} />
      </Switch>

      <Route component={Footer} />
    </Provider>
  );
}

export default App;
