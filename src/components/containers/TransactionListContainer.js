import React from "react";
import {Heading} from "../headings/Heading";
import styled from "styled-components";


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


const TransactionListItem = styled.div`
      display: flex;
      width: 100%;
      height: 6rem;
      border-radius: 1rem;
      background-color: white;
      margin-top: 1rem;
      box-shadow: 0 0.8rem 1.2rem 0 rgba(0, 0, 0, 0.04), 0 0.8rem 1.5rem 0 rgba(0, 0, 0, 0.09);
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