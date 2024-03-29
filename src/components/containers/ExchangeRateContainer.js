import React, {useEffect, useState} from "react";
import styled, {css} from "styled-components";
import {ArrowDownIcon} from "../icons/ArrowDownIcon";
import {ArrowUpIcon} from "../icons/ArrowUpIcon";
import Button from "../buttons/Button";
import {CurrencyWrapper} from "./AddTransactionContainer";
import {useDispatch, useSelector} from "react-redux";
import {setCurrencyRate} from "../../store/currency";
import {getCurrency, getFixedAmount} from "../../store/transactions";
import device from "../../utils/ui-config/mobileQueries";
import {Controller, useForm} from "react-hook-form";
import CurrencyInput from "../inputs/CurrencyInput";

const Container = styled.form`
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 10rem;
      background-color: white;
      position: absolute;
      top: 0;
      align-items: center;
      justify-content: center;
      border-radius: 0 0 1.5rem 1.5rem;
      box-shadow: 0 1rem 1.5rem 0 rgba(0, 0, 0, 0.02), 0 0.6rem 1.2rem 0 rgba(0, 0, 0, 0.05);
      font-size: ${({theme}) => theme.fontSize.m};
      color: ${({theme}) => theme.colors.dark_blue};
      padding: 2rem 3rem 0 3rem;

      span{
         font-weight: ${({theme}) => theme.fontWeight.semiBold};
         margin-left: 1rem;
         min-width: 6rem;
      }
      
      ${({rollDown}) => rollDown === true && css`
          height: 18rem;
      `}
      
      @media ${device.mobileXL} { 
          flex-direction: row;
          height: 6rem;
          padding: 0 3rem;
          
          ${({rollDown}) => rollDown === true && css`=
          height: 12rem;
          `}
      };
      
      
      @media ${device.laptop} { 
          right: 0;
          height: 5rem;
          width: 40rem;
          padding: 2rem;
          
          ${({rollDown}) => rollDown === true && css`
              height: 12rem;
          `}
      };
`;


const RateWrapper = styled.div`
      display:flex;
      flex-direction: column;
      width: 80%;
      height: 100%;
      justify-content: center;
      align-items: center;
      
      @media ${device.mobileXL} { 
          flex-direction: row;
      };
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
      width: 100%;
      position: relative;
      margin-top: 1rem;
      margin-bottom: 1rem;
      
      ::after{
           content: 'PLN';
           position: absolute;
           right: 0.8rem;
           top: 1.3rem;
      }
      
       @media ${device.mobileXL} { 
          width: 60%;
          margin-right: 1.5rem;
          margin-top: 0;
          margin-bottom: 0;
       };
`;

const hasInputError = inputError => inputError && inputError.value === undefined;

const ExchangeRateContainer = () => {

    const dispatch = useDispatch();
    const [rollDown, setRollDown] = useState(false);
    const currency = useSelector(getCurrency);
    const {handleSubmit, register, errors, control} = useForm();

    const toggleRollDown = () => setRollDown(!rollDown);

    useEffect(() => {
        register({name: "rate"},
            {
                required: "Przelicznik jest wymagany.",
                validate: value => value > 0 || "Przelicznik musi być większy od 0."
            });
    }, [rollDown, register]);


    const onSubmit = ({rate}) => {
        const currencyRate = getFixedAmount(rate, 4);
        dispatch(setCurrencyRate(currencyRate));
        setRollDown(false);
    };


    return (
        <>
            <Container rollDown={rollDown} onSubmit={handleSubmit(onSubmit)}>
                {rollDown ?
                    <>
                        <span>1 {currency.from} =</span>
                        <RateWrapper>
                            <StyledCurrencyWrapper>
                                <Controller
                                    as={CurrencyInput}
                                    control={control}
                                    precision={4}
                                    name="rate"
                                    placeholder="0.0000"
                                    defaultValue={currency.rate}
                                    errored={`${hasInputError(errors.rate)}`}
                                />
                            </StyledCurrencyWrapper>
                            <Button disabled={hasInputError(errors.rate)} width="9rem">Zapisz</Button>
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
        </>
    );
};

export default ExchangeRateContainer;