import styled, {css} from 'styled-components';

const Input = styled.input`
      display: flex;
      margin-top: ${({marginTop}) => marginTop || '0'};
      margin-right: ${({marginRight}) => marginRight || '0'};
      height: ${({height}) => height || '4rem'};
      padding: 1.5rem 3rem 1.5rem 3rem;
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
      
      ${({currencyInput}) => currencyInput && css`
          padding-right: 4rem;
     `}

      ${({hasError}) => hasError && css`
          border: 0.1rem solid ${({theme}) => theme.colors.error};
     `}
`;

export default Input;