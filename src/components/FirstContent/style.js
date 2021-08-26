import styled from "styled-components";
import "../../index.css";
export const ContainerHeader = styled.div`
  text-align: center;
  padding: 3vw 0 0 0;
  @media screen and (max-width: 768px) {
    width: 100vw;
  }
`;
export const PaintContainer = styled.tr`
padding: 1vw 0 4vh 0;
max-width: 2vw;
min-width: 2vw;
@media screen and (max-width: 1367px) {
  padding: 0 0 0vw 0;
}
`;
export const Title = styled.h1`
  font-family: "RadikalBold";
  font-size: 2.7vh;
  padding: 0 0 0 3vw;
  text-align: left;
  font-weight: 1000;
  letter-spacing: 1.7px;
  color: #003366;
  @media screen and (max-width: 768px) {
    font-size: 16px;
    padding: 0 0 1vw 10vw;
  }
  @media screen and (max-width: 1024px) {
    padding: 0 0 1vw 4vw;
  }
`;

export const InputDiv = styled.div`
  padding: 0 4vw 0 4vw;
  justify-content: space-between;
  display: flex;
  @media screen and (max-width: 768px) {
    padding: 0 0 0 3vw;
  }
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
    margin: 15vw 10vw 0 0vw;

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
  padding: 0;
  font-family: "RadikalBold";
  @media screen and (max-width: 768px) {
    font-size: 10px;
    padding: 1vh 0 1vh 0;
  }
  @media screen and (max-width: 1367px) {
    font-size: 1.2vh;
    padding: 0 0 0vw 0;
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
    font-size: 2.1vw;
    padding: 0.5vw 0 0 0;
  }
  @media screen and (max-width: 1367px) {
    margin: 0vw 0 1.5vw 0;
  }
`;
export const H2Puertas = styled.h2`
  font-size: 1.7vh;
  font-family: "RadikalBold";
  padding: 0 1vw 0 1vw;
  letter-spacing: 2px;
  color: #003366;
  margin: -0.45vw 0 0 0;
  @media screen and (max-width: 768px) {
    font-size: 2.1vw;
    padding: 0 10vw 0 1vw;
    justify-content: center;
    position: relative;
    left: 15px;
  }
  @media screen and (max-width: 1367px) {
    margin: 0vw 0 1.5vw 0;
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
    font-size: 2.1vw;
    padding: 0.7vw 0 0 0;
  }
  @media screen and (max-width: 1367px) {
    margin: 0vw 0 1vw 0;
  }
`;
export const Icon = styled.h2`
  font-family: "Radikal1";
  @media screen and (max-width: 768px) {
    padding: none;
  }
`;
export const IconMeter = styled.h2`
  padding: 0 1.65vw 0 1.65vw;
  font-family: "Radikal1";
  @media screen and (max-width: 1367px) {
    padding: 0vh 1.2vw 0 1.2vw;
  }
  @media screen and (max-width: 768px) {
    padding: 0 1.5vw 0 1.5vw;
  }
  
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
  @media screen and (max-width: 1367px) {
    width: 4vh;
  }
`;
export const Meters = styled.div`
  margin: -32px;
  padding: none;
`;
export const ImageTable = styled.img`
  width: 1.8vh;
  display: flex;
  align-items: flex-start;
  position: relative:
  top:-5px;
  media screen and (max-width: 768px) {
    width: 0.4vh;
  }
`;
export const Wall = styled.div`
  display: flex;
  flex: center;
  justify-content: space-between;
  align-items: center;
  width: 12vw;
  position: relative;
  top: -10px;
  @media screen and (max-width: 768px) {
    width: 25vw;
    align-items: center;
    margin: 0 0 0 1vw;
  }
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
  text-align: left;
  justify-content: left;
  font-family: "Radikal1";
  @media screen and (max-width: 768px) {
    font-size: 2vw;
    margin: 0;
  }
  @media screen and (max-width: 1367px) {
    font-size: 1.45vh;
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
  padding: 0 0 2vw 0;
  max-height: 3vw;
  @media screen and (max-width: 1367px) {
    max-height: 3vw;
    padding: 0vw 0 2vw 0;
  }
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
  padding: 4vh 0 6vh 2vw;
  min-height: 16vw;
  max-height: 16vw;
  @media screen and (max-width: 1367px) {
    padding: 4vw 0 4vh 1vw;
    min-height: 17vw;
  max-height: 17vw;
  }
  @media screen and (max-width: 768px) {
    width: 0vh;
  }
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
  margin: 0px 1vw 0 2vh;
  @media screen and (max-width: 768px) {
    width: 3vw;
    height: 3vw;
    margin: 0 -2vw 0 -2vw;
  }
  @media screen and (max-width: 1367px) {
    margin: 0 1vw 0 1vh;
  }
`;
export const InputColorTooltip = styled.option`
  width: 2vw;
  height: 2vw;
  background-color: white;
  border: 0.1px ridge #003366;
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
    margin: 10px 0vw 0vw 0;
  }
  @media screen and (max-width: 1367px) {
    width: 1.5vw;
    position: relative;
    top: -5px;
  }
`;
export const InputNumber = styled.input`
  border-bottom: 1px solid #003366;
  border-top: white;
  border-left: white;
  border-right: white;
  font-size: 1.5vh;
  width: 3vw;
  heght: 0.1vw;
  position: relative;
    top: -6px;
  media screen and (max-width: 768px) {
    font-size: 0.5vh;
    width: 30px;
  }
`;
export const ButtonIncrement = styled.button`
  border-radius: 100%;
  border: none;
  background: #b70033;
  color: white;
  padding: 0;
  font-size: 1.2vh;
  width: 1.3vh;
  top: -20px;
  media screen and (max-width: 768px) {
    width: 1.6vh;
    height: 1.6vh;
    font-size: 1vh;
  }
`;
export const ButtonDecrement = styled.button`
  border-radius: 100%;
  background: #b70033;
  font-size: 1.2vh;
  padding: 0;
  color: white;
  border: none;
  width: 1.3vh;
  top: -20px;
  media screen and (max-width: 768px) {
    width: 1.6vh;
    height: 1.6vh;
    font-size: 1vh;
  }
`;
export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  left: 11vw;
  top: -35px;
  margin: 0 11.5vw 0 0;
  @media screen and (max-width: 1367px) {
    position: relative;
  }
  @media screen and (max-width: 768px) {
    left: 14vw;
  }
`;
export const Selectors = styled.div`
  display: flex;
  flex:1;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  font-family: "Radikal1";
  @media screen and (max-width: 1367px) {

  }
  media screen and (max-width: 768px) {
    justify-content: space-between;
  }
`
export const Mts = styled.p`
  font-family: "Radikal1";
  font-size: 0.5vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: -15px;
  margin: 0 1vh 0 1vh;
  color: #003366;
  media screen and (max-width: 768px) {
    font-size: 20px;
  }
  @media screen and (max-width: 1367px) {
    font-size: 1vh;
    position: relative;
  }
`;
export const Mtss = styled.p`
  font-family: "Radikal1";
  font-size: 0.5vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: -30px;
  margin: -0.007vw 0 0 0vw;
  color: #003366;
  media screen and (max-width: 768px) {
    font-size: 20px;
  }
  @media screen and (max-width: 1367px) {
    font-size: 1vh;
    position: relative;
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
  @media screen and (max-width: 1367px) {
    margin: 285px 4vw 0 4vw;
  }
  @media screen and (max-width: 1024px) {
    margin: 275px 4vw 0 4vw;
  }
`;
