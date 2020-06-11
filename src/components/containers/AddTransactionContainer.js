import React from "react";
import styled from "styled-components";
import Input from "../inputs/Input";
import Button from "../buttons/Button";
import {Heading} from "../headings/Heading";
import {useDispatch} from "react-redux";
import * as transactionsService from '../../services/transactionsService'
import {useForm} from "react-hook-form";
import createNumberMask from "text-mask-addons/src/createNumberMask";
import MaskedInput from "react-text-mask";

const AddTransactionForm = styled.form`
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

const ErrorWrapper = styled.div`
      display: flex;
      width: 100%;
      font-size: ${({theme}) => theme.fontSize.s};
      padding-top: 0.3rem;
      height: 3rem;
      color: ${({theme}) => theme.colors.error};
      justify-content: flex-end;
`;


// --- CHECK IF ERRORS ---
const hasInputError = inputError => inputError && inputError.value === undefined;
const hasFormErrors = errors => !(errors.title === undefined && errors.amount === undefined);

// --- INPUT ERROR MESSAGES ---
const InputValidationError = inputError => (
    <ErrorWrapper>
        {hasInputError(inputError) ? null : inputError.value.message}
    </ErrorWrapper>
);


const AddTransactionContainer = () => {

    const currency = 'EUR';
    const dispatch = useDispatch();
    const {handleSubmit, register, errors} = useForm();


    const onSubmit = values => {
        console.log(values);
        dispatch(transactionsService.saveTransaction({
            id: 'xxx',
            title: values.title,
            currency,
            amount: values.amount || 0,
        }));
    };

    const defaultMaskOptions = {
        prefix: '',
        suffix: '',
        includeThousandsSeparator: false,
        allowDecimal: true,
        decimalSymbol: '.',
        decimalLimit: 2,
        allowNegative: false,
        allowLeadingZeroes: false,
    };

    const currencyMask = createNumberMask(defaultMaskOptions);



    return (
        <AddTransactionForm onSubmit={handleSubmit(onSubmit)}>
            <InputWrapper width="60%">
                <Heading color="white">Nazwa transakcji</Heading>
                <Input
                    name="title"
                    type="text"
                    placeholder="Wprowadź nazwę transakcji..."
                    hasError={hasInputError(errors.title)}
                    ref={register({required: "Nazwa transakcji musi być zdefiniowana."})}
                />
                <InputValidationError value={errors.title}/>
            </InputWrapper>
            <InputWrapper width="20%">
                <Heading color="white">Kwota</Heading>
                <CurrencyWrapper>
                    <MaskedInput
                        id="my-input-id"
                        type="text"
                        name="amount"
                        placeholder="Kwota"
                        haserror={hasInputError(errors.amount)}
                        mask={currencyMask}
                        defaultValue={0}
                        ref={register({required: "xx"})}
                        render={(ref, props) => (
                            <Input ref={(input) => ref(input)} {...props}/>
                        )}
                    />
                </CurrencyWrapper>
                <InputValidationError value={errors.amount}/>
            </InputWrapper>
            <Button disabled={hasFormErrors(errors)} width="20%" marginTop="2.8rem">Dodaj</Button>
        </AddTransactionForm>
    );
};

export default AddTransactionContainer;