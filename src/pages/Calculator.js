import React, { useState } from "react";
import FirstContent from "../components/FirstContent/index";
import SecondContent from "../components/SecondContent/index";
import { CalculatorPage, First, Second, Banner } from "./style";
import useInput from "../components/Hooks/Inputs";
import { FieldsInput } from "../components/refactor/FieldsInput";
import { useCalculatorField } from "../components/refactor/Provider";

const Index = () => {
	const { calculateWallArea } = useCalculatorField();

	console.log("Calculator", calculateWallArea("wall1"));
	return (
		<CalculatorPage>
			<Banner
				src={
					"https://res.cloudinary.com/marcos020499/image/upload/v1629305103/BANNER_SUPERIOR-01-01_qc1rs2.png"
				}
			/>
			<First>
				<FieldsInput />
			</First>
			<Second>
				<SecondContent total={{}} area={calculateWallArea("wall1")} />
			</Second>
		</CalculatorPage>
	);
};
export default Index;
