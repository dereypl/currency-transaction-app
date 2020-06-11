import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {ROUTES} from "./utils/routes";
import Dashboard from "./components/views/Dashboard";
import StylesProvider from "./utils/ui-config/StylesProvider";
import {Provider} from "react-redux";
import configureStore from "./store/configureStore";

const store = configureStore();

const App = () => (
    <Provider store={store}>
        <StylesProvider>
            <BrowserRouter>
                <Switch>
                    <Route exact path={ROUTES.PUBLIC.DASHBOARD} component={Dashboard}/>
                </Switch>
            </BrowserRouter>
        </StylesProvider>
    </Provider>
);

export default App;