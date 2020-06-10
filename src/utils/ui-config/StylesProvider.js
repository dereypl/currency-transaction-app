import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import GlobalStyle from "./GlobalStyle";
import {theme} from "./Theme";

const AppWrapper = styled.div`
      display: flex;
      width: 100vw;
      min-height: 100vh;
      position:relative;
      flex-direction: column;
      overflow-x: hidden;
`;

const StylesProvider = ({children}) => (
    <AppWrapper>
        <GlobalStyle/>
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    </AppWrapper>
);

export default StylesProvider;