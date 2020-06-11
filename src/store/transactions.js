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
const getTransactionAfterCurrencyConversion = (transaction, rate) => ({
    ...transaction,
    convertedAmount: (transaction.amount * rate).toFixed(2)
});

// --- BASIC SELECTORS ---
export const getPureTransactionsList = state => state.transactions.list;
export const getCurrency = state => state.currency;

// --- MEMOIZED SELECTORS ---
export const getTransactionsList = createSelector(
    [getPureTransactionsList, getCurrency],
    (list, currency) => list.map(transaction => getTransactionAfterCurrencyConversion(transaction, currency.rate))
);

export const getHighestAmountTransaction = createSelector(
    [getPureTransactionsList, getCurrency],
    (list, currency) => {

        // --- SET FIRST TRANSACTION TO THE HIGHEST ---
        let highestAmountTransaction = list[0];

        // --- CHECK THE LIST AND RETURN HIGHER IF FOUND ---
        list.forEach(transaction => {
                if (transaction.amount > highestAmountTransaction.amount)
                    highestAmountTransaction = transaction;
            }
        );

        // --- RETURN THE HIGHEST TRANSACTION AFTER CURRENCY CONVERSION ---
        return getTransactionAfterCurrencyConversion(highestAmountTransaction, currency.rate)
    }
);

export const {addTransaction, removeTransaction} = transactionsSlice.actions;
export default transactionsSlice.reducer;


