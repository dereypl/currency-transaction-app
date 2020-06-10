import React from 'react';

import styled from 'styled-components';
import ExchangeRateContainer from "../containers/ExchangeRateContainer";
import Input from "../inputs/Input";
import Button from "../buttons/Button";

const Wrapper = styled.div`
      display: flex;
      flex-direction: column;
      width: 70vw;
      height: 100vh;
      margin: 0 auto;
`;

const Header = styled.section`
      display: flex;
      width: 100%;
      height: 20rem;
      //background-color: gray;
      justify-content: space-between;
      align-items: center;
      position:relative;
      padding: 5rem;
`;

const AddTransactionSection = styled.section`
      display: flex;
      width: 100%;
      height: 20rem;
      background-color: ${({theme}) => theme.colors.dark_blue};
      justify-content: space-between;
      align-items: center;
      position:relative;
      padding: 5rem;
      border-radius: 2rem;
`;

const Dashboard = () => {

    return (
        <Wrapper>
            <Header>
                Currency transaction app
                <ExchangeRateContainer/>
            </Header>
            <AddTransactionSection>
                <Input
                    type="text"
                    name="transactionName"
                    marginRight="2rem"
                    width="60%"
                    placeholder="Wprowadź nazwę transakcji..."
                />
                <Input
                    type="number"
                    name="value"
                    marginRight="2rem"
                    width="20%"
                    placeholder="Kwota"
                />
                <Button disabled={false} width="20%">Dodaj</Button>
            </AddTransactionSection>
        </Wrapper>
    )
};

export default Dashboard;