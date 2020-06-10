import React from 'react';

import styled from 'styled-components';
import ExchangeRateContainer from "../containers/ExchangeRateContainer";

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

const Dashboard = () => {

    return (
        <Wrapper>
            <Header>
                Currency transaction app
                <ExchangeRateContainer/>
            </Header>
        </Wrapper>
    )
};

export default Dashboard;