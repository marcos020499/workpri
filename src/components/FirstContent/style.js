import styled from "styled-components";
import "../../index.css";
export const ContainerHeader = styled.div`
  text-align: center;
  padding: 3vw 0 0 0;
  @media screen and (max-width: 768px) {
    width: 90vw;
  }
`;
export const PaintContainer = styled.tr``;
export const Title = styled.h1`
  font-family: "RadikalBold";
  font-size: 2.7vh;
  padding: 0 0 0 4vw;
  text-align: left;
  font-weight: 1000;
  letter-spacing: 1.7px;
  color: #003366;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const InputDiv = styled.div`
  padding: 0 4vw 0 4vw;
  justify-content: space-between;
  display: flex;
`;
export const Button = styled.button`
  min-width: 80px;
  width: auto;
  height: 3.7vh;
  line-height: 3.7vh;
  font-size: 1.5vh;
  background: #003366;
  color: white;
  font-family: "RadikalMedium";
  font-weight: 1000;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: right;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;
export const ButtonRed = styled.button`
  min-width: 105px;
  width: auto;
  height: 35px;
  letter-spacing: 0.5px;
  line-height: 35px;
  padding: 0 12px 0 12px;
  justify-content: right;
  align-items: right;
  font-size: 14px;
  background: #b70033;
  color: white;
  font-family: "Radikal1";
  font-weight: bolder;
  border: none;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;
export const Small = styled.small`
  font-size: 1vh;
  margin: none;
  padding: none;
  color: #003366;
  font-family: "RadikalBold";
  @media screen and (max-width: 768px) {
    font-size: 2vw;
  }
`;
export const H2 = styled.h2`
  font-size: 1.7vh;
  font-family: "RadikalBold";
  padding: 0 1vw 0 1vw;
  letter-spacing: 2px;
  color: #003366;
  margin: -0.45vw 0 0 0;
  @media screen and (max-width: 768px) {
    font-size: 2vw;
  }
`;
export const H2Color = styled.h2`
  font-size: 1.7vh;
  font-family: "RadikalBold";
  padding: 0;
  letter-spacing: 2px;
  color: #003366;
  margin: -0.4vw 0 0 0;
  @media screen and (max-width: 768px) {
    font-size: 2vw;
  }
`;
export const Icon = styled.h2`
  font-family: "Radikal1";
`;
export const IconMeter = styled.h2`
  padding: 0 1.65vw 0 1.65vw;
  font-family: "Radikal1";
`;
export const IconColor = styled.div`
  font-family: "Radikal1";
  text-align: right;
`;
export const Image = styled.img`
  margin: none;
  padding: none;
  width: 5vh;
  @media screen and (max-width: 768px) {
    width: 11vw;
  }
`;
export const ImageColor = styled.img`
  margin: none;
  position: relative;
  left: -10px;
  width: 5vh;
  @media screen and (max-width: 768px) {
    width: 11vw;
  }
`;
export const ImageM = styled.img`
  margin: 0 0 0 0;
  padding: none;
  width: 4vh;
  position: relative;
  top: -10px;
  @media screen and (max-width: 768px) {
    width: 7vw;
  }
`;
export const Meters = styled.div`
  margin: -32px;
  padding: none;
`;
export const ImageTable = styled.img`
  width: 2.3vh;
`;
export const Wall = styled.div`
  display: flex;
  flex: center;
  justify-content: center;
  width: 12vw;
`;
export const Options = styled.div`
  display: flex;
  flex: center;
  width: 11.7vw;
  justify-content: center;
`;
export const WallText = styled.p`
  font-size: 1.05vw;
  letter-spacing: 1.6px;
  color: #003366;
  font-family: "Radikal1";
  margin: 4px 1.5vw 0 0.2vh;
  @media screen and (max-width: 768px) {
    font-size: 2vw;
    margin: none;
  }
`;
export const Td = styled.td`
  border-right: 1px solid #003366;
  media screen and (max-width: 768px) {
    font-size: 2vw;
  }
`;
export const TdFirst = styled.td`
  border-right: 1px solid #003366;
  padding: 0 0 5vw 0;
  line-height: -10vw;
`;
export const A = styled.a`
  color: black;
`;
export const InputItem = styled.input`
  width: 10.2vh;
  height: 3.2vh;
  border: none;
  border-radius: 8px;
  margin: 0 0 0 1vh;
`;
export const Table = styled.div`
  text-align: center;
  justify-content: center;
  width: 90%;
  padding: 6vw 0 0 2vw;
  min-height: 16vw;
  max-height: 16vw;
`;
export const ColorsItem = styled.div`
  display: inline-block;
`;
export const InputColor = styled.button`
  border-radius: 100%;
  width: 2.3vh;
  height: 2.3vh;
  position: relative;
  background-color: white;
  border: 1.5px solid #999999;
  margin: 0 1vw 0 2vh;
  @media screen and (max-width: 768px) {
    width: 2vw;
    height: 4vw;
    margin: none;
  }
`;
export const InputColorTooltip = styled.button`
  width: 2vw;
  height: 2vw;
  background-color: white;
  border: 0.1px ridge #003366;
  margin: 1vw 0vw 0 0.5vw;
  @media screen and (max-width: 768px) {
    width: 2vw;
    height: 4vw;
  }
`;
export const Radio = styled.input`
  background-color: #003366;
  border: 1px solid #003366;
  width: 1.5vw;
  height: 22px;
  @media screen and (max-width: 768px) {
    width: 4vw;
  }
`;
export const InputNumber = styled.input`
  border-bottom: 1px solid #003366;
  border-top: white;
  border-left: white;
  border-right: white;
  width: 1.5vw;
`;
export const ButtonIncrement = styled.button`
  border-radius: 100%;
  border: none;
  background: #b70033;
  color: white;
  padding: 0;
  font-size: 1.2vh;
  width: 1.3vh;
  height: 1.3vh;
`;
export const ButtonDecrement = styled.button`
  border-radius: 100%;
  background: #b70033;
  font-size: 1.2vh;
  padding: 0;
  color: white;
  border: none;
  width: 1.3vh;
  height: 1.3vh;
`;
export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 1vh;
  padding: 0 1vh 0 1.5vh;
`;
export const Selectors = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Radikal1";
`;
export const Mts = styled.p`
  font-family: "Radikal1";
  font-size: 10px;
  margin: 0 0 0 0.3vw;
  color: #003366;
  media screen and (max-width: 768px) {
    font-size: 2px;
  }
`;
export const Warning = styled.p`
  font-family: "RadikalMedium";
  text-align: left;
  font-size: 1.6vh;
  letter-spacing: 1px;
  color: #b70033;
  @media screen and (max-width: 768px) {
    font-size: 2.4vw;
  }
`;
export const Final = styled.div`
  margin: 275px 4vw 0 4vw;
  padding: 0 0 10vw 0;
  justify-content: space-between;
  display: flex;
  align-items: center;
`;
