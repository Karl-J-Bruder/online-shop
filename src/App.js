import React from 'react';
import AppRouter from './routers/AppRouter';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";
import { theme } from "./styles/theme";
import ProductContextProvider from "./contexts/ProductContext";

function App(props) {
  return (
    <ThemeProvider theme={theme}>
      <ProductContextProvider>
        <GlobalStyles />
        <div className="App">
          <AppRouter />
        </div>
      </ProductContextProvider>
    </ThemeProvider>
  );
}

export default App;
