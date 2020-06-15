import transactions, {
    addTransaction,
    getHighestAmountTransaction,
    getTransactionsTotalAmount,
    removeTransaction,
    getConvertedTransactionsList
} from "../store/transactions";
import {configureStore} from "@reduxjs/toolkit";
import currency from "../store/currency";


describe('transactions', () => {

    describe('reducer', () => {
        let store;

        beforeEach(() => {
            store = configureStore({
                reducer: {
                    transactions,
                    currency
                }
            });
        });

        test('should add transaction to the list', async () => {

            const numberOfItems = store.getState().transactions.list.length;
            const mockTransaction = {
                title: 't',
                amount: 32.00,
                currency: store.getState().currency,
            };

            await store.dispatch(addTransaction(mockTransaction));
            expect(store.getState().transactions.list).toHaveLength(numberOfItems + 1);
        });

        test('should remove transaction from the list', async () => {

            const numberOfItems = store.getState().transactions.list.length;
            await store.dispatch(removeTransaction(1001));
            expect(store.getState().transactions.list).toHaveLength(numberOfItems - 1);
        });
    });


    describe('selectors', () => {

        const mockStore = {
            currency: {
                rate: 2.0000
            },
            transactions: {
                list: [
                    {id: 1, amount: null},
                    {id: 2, amount: 25.00},
                    {id: 3, amount: 125.20},
                    {id: 4, amount: 25.05},
                    {id: 5}
                ]
            }
        };

        describe('getTransactionsTotalAmount', () => {
            test('should return true on sum: 175.25 ', () => {
                const value = getTransactionsTotalAmount.resultFunc(mockStore.transactions.list);
                expect(value).toEqual(175.25);
            });
        });


        describe('getConvertedTransactionsList', () => {
            test('should return list and second item convertedAmount should be 50.00', () => {
                const list = getConvertedTransactionsList(mockStore);
                expect(list[1].convertedAmount).toEqual("50.00");
                expect(list.length).toBeTruthy();
            });

            test('should return empty array', () => {
                const list = getConvertedTransactionsList({transactions: {}});
                expect(list).toHaveLength(0);
            });
        });

        describe('getHighestAmountTransaction', () => {
            test('should return transaction with id 3', () => {
                const transaction = getHighestAmountTransaction(mockStore);
                expect(transaction.id).toEqual(3);
            });
            test('should return undefined when transactions list empty', () => {
                const transaction = getHighestAmountTransaction({transactions: {list: []}});
                expect(transaction).toBeUndefined();
            });
        });
    })
});

