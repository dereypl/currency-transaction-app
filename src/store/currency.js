import {createSlice} from "@reduxjs/toolkit";

const currencySlice = createSlice({
    name: 'currency',
    initialState: {
        from: 'EUR',
        to: 'PLN',
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


