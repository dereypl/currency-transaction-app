import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {ROUTES} from "./utils/routes";
import Dashboard from "./components/views/Dashboard";
import StylesProvider from "./utils/ui-config/StylesProvider";

const App = () => (
    <StylesProvider>
        <BrowserRouter>
            <Switch>
                <Route exact path={ROUTES.PUBLIC.DASHBOARD} component={Dashboard}/>
            </Switch>
        </BrowserRouter>
    </StylesProvider>
);

export default App;