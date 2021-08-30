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
				<SecondContent total={{}} />
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
	width: 100%;
	height: 30%;
	@media screen and (min-width: 1216px) {
		display: block;
	}
`;
