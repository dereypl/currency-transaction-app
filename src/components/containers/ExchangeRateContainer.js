import React, {useRef, useState} from "react";
import styled, {css} from "styled-components";
import {ArrowDownIcon} from "../icons/ArrowDownIcon";
import {ArrowUpIcon} from "../icons/ArrowUpIcon";
import Input from "../inputs/Input";
import Button from "../buttons/Button";
import {CurrencyWrapper} from "./AddTransactionContainer";
import {useDispatch, useSelector} from "react-redux";
import {setCurrencyRate} from "../../store/currency";
import {getCurrency} from "../../store/transactions";
import device from "../../utils/ui-config/mobileQueries";

const Container = styled.div`
      display: flex;
      width: 100%;
      height: 6rem;
      background-color: white;
      position: absolute;
      top: 0;
      align-items: center;
      justify-content: center;
      border-radius: 0 0 1.5rem 1.5rem;
      box-shadow: 0 1rem 1.5rem 0 rgba(0, 0, 0, 0.02), 0 0.6rem 1.2rem 0 rgba(0, 0, 0, 0.05);
      font-size: ${({theme}) => theme.fontSize.m};
      color: ${({theme}) => theme.colors.dark_blue};
      padding: 0 3rem;

      span{
         font-weight: ${({theme}) => theme.fontWeight.semiBold};
         margin-left: 1rem;
         min-width: 6rem;
      }
      
      ${({rollDown}) => rollDown === true && css`
          height: 12rem;
      `}
      
      
      @media ${device.laptop} { 
          right: 0;
          height: 5rem;
          width: 40rem;
          padding: 2rem;
      }
`;


const RateWrapper = styled.div`
      display:flex;
      width: 80%;
      height: 100%;
      justify-content: center;
      align-items: center;
`;

const IconWrapper = styled.div`
      display:flex;
      width: 20%;
      height: 100%;
      justify-content: center;
      align-items: center;
      cursor: pointer;
`;

const StyledCurrencyWrapper = styled(CurrencyWrapper)`
      width: 60%;
      position: relative;
      margin-right: 1.5rem;
      
      ::after{
           content: 'PLN';
           position: absolute;
           right: 0.8rem;
           top: 1.3rem;
      }
`;

const ExchangeRateContainer = () => {

    const refInput = useRef();
    const dispatch = useDispatch();
    const [rollDown, setRollDown] = useState(false);
    const currency = useSelector(getCurrency);

    const toggleRollDown = () => setRollDown(!rollDown);

    const handleSave = () => {
        const value = parseFloat(refInput.current.value);
        dispatch(setCurrencyRate(value));
        setRollDown(false);
    };

    return (
        <Container rollDown={rollDown}>
            {rollDown ?
                <>
                    <span>1 {currency.from} =</span>
                    <RateWrapper>
                        <StyledCurrencyWrapper>
                            <Input type="number" ref={refInput} defaultValue={currency.rate}/>
                        </StyledCurrencyWrapper>
                        <Button width="9rem" onClick={handleSave}>Zapisz</Button>
                    </RateWrapper>
                    <IconWrapper onClick={toggleRollDown}>
                        <ArrowUpIcon/>
                    </IconWrapper>
                </>
                :
                <>
                    <RateWrapper>
                        Przelicznik <span>1 {currency.from} = {currency.rate} {currency.to}</span>
                    </RateWrapper>
                    <IconWrapper onClick={toggleRollDown}>
                        <ArrowDownIcon/>
                    </IconWrapper>
                </>
            }
        </Container>
    );
};

export default ExchangeRateContainer;