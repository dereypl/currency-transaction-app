import React, {useEffect} from "react";
import styled from "styled-components";
import Input from "../inputs/Input";
import Button from "../buttons/Button";
import {Heading} from "../headings/Heading";
import {useDispatch, useSelector} from "react-redux";
import {Controller, useForm} from "react-hook-form";
import {addTransaction, getCurrency} from "../../store/transactions";
import CurrencyInput from "../inputs/CurrencyInput";
import device from "../../utils/ui-config/mobileQueries";

const AddTransactionForm = styled.form`
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 35rem;
      background-color: ${({theme}) => theme.colors.dark_blue};
      position:relative;
      padding: 3rem 2rem;
      border-radius: 2rem;
      
      @media ${device.laptop} { 
         flex-direction: row;
         height: 18rem;
         padding: 5rem;
      }
`;

const InputWrapper = styled.div`
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-right: 0;
      height: 8rem;
      
      @media ${device.laptop} { 
         width: ${({width}) => width || '100%'};
         margin-right: 2rem;
         height: 7rem;
      }
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

    const dispatch = useDispatch();
    const currency = useSelector(getCurrency);
    const {handleSubmit, register, errors, control, reset} = useForm();


    const onSubmit = ({title, amount}) => {

        // --- PARSE AMOUNT TO NUMBER WITH *.00 PRECISION ---
        amount = Number(parseFloat(amount).toFixed(2));

        // --- DISPATCH REDUX ACTION TO ADD TRANSACTION TO THE LIST ---
        dispatch(addTransaction({
            title,
            amount,
            currency
        }));

        reset({title: "", amount: null})
    };

    useEffect(() => {
        register({name: "amount"}, {required: "Kwota jest wymagana."});
    }, [register]);

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
                    <Controller
                        as={CurrencyInput}
                        name="amount"
                        control={control}
                        placeholder="0.00"
                        errored={`${hasInputError(errors.amount)}`}
                    />
                </CurrencyWrapper>
                <InputValidationError value={errors.amount}/>
            </InputWrapper>
            <Button disabled={hasFormErrors(errors)} width="20%" marginTop="2.8rem">Dodaj</Button>
        </AddTransactionForm>
    );
};

export default AddTransactionContainer;