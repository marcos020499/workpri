import React from "react";
import Calculator from "./pages/Calculator";
import { createGlobalStyle } from "styled-components";
import { MProvider } from "./store";
import { Page } from "./refactor/Page";
function App() {
  return (
    <MProvider>
      <div>
        {/*<Calculator />
        <GlobalStyle /> */}
        <Page />
      </div>
    </MProvider>
  );
}
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0%;
    padding: 0%;
  }
`;

export default App;
