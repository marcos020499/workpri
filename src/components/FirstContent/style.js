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
  font-size: 25px;
  padding: 0 0 0 4vw;
  text-align: left;
  font-weight: 1000;
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
  min-width: 105px;
  width: auto;
  height: 28px;
  letter-spacing: 0.5px;
  line-height: 28px;
  padding: 0 10px 0 15px;
  font-size: 13px;
  background: #003366;
  color: white;
  font-family: "Radikal1";
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
  font-size: 0.7vw;
  margin: none;
  padding: none;
  color: #003366;
  font-family: "RadikalBold";
  @media screen and (max-width: 768px) {
    font-size: 2vw;
  }
`;
export const H2 = styled.h2`
  font-size: 1vw;
  font-family: "RadikalBold";
  padding: 0 1vw 0 1vw;
  color: #003366;
  margin: -0.7vw 0 0 0;
  @media screen and (max-width: 768px) {
    font-size: 2vw;
  }
`;
export const Icon = styled.h2`
  font-family: "Radikal1";
`;
export const IconColor = styled.div`
  font-family: "Radikal1";
  text-align: right;
`;
export const Image = styled.img`
  margin: none;
  padding: none;
  width: 4vw;
  @media screen and (max-width: 768px) {
    width: 11vw;
  }
`;
export const ImageM = styled.img`
  margin: 0 0 0 0;
  padding: none;
  width: 3.2vw;
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
  width: 1.5vw;
`;
export const Wall = styled.div`
  display: flex;
  flex: center;
  justify-content: center;
`;
export const Options = styled.div`
  display: flex;
  flex: center;
  justify-content: center;
`;
export const WallText = styled.p`
  font-size: 1.2vw;
  color: #003366;
  font-family: "Radikal1";
  margin: 4px 2vh 0 1vh;
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
  width: 65px;
  height: 20px;
  border: none;
  border-radius: 8px;
  margin: 0 0 0 4px;
`;
export const Table = styled.div`
  text-align: center;
  justify-content: center;
  width: 90%;
  padding: 8vw 0 0 2vw;
  min-height: 16vw;
  max-height: 16vw;
`;
export const ColorsItem = styled.div`
  display: inline-block;
`;
export const InputColor = styled.button`
  border-radius: 100%;
  width: 1.5vw;
  height: 1.5vw;
  background-color: white;
  border: 1.5px solid #999999;
  margin: 0 1vw 0 1.5vw;
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
  width: 20px;
`;
export const ButtonIncrement = styled.button`
  border-radius: 100%;
  border: none;
  background: #b70033;
  color: white;
  padding: 0;
  width: 15px;
  height: 15px;
`;
export const ButtonDecrement = styled.button`
  border-radius: 100%;
  background: #b70033;
  padding: 0;
  color: white;
  width: 15px;
  border: none;
  height: 15px;
`;
export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 1vw;
`;
export const Selectors = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Radikal1";
`;
export const Mts = styled.p`
  font-family: "Radikal1";
  font-size: 10px;
  margin: 0 0.3vw 0 0.3vw;
  color: #003366;
  media screen and (max-width: 768px) {
    font-size: 2px;
  }
`;
export const Warning = styled.p`
  font-family: "Radikal1";
  text-align: left;
  font-size: 1.2vw;
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
