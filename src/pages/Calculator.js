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
				<First>
					<FieldsInput />
				</First>
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
	height: auto !important;
	min-height: 100vh;
	max-height: 100vh;
	@media screen and (max-width: 1200px) {
		flex-direction: column;
	}
	@media screen and (min-width: 1200px) {
		align-items: center;
	}
`;

const Banner = styled.img`
display: none;
@media screen and (max-width: 1200px) {
	display: initial;
	width: 102%;
	margin: -0.6vh 0 0 -1vh;
	padding: none;
	height: 30vw;
}
@media screen and (max-width: 1024px) {
	display: initial;
	width: 103%;
	margin: -0.4vh 0 0 -0.8vh;
	padding: none;
	height: 30vw;
}
@media screen and (max-width: 768px) {
	display: initial;
	width: 102%;
	margin: -1.2vh 0 0 -0.5vh;
	padding: none;
	height: 30vw;
}
`;
const Second = styled.div`
background-color: #003366;
height: auto !important;
min-height: 100vh;
max-height: 100vh;
min-width: 48%;
max-width: 48%;
margin: 0vw -0.5vw 0 0;
@media screen and (max-width: 1366px) {
	top: 0vw;
}
@media screen and (max-width: 1200px) {
	min-width: 100%;
max-width: 100%;
min-height: none;
max-height: none;
}
@media screen and (max-width: 768px) {
	min-width: 100%;
max-width: 100%;
min-height: 180vh;
}
@media screen and (max-width: 600px) {
	min-width: 100%;
max-width: 100%;
min-height: 130vh;
}
@media screen and (max-width: 400px) {
	min-width: 100%;
max-width: 100%;
min-height: 137vh;
}
`;
const First = styled.div `
height: auto !important;
min-height: 100vh;
max-height: 100vh;
min-width: 52%;
max-width: 52%;
margin: 2vw 0 0 0;
justify-content: center;
@media screen and (max-width: 1200px) {
	margin: 5vw 0 0 0;
	min-width: 100%;
max-width: 100%;
min-height: none;
}
@media screen and (max-width: 768px) {
	margin: 5vw 0 0 0;
	min-width: 100%;
max-width: 100%;
min-height: 130vh;
}
@media screen and (max-width: 768px) and (orientation: landscape){
	margin: 5vw 0 0 0;
	min-width: 100%;
max-width: 100%;
min-height: 235vh;
}
@media screen and (max-width: 600px) and (orientation: landscape){
	margin: 5vw 0 0 0;
	min-width: 100%;
max-width: 100%;
min-height: 370vh;
}
@media screen and (max-width: 400px) {
	margin: 5vw 0 0 0;
	min-width: 100%;
max-width: 100%;
min-height: 215vh;
}
`