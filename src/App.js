import React from "react";
import Calculator from "./pages/Calculator";
import { createGlobalStyle } from "styled-components";
import ScreenTest from "./components/ScreenTest";
import InputColor1 from "./components/Hooks/ImputColor";
import { FieldsInput } from "./components/refactor/FieldsInput";
import { CalculatorProvider } from "./components/refactor/Provider";
import { MProvider } from "./store";
function App() {
	return (
		<MProvider>
			<div>
				<Calculator />
				<GlobalStyle />
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
