import React from "react";
import {Heading} from "../headings/Heading";
import styled, {css} from "styled-components";
import TransactionListItem from "./TransactionListItem";
import HighestAmountTransactionContainer from "./HighestAmountTransactionContainer";

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


const TransactionSection = () => {

    return (
        <Wrapper>
            <TransactionsList>
                <Heading>Transakcje</Heading>
                <TransactionListItem/>
                <TransactionListItem/>
                <TransactionListItem/>
                <TransactionListItem/>
                <TransactionListItem/>
            </TransactionsList>
            <HighestAmountTransactionContainer/>
        </Wrapper>
    );
};

export default TransactionSection;