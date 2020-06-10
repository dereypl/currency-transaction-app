import styled from 'styled-components';
import React from "react";

const Icon = styled.div`
      height: 2rem;
      width: 2rem;
      background-image: url(${props => props.path});
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
`;

const Button = styled.button`
      display: flex;
      padding: 0;
      width: ${({width}) => width || '3rem'};
      height: 3rem;
      border: none;
      border-radius: 1rem;
      font-weight: ${({theme}) => theme.fontWeight.bold};
      font-size: ${({theme}) => theme.fontSize.m};
      text-decoration: none;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.1), 0 10px 20px 0 rgba(0, 0, 0, 0.06);
      transition: background-position .2s;
      background-color: transparent;
      background-position: 0;
      background-image: linear-gradient(120deg, transparent 0%, transparent 50%, #EA918C 50%,#DB5A9B);
      background-size: 240%;          
      color: ${({theme}) => theme.colors.dark_blue};
      position: absolute;
      right: 2rem;
      
      &:hover{
          background-position: 100%;
          color: white;
          }
      &:focus{
          outline: none;
      }
      
       &:hover ${Icon}{
        background-image: url(${props => props.pathActive});
        transition-delay: .1s;
      }
`;

const ButtonWithIcon = ({iconPath, iconPathActive}) => (
    <Button pathActive={iconPathActive}>
        <Icon path={iconPath}/>
    </Button>
);

export default ButtonWithIcon;