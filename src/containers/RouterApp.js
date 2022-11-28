import { Switch, Route } from "react-router-dom";
import NotFound from "../components/NotFound";

import "../styles/style.scss";
import Home from "./Home";
import Member from "./Member";
const RouterApp = () => {
  return (
    <div className="container-wrapper">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/member" component={Member} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default RouterApp;
