import {Heading} from "../headings/Heading";
import CountUp from "react-countup";
import React from "react";
import styled, {css} from "styled-components";



const HighestAmountTransaction = styled.div`
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 20rem;
      border-radius: 1rem;
      background-color: ${({theme}) => theme.colors.dark_blue};
      padding: 2rem 3rem;
`;

const DetailsHeading = styled(Heading)`
      font-size: ${({theme}) => theme.fontSize.xl};
      font-weight: ${({theme}) => theme.fontWeight.semiBold};
      color: white;
      height: 5rem;
      margin-top: -0.5rem;
  
      ${({currency}) => currency && css`
          background: -webkit-linear-gradient(#DB5A9B, #EA918C);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: ${({theme}) => theme.fontWeight.bold};
          font-size: ${({theme}) => theme.fontSize.xxl};
          flex-direction: column;
          width: 16rem;
      `}
`;

const RowWrapper = styled.div`
      display:flex;
`;
const ColumnWrapper = styled.div`
      display:flex;
      flex-direction: column;
      margin-right: 3rem;
`;

const HighestAmountTransactionContainer = () => (
    <>
        <Heading>Transakcja o najwyższej kwocie</Heading>
        <HighestAmountTransaction>
            <Heading color={({theme}) => theme.colors.gray}>Nazwa</Heading>
            <DetailsHeading>Nazwa transakcji 1</DetailsHeading>
            <RowWrapper>
                <ColumnWrapper>
                    <Heading color={({theme}) => theme.colors.gray}>Kwota</Heading>
                    <DetailsHeading currency>
                        EUR<CountUp end={345.20} decimal="," decimals={2}/>
                    </DetailsHeading>
                </ColumnWrapper>
                <ColumnWrapper>
                    <Heading color={({theme}) => theme.colors.gray}>Po przewalutowaniu</Heading>
                    <DetailsHeading currency>
                        PLN<CountUp end={1246.56} decimal="," decimals={2}/>
                    </DetailsHeading>
                </ColumnWrapper>
            </RowWrapper>
        </HighestAmountTransaction>
    </>
);

export default HighestAmountTransactionContainer;