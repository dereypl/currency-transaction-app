import React from "react";
import styled from "styled-components";
import Input from "../inputs/Input";
import Button from "../buttons/Button";

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

const Heading = styled.h1`
      display: flex;
      width: ${({width}) => width || '100%'};
      color: white;
      font-size: ${({theme}) => theme.fontSize.l};
      font-weight: ${({theme}) => theme.fontWeight.semiBold};
      margin: 0 0 1rem 0;
      padding: 0;
`;

const CurrencyWrapper = styled.div`
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

    return (
        <AddTransactionSection>
            <InputWrapper width="60%">
                <Heading>Nazwa transakcji</Heading>
                <Input
                    type="text"
                    name="transactionName"
                    placeholder="Wprowadź nazwę transakcji..."
                />
            </InputWrapper>
            <InputWrapper width="20%">
                <Heading>Kwota</Heading>
                <CurrencyWrapper>
                    <Input
                        currencyInput
                        type="number"
                        name="value"
                        placeholder="Kwota"
                    />
                </CurrencyWrapper>
            </InputWrapper>
            <Button disabled={false} width="20%" marginTop="2.8rem">Dodaj</Button>
        </AddTransactionSection>
    );
};

export default AddTransactionContainer;