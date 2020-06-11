import {TRANSACTIONS_LIST_ADD} from "../store/reducers/transactionsReducer";

export const saveTransaction = transaction => dispatch => {

    // --- ADD TRANSACTION TO REDUX LIST ---
    dispatch({type: TRANSACTIONS_LIST_ADD, payload: transaction});
};