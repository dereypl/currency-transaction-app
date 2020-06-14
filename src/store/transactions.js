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
                id: state.list[0] ? state.list[0].id + 1 : 1001, // if there is no transactions set id to 1001
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
export const getFixedAmount = (amount, precision = 2) => Number(parseFloat(amount).toFixed(precision));
const getConvertedAmount = (amount, rate) => getFixedAmount(amount * rate);

const getConvertedTransaction = (transaction, rate) => ({
    ...transaction,
    convertedAmount: getConvertedAmount(transaction.amount, rate)
});

// --- BASIC SELECTORS ---
export const getTransactionsList = state => state.transactions.list;
export const getCurrency = state => state.currency;

// --- MEMOIZED SELECTORS ---
export const getConvertedTransactionsList = createSelector(
    [getTransactionsList, getCurrency],
    (list, currency) =>
        list.length ? list.map(transaction => getConvertedTransaction(transaction, currency.rate)) : []
);

export const getHighestAmountTransaction = createSelector(
    [getTransactionsList, getCurrency],
    (transactionsList, currency) => {

        // --- ONLY IF THERE IS ANY TRANSACTION ---
        if (transactionsList.length) {

            // --- SET FIRST TRANSACTION TO THE HIGHEST ---
            let highestAmountTransaction = transactionsList[0];

            // --- CHECK THE LIST AND SET HIGHER IF FOUND ---
            transactionsList.forEach(transaction => {
                    if (transaction.amount > highestAmountTransaction.amount)
                        highestAmountTransaction = transaction;
                }
            );

            // --- RETURN THE HIGHEST TRANSACTION AFTER CURRENCY CONVERSION ---
            return getConvertedTransaction(highestAmountTransaction, currency.rate)
        }
    }
);

export const getTransactionsTotalAmount = createSelector(
    [getTransactionsList],
    (transactionsList) =>
        transactionsList.reduce((prevT, currentT) => prevT + (currentT.amount || 0), 0)
);

export const {addTransaction, removeTransaction} = transactionsSlice.actions;
export default transactionsSlice.reducer;


