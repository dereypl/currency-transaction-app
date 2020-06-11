import { configureStore } from '@reduxjs/toolkit'
import transactions from '../store/transactions'
import currency from '../store/currency'

const store = configureStore({
    reducer: {
        transactions,
        currency
    }
});

export default store