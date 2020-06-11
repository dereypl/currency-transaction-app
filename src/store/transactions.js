import initialState from "./init_transactions";
import {createSlice, createSelector} from "@reduxjs/toolkit";

// --- SLICE ---
const transactionsSlice = createSlice({
    name: 'transactions',
    initialState: {
        list: initialState.items
    },
    reducers: {
        addTransaction(state, {payload}) {

            const transaction = {
                id: state.list[0].id + 1,
                currency_from: payload.currency.from,
                currency_to: payload.currency.to,
                ...payload
            };

            state.list.unshift(transaction)
        },
        removeTransaction(state, action) {
            state.list = state.list.filter(transaction => transaction.id !== action.payload);
        }
    }
});

// --- HELPERS ---
const getTransactionAfterCurrencyConvert = (transaction, rate) => ({
    ...transaction,
    convertedAmount: (transaction.amount * rate).toFixed(2)
});

// --- BASIC SELECTORS ---
export const getPureTransactionsList = state => state.transactions.list;
export const getCurrency = state => state.currency;

// --- MEMOIZED SELECTORS ---
export const getTransactionsList = createSelector(
    [getPureTransactionsList, getCurrency],
    (list, currency) => list.map(transaction => getTransactionAfterCurrencyConvert(transaction, currency.rate))
);

export const {addTransaction, removeTransaction} = transactionsSlice.actions;
export default transactionsSlice.reducer;


