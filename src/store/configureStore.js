import { configureStore } from '@reduxjs/toolkit'
import transactions from '../store/transactions'

const store = configureStore({
    reducer: {
        transactions
    }
});

export default store