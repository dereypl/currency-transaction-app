import React, {useState} from "react";
import styled, {css} from "styled-components";
import {ArrowDownIcon} from "../icons/ArrowDownIcon";
import {ArrowUpIcon} from "../icons/ArrowUpIcon";

const Container = styled.div`
      display: flex;
      width: 40rem;
      height: 5rem;
      background-color: white;
      position: absolute;
      top: 0;
      right: 0;
      align-items: center;
      justify-content: center;
      border-radius: 0 0 1.5rem 1.5rem;
      box-shadow: 0 1rem 1.5rem 0 rgba(0, 0, 0, 0.02), 0 0.6rem 1.2rem 0 rgba(0, 0, 0, 0.05);
      font-size: ${({theme}) => theme.fontSize.m};
      cursor: pointer;

      span{
         font-weight: ${({theme}) => theme.fontWeight.semiBold};
         margin-left: 1rem;
      }
      
      ${({rollDown}) => rollDown === true && css`
          height: 12rem;
      `}
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
`;


const ExchangeRateContainer = () => {

    const [rollDown, setRollDown] = useState(false);

    return (
        <Container rollDown={rollDown} onClick={() => setRollDown(!rollDown)}>
            <RateWrapper>
                Przelicznik <span>1 EURO = x PLN</span>
            </RateWrapper>
            <IconWrapper>
                {rollDown ? <ArrowUpIcon/> : <ArrowDownIcon/>}
            </IconWrapper>
        </Container>
    );
};

export default ExchangeRateContainer;