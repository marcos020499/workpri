import React from "react";
import Calculator from "./pages/Calculator";
import { createGlobalStyle } from "styled-components";
import { ScreenTest } from "./components/ScreenTest";
function App() {
  return (
    <div>
      <ScreenTest />
      <Calculator />
      <GlobalStyle />
    </div>
  );
}
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0%;
    padding: 0%;
  }
  input {
    text-align: center;
  }
`;

export default App;
