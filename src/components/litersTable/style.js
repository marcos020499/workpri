import styled from "styled-components";
import Tooltip from "react-simple-tooltip";

export const Tooltips = styled(Tooltip)`
	color: #003366;
	@media screen and (max-width: 768px) {
	}
`;
export const Table = styled.table`
	margin: auto;
	@media screen and (max-width: 768px) {
	}
`;
export const RowRecipients = styled.tr`
	font-family: "Radikal1";
	display: flex;
	align-items: flex-end;
	justify-content: center;
	margin: 0;
	@media screen and (max-width: 1367px) {
		margin: 0 0.5vh 0vw 0;
	}
	@media screen and (max-width: 1024px) {
		margin: 0;
		left: 5px;
	}
	@media screen and (max-width: 768px) {
	}
`;
export const Row = styled.tr``;
export const Image = styled.img`
	width: 100px;
	color: white;
	@media screen and (max-width: 1024px) {
		width: 95px;
	}
`;
export const ImageQuantity = styled.img`
	${({ size }) => {
		const sz = {
			_1: "7",
			_4: "9",
			_19: "10",
		}["_" + size];
		return `width: ${sz}vh`;
	}}
`;
export const ImageQuantity4L = styled.img`
	width: 9vh;
	@media screen and (max-width: 1367px) {
		width: 8vh;
		margin: 1vw 1vw 0 0vw;
	}
	@media screen and (max-width: 768px) {
		width: 8vh;
		margin: 0 1vw 0 1vw;
	}
`;
export const ImageQuantity19L = styled.img`
	width: 10vh;
	@media screen and (max-width: 1367px) {
		width: 8vh;
		margin: 1vw 1vw 0 0vw;
	}

	@media screen and (max-width: 768px) {
		width: 9vh;
		margin: 0 0vw 0 0vw;
	}
`;
export const Size = styled.div`
	font-size: 1.1vw;
	@media screen and (max-width: 768px) {
		text-align: center;
		align-items: center;
	}
`;
export const TdSize = styled.td`
	margin: -2vh -1vh 0 0;
	padding: none;
	width: 30%;
`;
export const Input = styled.input`
	border-radius: 7px;
	width: 30px;
	text-align: center;
	border: none;
	color: #999999;
	@media screen and (max-width: 1367px) {
		width: 20px;
	}
	@media screen and (max-width: 1024px) {
		width: 40px;
		font-size: 14px;
	}
	@media screen and (max-width: 768px) {
		margin: 0 5vw 0 1vw;
		position: relative;
		left: 10px;
	}
	@media screen and (max-width: 400px) {
		margin: 0 5vw 0 1vw;
		position: relative;
		left: 5px;
	}
`;
export const InputArea = styled.input`
	font-family: "Radikal1";
	width: 6vw;
	font-size: 1.3vh;
	padding: 0.3vh 0 0.3vh 0;
	border-radius: 7px;
	border: none;
	text-align: center;
	color: #999999;

	@media screen and (max-width: 1024px) {
		width: 70px;
		position: relative;

		font-size: 13px;
	}
	@media screen and (max-width: 768px) {
		width: 35px;
		font-size: 13px;
		margin: 1vh 1vh 1vh 1vh;
	}
`;
export const InputAreaLiters = styled.input`
	font-family: "Radikal1";
	width: 3.5vw;
	font-size: 1.3vh;
	padding: 0.3vh 0 0.3vh 0;
	border-radius: 7px;
	border: none;
	color: #999999;

	@media screen and (max-width: 1024px) {
		width: 40px;
		position: relative;
	}
	@media screen and (max-width: 768px) {
		width: 35px;
		font-size: 13px;
		margin: 1vh 1vh 1vh 1vh;
	}
`;

export const Description = styled.h3`
	font-size: 0.7vw;
	color: white;
	letter-spacing: 1px;
	font-family: "Radikal1";
	@media screen and (max-width: 1024px) {
		font-size: 12px;
	}
	@media screen and (max-width: 768px) {
		font-size: 12px;
	}
`;
export const DescriptionText = styled.h3`
  font-size: 1.4vh;
  color: white;
  font-family: "Radikal1";
  width: 120px;
  max-height: 30px;
  overflow: hidden;
  white-space: nowrap;
  text-align: center;
  text-overflow: ellipsis;

  @media screen and (max-width: 1024px) {
    font-size: 14px;
    width: 120px;
    text-align: center;
    justify-content: center;
  }
  @media screen and (max-width: 768px) {
    font-size: 15px;
    width: 110px;
    margin: 0;
    position: relative;
    top: -10px
    text-align: center;
    justify-content: center;
  }
  @media screen and (max-width: 400px) {
    font-size: 15px;
    width: 110px;
    margin: 0 1vw 0 0;
    position: relative;
    top: -10px
    text-align: center;
    justify-content: center;
  }
`;
export const ThDescription = styled.th`
	padding: 0 0 0 10px;
	margin: -0.5vw 0 3vw 0;

	@media screen and (max-height: 769px) {
		margin: 0vh 0 1vh 0;
	}
	@media screen and (max-width: 768px) {
		font-size: 2.8vw;
		margin: 0;
		padding: 0;
		margin: none;
	}
`;
export const ThDescriptionText = styled.th`
	margin: 2vw;
	@media screen and (max-width: 768px) {
		font-size: 2.8vw;
		padding: 0;
		margin: none;
	}
`;
export const RowDes = styled.tr`
	display: flex;
	flex-direction: row;
	justify-content: center;
	position: relative;
	left: -5px;
	@media screen and (max-width: 1200px) {
		position: relative;
		left: -15px;
		justify-content: center;
	}
	@media screen and (max-width: 1024px) {
		left: none;
		justify-content: center;
		position: relative;
	}
	@media screen and (max-width: 768px) {
		align-items: center;
		left: 0;
		justify-content: center;
		position: relative;
	}
`;
export const Quantity = styled.p`
	color: #2098ae;
	font-size: 0.8vw;
	margin: -5px 0 0 0;
	font-family: "Radikal1";
	@media screen and (max-width: 768px) {
		font-size: 14px;
	}
	@media screen and (max-width: 1024px) {
		font-size: 15px;
	}
	@media screen and (max-width: 1367px) {
		margin: 0 0 0 0;
	}
`;

export const ContainerItems = styled.div`
	min-width: 15vw;
	min-height: 150px;
	padding: 0vw 0 0 0;
	@media screen and (max-width: 1367px) {
		min-width: 16vw;
		max-width: 16vw;
		padding: 0;
	}
	@media screen and (max-width: 1200px) {
		min-width: 24vw;
		max-width: 24vw;
		padding: 3vw 0 0 0;
	}
	@media screen and (max-width: 1024px) {
		min-width: 25vw;
		max-width: 25vw;
		display: inline-block;
		padding: 3vw 0 0vh 0;
	}

	@media screen and (max-width: 768px) {
		padding: 0 0 3vh 0;
		min-width: none;
		display: flex;
		display: flex;
		justify-content: center;
		min-width: 90%;
		min-height: 90%;
		flex-direction: row;
		align-items: center;
	}
	@media screen and (max-width: 600px) {
		min-width: none;
		display: flex;
		display: flex;
		justify-content: center;
		min-width: 90%;
		min-height: 90%;
		flex-direction: row;
		align-items: center;
	}
`;
export const Items = styled.div`
	display: flex;
	justify-content: center;
	@media screen and (max-width: 1367px) {
	}
	@media screen and (max-width: 1024px) {
		display: inline-block;
		justify-content: center;
		margin: 0vw;
	}
	@media screen and (max-width: 768px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative;
	}
	@media screen and (max-width: 400px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative;
	}
`;
export const InputColorName = styled.input`
	border-radius: 100%;
	width: 0.5vh;
	height: 0.8vh;
	border: 1px solid #003366;
	margin: 0 0.7vw 0 0;
	@media screen and (max-width: 768px) {
		width: 7px;
		height: 10px;
		position: relative;
		top: -1px;
		margin: 0vw 1vw 0 1vw;
	}
`;