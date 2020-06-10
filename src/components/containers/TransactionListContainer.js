import React from "react";
import {Heading} from "../headings/Heading";
import styled from "styled-components";
import TransactionListItem from "./TransactionListItem";


const TransactionsSection = styled.section`
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
      padding-right: 1.5rem;
`;


const TransactionListContainer = () => {

    return (
        <TransactionsSection>
            <TransactionsList>
                <Heading>Transakcje</Heading>
                <TransactionListItem/>
                <TransactionListItem/>
                <TransactionListItem/>
                <TransactionListItem/>
                <TransactionListItem/>
            </TransactionsList>
        </TransactionsSection>
    );
};

export default TransactionListContainer;