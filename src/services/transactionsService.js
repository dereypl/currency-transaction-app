// --- ACTION TYPES ---
export const TRANSACTIONS_LIST_ADD = 'TRANSACTIONS_LIST_ADD';
export const TRANSACTIONS_LIST_REMOVE = 'TRANSACTIONS_LIST_REMOVE';

export const saveTransaction = transaction => dispatch => {

    // --- ADD TRANSACTION TO REDUX LIST ---
    dispatch({type: TRANSACTIONS_LIST_ADD, payload: transaction});
};

export const removeTransaction = index => dispatch => {

    // --- REMOVE TRANSACTION FROM REDUX LIST ---
    dispatch({type: TRANSACTIONS_LIST_REMOVE, payload: index});
};