import React from "react";
import {Heading} from "../headings/Heading";
import styled from "styled-components";
import TransactionListItem from "./TransactionListItem";
import HighestAmountTransactionContainer from "./HighestAmountTransactionContainer";
import CountUp from "react-countup";
import {
    getFixedAmount,
    getConvertedTransactionsList,
    getTransactionsTotalAmount
} from "../../store/transactions";
import {useSelector} from "react-redux";
import device from "../../utils/ui-config/mobileQueries";

const Wrapper = styled.section`
      display: flex;
      flex-direction: column;
      width: 100%;
      height: auto;
      margin-top: 5rem;
      padding-bottom: 4rem;
      
      p{
         color: ${({theme}) => theme.colors.gray};
         margin-left: 2rem;
      }
      
      @media ${device.laptopL} { 
         flex-direction: row;
      }
`;

const TransactionsList = styled.div`
      display: flex;
      flex-direction: column;
      width: 100%;
      height: auto;
      min-height: 30rem;
      order: 2;
      
      @media ${device.laptopL} { 
         order: 1;
         width: 70%;
         padding-right: 3rem;
      }
`;

const TransactionsInsights = styled.div`
      display: flex;
      flex-direction: column;
      width: 100%;
      height: auto;
      min-height: 30rem;
      order: 1;
      justify-content: space-between;

      @media ${device.laptopL} { 
         order: 2;
         width: 30%;
         justify-content: flex-start;
      }
`;

const TransactionsTotalAmount = styled.div`
      display: flex;
      flex-direction: column;
      margin-bottom: 4rem;
      margin-top: 4rem;
`;

const Total = styled.div`
      display: flex;
      font-size: 3rem;
      font-weight: ${({theme}) => theme.fontWeight.bold};
      padding-left: 2rem;
      color: ${({theme}) => theme.colors.dark_blue};
      
      @media ${device.mobileXL} { 
          font-size: 4rem;
      }
`;

const TransactionSection = () => {

    const transactions = useSelector(getConvertedTransactionsList || []);
    const totalCount = useSelector(getTransactionsTotalAmount);

    return (
        <Wrapper>
            <TransactionsList>
                <Heading>Transakcje</Heading>
                {Boolean(transactions.length)?
                    transactions.map(transaction => <TransactionListItem key={transaction.id} transaction={transaction}/>)
                    :
                    <p>Nie dodano żadnej transakcji.</p>
                }
            </TransactionsList>
            <TransactionsInsights>
                    <HighestAmountTransactionContainer/>
                    <TransactionsTotalAmount>
                        <Heading>Suma wszystkich transakcji</Heading>
                        <Total><CountUp
                            duration={1.5}
                            end={getFixedAmount(totalCount)}
                            decimal=","
                            decimals={2}
                        /> EUR</Total>
                    </TransactionsTotalAmount>
            </TransactionsInsights>
        </Wrapper>
    );
};

export default TransactionSection;