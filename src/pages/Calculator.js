import React from "react";
import SecondContent from "../components/SecondContent/index";
import { FieldsInput } from "../components/refactor/FieldsInput";
import styled from "styled-components";

const Index = () => {
	const Ban = () => (
		<Banner
			src={
				"https://res.cloudinary.com/marcos020499/image/upload/v1629305103/BANNER_SUPERIOR-01-01_qc1rs2.png"
			}
		/>
	);

	return (
		<div>
			<Ban />
			<Container>
				<FieldsInput />
				<Second>
				<SecondContent total={{}}/>
				</Second>
			</Container>
		</div>
	);
};
export default Index;

const Container = styled.div`
	display: flex;
	@media screen and (max-width: 1200px) {
		flex-direction: column;
	}
	@media screen and (min-width: 1200px) {
		align-items: center;
	}
`;

const Banner = styled.img`
display: none;
@media screen and (max-width: 768px) {
	display: initial;
	width: 10%;
	margin: -0.4vh 0 0 -0.5vh;
	padding: none;
	height: 40vw;
}
@media screen and (max-width: 1024px) {
	display: initial;
	width: 103%;
	margin: -0.4vh 0 0 -0.8vh;
	padding: none;
	height: 30vw;
}
`;
const Second = styled.div`
background-color: #003366;
height: auto !important;
position: relative;
top: 0vw;
min-height: 100%;
margin: 0 -0.5vw 0 0;
@media screen and (max-width: 1366px) {
	top: 0vw;
}
`;
