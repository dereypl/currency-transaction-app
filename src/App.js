import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {ROUTES} from "./utils/routes";
import Dashboard from "./components/views/Dashboard";

const App = () => (
    <BrowserRouter>
      <Switch>
        <Route exact path={ROUTES.PUBLIC.DASHBOARD} component={Dashboard}/>
      </Switch>
    </BrowserRouter>
);

export default App;