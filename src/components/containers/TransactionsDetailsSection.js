import React from "react";
import {Heading} from "../headings/Heading";
import styled from "styled-components";
import TransactionListItem from "./TransactionListItem";
import HighestAmountTransactionContainer from "./HighestAmountTransactionContainer";
import CountUp from "react-countup";
import {getConvertedTransactionsList, getTransactionsTotalAmount} from "../../store/transactions";
import {useSelector} from "react-redux";

const Wrapper = styled.section`
      display: flex;
      width: 100%;
      height: auto;
      margin-top: 6rem;
      padding-bottom: 4rem;
`;

const TransactionsList = styled.div`
      display: flex;
      flex-direction: column;
      width: 70%;
      height: auto;
      min-height: 30rem;
      padding-right: 3rem;
`;

const TransactionsInsights = styled.div`
      display: flex;
      flex-direction: column;
      width: 30%;
      height: auto;
      min-height: 30rem;
`;

const TransactionsTotalAmount = styled.div`
      display: flex;
      flex-direction: column;
      margin-top: 4rem;
`;

const Total = styled.div`
      display: flex;
      font-size: 4rem;
      font-weight: ${({theme}) => theme.fontWeight.bold};
      padding-left: 2rem;
      color: ${({theme}) => theme.colors.dark_blue};
`;

const TransactionSection = () => {

    const transactions = useSelector(getConvertedTransactionsList);
    const totalCount = useSelector(getTransactionsTotalAmount);
    console.log(totalCount);

    return (
        <Wrapper>
            <TransactionsList>
                <Heading>Transakcje</Heading>
                {transactions.map(transaction => <TransactionListItem key={transaction.id} transaction={transaction}/>)}
            </TransactionsList>
            <TransactionsInsights>
                <HighestAmountTransactionContainer/>
                <TransactionsTotalAmount>
                    <Heading>Suma wszystkich transakcji</Heading>
                    <Total><CountUp end={parseFloat(totalCount)} decimal="," decimals={2}/> PLN</Total>
                </TransactionsTotalAmount>
            </TransactionsInsights>
        </Wrapper>
    );
};

export default TransactionSection;