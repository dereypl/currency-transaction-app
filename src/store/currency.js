import {createSlice} from "@reduxjs/toolkit";

const currencySlice = createSlice({
    name: 'currency',
    initialState: {
        currency_from: 'EUR',
        currency_to: 'PLN',
        rate: 4.4544
    },
    reducers: {
        setCurrencyRate(state, {payload}) {
            state.rate = payload;
        }
    }
});

export const {setCurrencyRate} = currencySlice.actions;
export default currencySlice.reducer;


