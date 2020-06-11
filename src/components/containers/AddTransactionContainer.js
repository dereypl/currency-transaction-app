import React, {useState} from "react";
import styled from "styled-components";
import Input from "../inputs/Input";
import Button from "../buttons/Button";
import {Heading} from "../headings/Heading";
import {useDispatch} from "react-redux";
import * as transactionsService from '../../services/transactionsService'

const AddTransactionSection = styled.section`
      display: flex;
      width: 100%;
      height: 18rem;
      background-color: ${({theme}) => theme.colors.dark_blue};
      position:relative;
      padding: 5rem;
      border-radius: 2rem;
`;

const InputWrapper = styled.div`
      display: flex;
      flex-direction: column;
      width: ${({width}) => width || '100%'};
      margin-right: 2rem;
      height: 7rem;
`;


export const CurrencyWrapper = styled.div`
      display: flex;
      margin: 0;
      padding: 0;
      position:relative;
      
      ::after{
          content: 'EUR';
          position: absolute;
          right: 1rem;
          top: 1.3rem;
          color: ${({theme}) => theme.colors.text_gray};
          font-size: ${({theme}) => theme.fontSize.s};
      }
`;

const AddTransactionContainer = () => {

    const currency = 'EUR';
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);

    const handleSaveTransaction = () => {
        dispatch(transactionsService.saveTransaction({
            id: 'xxx',
            title,
            currency,
            amount,
        }));
        setTitle('');
        setAmount(0);
    };

    return (
        <AddTransactionSection>
            <InputWrapper width="60%">
                <Heading color="white">Nazwa transakcji</Heading>
                <Input
                    type="text"
                    name="title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Wprowadź nazwę transakcji..."
                />
            </InputWrapper>
            <InputWrapper width="20%">
                <Heading color="white">Kwota</Heading>
                <CurrencyWrapper>
                    <Input
                        currencyInput
                        type="number"
                        name="value"
                        placeholder="Kwota"
                        value={amount}
                        onChange={e => setAmount(parseFloat(e.target.value))}
                    />
                </CurrencyWrapper>
            </InputWrapper>
            <Button disabled={false} onClick={handleSaveTransaction} width="20%" marginTop="2.8rem">Dodaj</Button>
        </AddTransactionSection>
    );
};

export default AddTransactionContainer;