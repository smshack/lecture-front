import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { AuthContext } from '../context/AuthContext';
import NotFound from "../components/NotFound";
import "../styles/style.scss";
import Home from "./Home";
import Member from "./Member";
const RouterApp = () => {
  const [authState, setAuthState] = useState({
    username: "서명석",
    status: true
  })
  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      <div className="container-wrapper">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/member" component={Member} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </AuthContext.Provider>
  );
};

export default RouterApp;
