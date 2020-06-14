import React from "react";
import styled from "styled-components";
import ButtonWithIcon from "../buttons/ButtonWithIcon";
import remove_icon from "../assets/images/remove-icon.svg"
import remove_icon_active from "../assets/images/remove-icon-active.svg"
import {useDispatch} from "react-redux";
import {getFixedAmount, removeTransaction} from "../../store/transactions";
import device from "../../utils/ui-config/mobileQueries";

const Wrapper = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      height: 14rem;
      border-radius: 1rem;
      background-color: white;
      margin-bottom: 1rem;
      box-shadow: 0 0.8rem 1.2rem 0 rgba(0, 0, 0, 0.04), 0 0.8rem 1.5rem 0 rgba(0, 0, 0, 0.09);
      
      @media ${device.tablet} { 
          height: 6rem;
          flex-direction: row;
          padding-left: 3rem;
      }
`;

const TransactionName = styled.div` 
      display: flex;
      align-items: center;
      color: ${({theme}) => theme.colors.text_gray};
      font-size: ${({theme}) => theme.fontSize.l};
      font-weight: ${({theme}) => theme.fontWeight.medium};
      margin-top: 2rem;
      
      @media ${device.tablet} { 
          width: 56%;
          margin-top: 0;
      }
`;

const TransactionAmount = styled.div` 
      display: flex;
      justify-content: space-between;
      min-width: 15rem;
      height: 100%;
      align-items: center;
      font-size: ${({theme}) => theme.fontSize.l};
      font-weight: ${({theme}) => theme.fontWeight.semiBold};
      color: ${({theme}) => theme.colors.dark_blue};

      span{
         font-weight: ${({theme}) => theme.fontWeight.regular};
         color: ${({theme}) => theme.colors.gray};
      }
      
      @media ${device.tablet} { 
          width: 20%;
          margin-right: 1rem;
          padding-right: 1rem;
      }
`;


const CurrencyAmount = styled.div` 
      display: flex;
      width: 100%;
      min-width: 20rem;
      height: 100%;
      align-items: center;
      justify-content: center;
      background-color: ${({theme}) => theme.colors.dark_blue};
      font-size: ${({theme}) => theme.fontSize.l};
      font-weight: ${({theme}) => theme.fontWeight.semiBold};
      border-radius: 0 1rem 1rem 0;
      color: white;
      position:relative;
      
      @media ${device.tablet} { 
          width: 24%;
          justify-content: flex-end;
          padding-right: 7rem;
      }
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
                {getFixedAmount(amount)} {currency_from}
            </TransactionAmount>
            <CurrencyAmount>{getFixedAmount(convertedAmount)} {currency_to}
                <ButtonWithIcon onClick={handleRemoveAction}
                    iconPath={remove_icon} iconPathActive={remove_icon_active}/>
            </CurrencyAmount>
        </Wrapper>
    );
};

export default TransactionListItem;