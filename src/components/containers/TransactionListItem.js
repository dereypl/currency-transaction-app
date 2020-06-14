import React from "react";
import styled from "styled-components";
import ButtonWithIcon from "../buttons/ButtonWithIcon";
import remove_icon from "../assets/images/remove-icon.svg"
import remove_icon_active from "../assets/images/remove-icon-active.svg"
import {useDispatch} from "react-redux";
import {removeTransaction} from "../../store/transactions";

const Wrapper = styled.div`
      display: flex;
      align-items: center;
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
      width: 56%;
      height: 100%;
      align-items: center;
      color: ${({theme}) => theme.colors.text_gray};
      font-size: ${({theme}) => theme.fontSize.l};
      font-weight: ${({theme}) => theme.fontWeight.medium};
`;

const TransactionAmount = styled.div` 
      display: flex;
      justify-content: space-between;
      margin-right: 1rem;
      width: 20%;
      min-width: 15rem;
      height: 100%;
      align-items: center;
      font-size: ${({theme}) => theme.fontSize.l};
      font-weight: ${({theme}) => theme.fontWeight.semiBold};
      color: ${({theme}) => theme.colors.dark_blue};
      padding-right: 1rem;

      span{
         font-weight: ${({theme}) => theme.fontWeight.regular};
         color: ${({theme}) => theme.colors.gray};
      }
`;


const CurrencyAmount = styled.div` 
      display: flex;
      justify-content: flex-end;
      padding-right: 7rem;
      width: 24%;
      min-width: 20rem;
      height: 100%;
      align-items: center;
      background-color: ${({theme}) => theme.colors.dark_blue};
      font-size: ${({theme}) => theme.fontSize.l};
      font-weight: ${({theme}) => theme.fontWeight.semiBold};
      border-radius: 0 1rem 1rem 0;
      color: white;
      position:relative;
`;

const TransactionListItem = ({transaction}) => {

    const {id,title, amount, currency_from, currency_to,convertedAmount} = transaction;
    const dispatch = useDispatch();

    const handleRemoveAction = () => {
        dispatch(removeTransaction(id))
    };

    return (
        <Wrapper>
            <TransactionName>{title}</TransactionName>
            <TransactionAmount>
                <span>Kwota:</span>
                {amount} {currency_from}
            </TransactionAmount>
            <CurrencyAmount>{convertedAmount} {currency_to}
                <ButtonWithIcon onClick={handleRemoveAction}
                    iconPath={remove_icon} iconPathActive={remove_icon_active}/>
            </CurrencyAmount>
        </Wrapper>
    );
};

export default TransactionListItem;