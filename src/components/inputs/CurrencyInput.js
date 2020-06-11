import createNumberMask from "text-mask-addons/src/createNumberMask";
import styled, {css} from "styled-components";
import MaskedInput from "react-text-mask";
import React from "react";

const StyledInput = styled(MaskedInput)`
      display: flex;
      margin-top: ${({marginTop}) => marginTop || '0'};
      margin-right: ${({marginRight}) => marginRight || '0'};
      height: ${({height}) => height || '4rem'};
      font-size: ${({theme}) => theme.fontSize.m};
      font-weight: ${({theme}) => theme.fontWeight.regular};
      background-color: ${({theme}) => theme.colors.inputs_background};
      border: none;
      border-radius: 1rem;
      width: ${({width}) => width || '100%'};
      ::placeholder {
        color: ${({theme}) => theme.colors.text_gray};
      }
      &:focus{
         outline: none;
      }
      
       padding: 1.5rem 4rem 1.5rem 3rem;

      ${({haserror}) => haserror && css`
          border: 0.1rem solid ${({theme}) => theme.colors.error};
     `}
`;

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


const CurrencyInput = React.forwardRef(({...inputProps}, ref) => {
    const currencyMask = createNumberMask(defaultMaskOptions);

    return <StyledInput ref={ref} name='amount' mask={currencyMask} {...inputProps} />
});


export default CurrencyInput;
