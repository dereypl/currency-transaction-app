import transactionsReducer from "./reducers/transactionsReducer";
import {applyMiddleware, compose, createStore} from "redux";
import thunk from 'redux-thunk';

/*
    W 'prawdziwej' aplikacji powinniśmy dodatkowo użyć redux-persist,
     aby globalny stan nie ulegał wyczyszczeniu w momencie odświeżania strony.
     Dodatkowo REDUX_DEVTOOLS_EXTENSION - powinno zostać usunięde w środowisku produkcyjnym.

 */

export default () => createStore(
    transactionsReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);