import React from 'react';
import styled from 'styled-components';
import ExchangeRateContainer from "../containers/ExchangeRateContainer";
import AddTransactionContainer from "../containers/AddTransactionContainer";
import TransactionsDetailsSection from "../containers/TransactionsDetailsSection";
import device from "../../utils/ui-config/mobileQueries";
import {Heading} from "../headings/Heading";

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
      height: auto;
      min-height: 30rem;
      justify-content: space-between;
      align-items: center;
      position:relative;
      
      @media ${device.mobileXL} { 
          height: auto;
          min-height: 20rem;
      } 
`;

const Dashboard = () => {

    return (
        <Wrapper>
            <Header>
                <ExchangeRateContainer/>
                [LOGOTYPE]
            </Header>
            <Heading>Dodaj transakcję</Heading>
            <AddTransactionContainer/>
            <TransactionsDetailsSection/>
        </Wrapper>
    )
};

export default Dashboard;