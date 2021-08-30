import styled from "styled-components";

export const CalculatorPage = styled.div`
	display: flex;
	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
	@media screen and (min-width: 1216px) {
		flex-direction: row;
	}
`;
export const First = styled.div`
	justify-content: center;
`;
export const Banner = styled.img`
	display: none;
	@media screen and (max-width: 1200px) {
		display: initial;
		width: 102%;
		margin: -0.4vh 0 0 -0.8vh;
		padding: none;
		height: 30vw;
	  }
	  @media screen and (max-width: 1024px) {
		display: initial;
		width: 102%;
		margin: -0.4vh 0 0 -0.8vh;
		padding: none;
		height: 30vw;
	}
	@media screen and (max-width: 768px) {
		display: initial;
		width: 102%;
		margin: -0.4vh 0 0 -0.5vh;
		padding: none;
		height: 40vw;
	}
`;

export const Second = styled.div`
	display: flex;
	background: #003366;
	width: 50%;
	min-height: 100%;
	max-height: 100%;
	margin: 0%;
	padding: 0%;
	@media screen and (max-width: 1367px) {
		height: 109vh;
	}
	@media screen and (max-width: 1024px) {
		margin: 200px 0 0 0;
		width: 100%;
		min-height: 90vh;
		height: 250vh;
		justify-content: center;
	}
	@media screen and (max-width: 768px) {
		margin: 0px 0 0 0;
		width: 100%;
		min-height: 100vh;
		height: 250vh;
		justify-content: center;
	}
`;
