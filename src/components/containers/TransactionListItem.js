import React from "react";
import styled from "styled-components";
import ButtonWithIcon from "../buttons/ButtonWithIcon";
import remove_icon from "../assets/images/remove-icon.svg"
import remove_icon_active from "../assets/images/remove-icon-active.svg"

const Wrapper = styled.div`
      display: flex;
      width: 100%;
      height: 6rem;
      border-radius: 1rem;
      background-color: white;
      margin-bottom: 1rem;
      padding-left: 3rem;
      box-shadow: 0 0.8rem 1.2rem 0 rgba(0, 0, 0, 0.04), 0 0.8rem 1.5rem 0 rgba(0, 0, 0, 0.09);
`;

const TransactionName = styled.div` 
      display: flex;
      width: 60%;
      height: 100%;
      align-items: center;
      color: ${({theme}) => theme.colors.text_gray};
      font-size: ${({theme}) => theme.fontSize.l};
      font-weight: ${({theme}) => theme.fontWeight.medium};
`;

const TransactionAmount = styled.div` 
      display: flex;
      width: 20%;
      height: 100%;
      align-items: center;
      font-size: ${({theme}) => theme.fontSize.l};
      font-weight: ${({theme}) => theme.fontWeight.semiBold};
      color: ${({theme}) => theme.colors.dark_blue};

      span{
         font-weight: ${({theme}) => theme.fontWeight.regular};
         color: ${({theme}) => theme.colors.gray};
         margin-right: 1rem;
      }
`;


const CurrencyAmount = styled.div` 
      display: flex;
      width: 20%;
      height: 100%;
      align-items: center;
      background-color: ${({theme}) => theme.colors.dark_blue};
      font-size: ${({theme}) => theme.fontSize.l};
      font-weight: ${({theme}) => theme.fontWeight.semiBold};
      border-radius: 0 1rem 1rem 0;
      padding-left: 3rem;
      color: white;
      position:relative;
      
      span{
         font-weight: ${({theme}) => theme.fontWeight.regular};
         margin-right: 1rem;
      }
`;

const TransactionListItem = ({transaction}) => {

    const {title, amount, currency} = transaction;

    return (
        <Wrapper>
            <TransactionName>{title}</TransactionName>
            <TransactionAmount>
                <span>Kwota:</span>{amount.toFixed(2)} {currency}
            </TransactionAmount>
            <CurrencyAmount>1234,23PLN
                <ButtonWithIcon iconPath={remove_icon} iconPathActive={remove_icon_active}/>
            </CurrencyAmount>
        </Wrapper>
    );
};

export default TransactionListItem;