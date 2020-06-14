import styled from 'styled-components';
import device from "../../utils/ui-config/mobileQueries";

const Button = styled.button`
      display: flex;
      padding: 0;
      margin-top: ${({marginTop}) => marginTop || '0'};
      background-color: ${({theme}) => theme.colors.dark_blue};
      width: 100%;
      height: 4rem;
      border: none;
      border-radius: 1rem;
      font-weight: ${({theme}) => theme.fontWeight.bold};
      font-size: ${({theme}) => theme.fontSize.m};
      text-decoration: none;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.1), 0 10px 20px 0 rgba(0, 0, 0, 0.06);
      transition: background-position .3s;
      background-color: #DB5A9B;
      background-position: 100%;
      background-image: linear-gradient(120deg, transparent 0%, transparent 50%, #EA918C 50%,#DB5A9B);
      background-size: 220%;          
      color: ${({theme}) => theme.colors.dark_blue};
      
      &:hover{
          background-position: 0;
          color: white;
          background-image: linear-gradient(120deg, transparent 0%, transparent 50%, #EA918C 50%,#DB5A9B);
          }
      }
      :disabled{
          cursor: default;
          background-size: 0;
          background-color: ${({theme}) => theme.colors.gray};
          &:hover{
              color: ${({theme}) => theme.colors.dark_blue};
          }
      }
       &:focus{
           outline: none;
       }
       
       @media ${device.laptop} { 
          width: ${({width}) => width || '100%'};
       }
`;

export default Button;