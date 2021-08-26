import React from "react";
import Calculator from "./pages/Calculator";
import { createGlobalStyle } from "styled-components";
import ScreenTest from "./components/ScreenTest";
import InputColor1 from "./components/Hooks/ImputColor";
function App() {
  return (
    <div>
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
    text-align: center;{{  }}
  }
`;

export default App;
