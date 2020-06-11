import initialState from "./init_transactions";
import {createSlice} from "@reduxjs/toolkit";

const transactionsSlice = createSlice({
    name: 'transactions',
    initialState: {
        list: initialState.items
    },
    reducers: {
        addTransaction(state, {payload}) {
            state.list.unshift({id: state.list[0].id++, ...payload})
        },
        removeTransaction(state, action) {
            state.list = state.list.filter(transaction => transaction.id !== action.payload);
        }
    }
});

export const {addTransaction, removeTransaction} = transactionsSlice.actions;
export default transactionsSlice.reducer;


