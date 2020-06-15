import React from 'react';
import styled from 'styled-components';
import ExchangeRateContainer from "../containers/ExchangeRateContainer";
import AddTransactionContainer from "../containers/AddTransactionContainer";
import device from "../../utils/ui-config/mobileQueries";
import {Heading} from "../headings/Heading";
import TransactionListItem from "../containers/TransactionListItem";
import HighestAmountTransactionContainer from "../containers/HighestAmountTransactionContainer";
import CountUp from "react-countup";
import {getConvertedTransactionsList, getFixedAmount, getTransactionsTotalAmount} from "../../store/transactions";
import {useSelector} from "react-redux";
import {AppLogo} from "../containers/AppLogo";

const Wrapper = styled.div`
      display: flex;
      flex-direction: column;
      width: 85vw;
      height: auto;
      min-height: 100vh;
      margin: 0 auto;
      
      @media ${device.laptop} { 
          width: 70vw;
      }       
`;

const Header = styled.section`
      display: flex;
      width: 100%;
      height: 30rem;
      align-items: flex-end;
      position:relative;
      justify-content: center;
      padding-bottom: 3rem;
      
      @media ${device.laptop} { 
          height: 20rem;
          justify-content: space-between;
          align-items: center;
      } 
`;

const TransactionsSection = styled.section`
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

const Dashboard = () => {

    const transactions = useSelector(getConvertedTransactionsList || []);
    const totalCount = useSelector(getTransactionsTotalAmount);

    return (
        <Wrapper>
            <Header>
                <ExchangeRateContainer/>
                <AppLogo/>
            </Header>
            <Heading>Dodaj transakcję</Heading>
            <AddTransactionContainer/>
            <TransactionsSection>
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
                            end={+getFixedAmount(totalCount)}
                            decimal=","
                            decimals={2}
                            preserveValue={true}
                        /> EUR</Total>
                    </TransactionsTotalAmount>
                </TransactionsInsights>
            </TransactionsSection>
        </Wrapper>
    )
};

export default Dashboard;