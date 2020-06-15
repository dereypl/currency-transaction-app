import {Heading} from "../headings/Heading";
import CountUp from "react-countup";
import React from "react";
import styled, {css} from "styled-components";
import {useSelector} from "react-redux";
import {getFixedAmount, getHighestAmountTransaction} from "../../store/transactions";
import device from "../../utils/ui-config/mobileQueries";


const HighestAmountTransaction = styled.div`
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 30rem;
      border-radius: 1rem;
      background-color: ${({theme}) => theme.colors.dark_blue};
      padding: 2rem 3rem;
      
      @media ${device.mobileXL} { 
          height: 20rem;
      }
      
      @media ${device.laptopL} { 
          height: 27rem;
      }
`;

const DetailsHeading = styled(Heading)`
      font-size: ${({theme}) => theme.fontSize.xl};
      font-weight: ${({theme}) => theme.fontWeight.semiBold};
      color: white;
      margin-top: -0.5rem;
  
      ${({currency}) => currency && css`
          background: -webkit-linear-gradient(#DB5A9B, #EA918C);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: ${({theme}) => theme.fontWeight.bold};
          font-size: ${({theme}) => theme.fontSize.xxl};
          flex-direction: column;
      `}
`;

const RowWrapper = styled.div`
      display:flex;
      flex-direction: column;
      width: 100%;
      justify-content: space-between;
      margin-top: 1rem;
      
      @media ${device.mobileXL} { 
         flex-direction: row;
      }
      
      @media ${device.laptopL} { 
         flex-direction: column;
         margin-top: 0;
      }
`;
const ColumnWrapper = styled.div`
      display:flex;
      flex-direction: column;
      margin-bottom: 1rem;
`;

const HighestAmountTransactionContainer = () => {

    let highestAmountTransaction = useSelector(getHighestAmountTransaction);
    const {title, amount, currency_from, currency_to, convertedAmount} = highestAmountTransaction || {};

    return (
        <>
            <Heading>Transakcja o najwyższej kwocie</Heading>
            <HighestAmountTransaction>
                <Heading color="#B2B2B2">Nazwa</Heading>
                <DetailsHeading>{title}</DetailsHeading>
                <RowWrapper>
                    <ColumnWrapper>
                        <Heading color="#B2B2B2">Kwota</Heading>
                        <DetailsHeading currency>
                            {currency_from}
                            <CountUp
                                duration={1.5}
                                end={+getFixedAmount(amount)}
                                decimal=","
                                decimals={2}/>
                        </DetailsHeading>
                    </ColumnWrapper>
                    <ColumnWrapper>
                        <Heading color="#B2B2B2">Po przewalutowaniu</Heading>
                        <DetailsHeading currency>
                            {currency_to}
                            <CountUp
                                duration={1.5}
                                end={+getFixedAmount(convertedAmount)}
                                decimal=","
                                decimals={2}
                            />
                        </DetailsHeading>
                    </ColumnWrapper>
                </RowWrapper>
            </HighestAmountTransaction>
        </>
    )
};


export default HighestAmountTransactionContainer;