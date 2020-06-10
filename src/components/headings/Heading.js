import styled from "styled-components";

export const Heading = styled.h1`
      display: flex;
      width: ${({width}) => width || '100%'};
      color: ${({theme, color}) => color || theme.colors.dark_blue};
      font-size: ${({theme}) => theme.fontSize.l};
      font-weight: ${({theme}) => theme.fontWeight.semiBold};
      margin: 0 0 1rem 0;
      padding: 0;
`;