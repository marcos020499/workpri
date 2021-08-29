import React from "react";
import Calculator from "./pages/Calculator";
import { createGlobalStyle } from "styled-components";
import ScreenTest from "./components/ScreenTest";
import InputColor1 from "./components/Hooks/ImputColor";
import { FieldsInput } from "./components/refactor/FieldsInput";
import { CalculatorProvider } from "./components/refactor/Provider";
function App() {
	return (
		<CalculatorProvider>
			<div>
				<Calculator />
				<GlobalStyle />
			</div>
		</CalculatorProvider>
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
