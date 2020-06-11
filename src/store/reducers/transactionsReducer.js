import initialState from '../initial_transactions_state.json'
import {TRANSACTIONS_LIST_ADD, TRANSACTIONS_LIST_REMOVE} from "../../services/transactionsService";

// --- REDUCER ---
const transactionsReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case TRANSACTIONS_LIST_ADD:
            return {
                ...state,
                transactions: [payload, ...state.transactions]
            };

        case TRANSACTIONS_LIST_REMOVE:
            const filteredTransactions = state.transactions.filter(transaction => transaction.id !== payload);

            return {
                ...state,
                transactions: filteredTransactions
            };
        default:
            return state;
    }
};

export default transactionsReducer;