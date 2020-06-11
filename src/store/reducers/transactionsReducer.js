import initialState from '../initial_transactions_state.json'

// --- ACTION TYPES ---
export const TRANSACTIONS_LIST_ADD = 'TRANSACTIONS_LIST_ADD';

// --- REDUCER ---
const transactionsReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case TRANSACTIONS_LIST_ADD:
            return {
                ...state,
                transactions: [payload, ...state.transactions]
            };
        default:
            return state;
    }
};

export default transactionsReducer;