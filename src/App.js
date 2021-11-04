import React from 'react';
import { Route,Switch } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import { Routes } from "./constants/routes";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
      {Object.values(Routes).map((fn) => {
        const { path, component ,id} = fn();
        return <Route exact path={path} component={component} key={id} />;
      })}
    </Switch>
    </div>
  );
}

export default App;
