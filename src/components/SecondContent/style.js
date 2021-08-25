import styled from "styled-components";
import Tooltip from "react-simple-tooltip";
export const ContainerSecondSection = styled.div`
  text-align: center;
  padding: 0%;
  margin: -1.5vh 0 0 0;
  background: #003366;
  @media screen and (max-width: 768px) {
    margin: 0 0 0 0;
    width: 100%;
    background-color: #003366;
  }
  @media screen and (max-height: 768px) {
  }
`;
export const Tooltips = styled(Tooltip)`
  color: #003366;
  @media screen and (max-width: 768px) {
  }
`;
export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    padding: 0 0 5vw 0;
  }
`;
export const ButtonReed = styled.button`
  min-width: 130px;
  width: auto;
  height: 45px;
  letter-spacing: 0.5px;
  line-height: 45px;
  padding: 0 12px 0 12px;
  font-size: 17px;
  background: #b70033;
  color: white;
  font-family: "RadikalBold";
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
export const PaintSize = styled.table`
  font-family: "Radikal1";
  justify-content: center;
  text-align: center;
  padding: 0 0 4vh 0;
  @media screen and (max-width: 768px) {
    padding: 0 0 5vw 0;
  }
  @media screen and (max-height: 769px) {
    padding: 0 0 1vh 0;
  }
`;
export const Recipients = styled.tr`
  font-family: "Radikal1";
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin: -2vh 0.5vh 4vh 0;
  position: relative;
  left: -10px;
  @media screen and (max-width: 1024px) {
    margin: 0vh 0 2vh 0;
    left: -5px;
  }
  @media screen and (max-height: 769px) {
    margin: 0vh 0 1vh 0;
  }
`;
export const Image = styled.img`
  width: 100px;
  color: white;
  @media screen and (max-width: 1024px) {
    width: 95px;
  }
`;
export const ImageQuantity = styled.img`
  width: 7vh;
  color: white;
  @media screen and (max-width: 768px) {
    width: 10vh;
    margin: 0 0vw 0 0vw;
  }
  @media screen and (max-width: 1367px) {
    width: 6vh;
  }
`;
export const ImageQuantity4L = styled.img`
  width: 9vh;
  color: white;
  @media screen and (max-width: 768px) {
    width: 12vh;
    margin: 0 0vw 0 0vw;
  }
  @media screen and (max-width: 1367px) {
    width: 7.5vh;
  }
`;
export const ImageQuantity19L = styled.img`
  width: 10vh;
  color: white;
  @media screen and (max-width: 768px) {
    width: 15vh;
    margin: 0 0vw 0 0vw;
  }
  @media screen and (max-width: 1367px) {
    width: 8vh;
  }
`;
export const ImagePaint = styled.img`
  width: 110px;
  @media screen and (max-width: 1367px) {
    margin: 2vh 0 3vh 0;
  }
`;
export const Banner = styled.img`
  width: 101.55%;
  height: auto;
  margin: -0.56vh -1vh 0 -0.66vh;
  padding: 0;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const Size = styled.div`
  font-size: 1.1vw;
  margin: 0 0 0 -1vw;
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
  color: #999999;
  @media screen and (max-width: 768px) {
    margin: 0 10vw 0 1vw;
    position: relative;
    left: 10px;
  }
  @media screen and (max-width: 1024px) {
    width: 5vw;
  }
`;
export const InputArea = styled.input`
  font-family: "Radikal1";
  width: 6vw;
  font-size: 1.3vh;
  padding: 0.3vh 0 0.3vh 0;
  margin: 0 4px 0 0;
  border-radius: 7px;
  border: none;
  color: #999999;
  @media screen and (max-width: 768px) {
    width: 12vw;
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
  @media screen and (max-width: 768px) {
    width: 8vw;
    margin: 1vh 1vh 1vh 1vh;
  }
`;
export const H1 = styled.h1`
  font-family: "RadikalBold";
  font-size: 35px;
  color: white;
  letter-spacing: 4px;
  @media screen and (max-width: 768px) {
    font-size: 3.8vw;
    display: flex;
    justify-content: center;
  }
  
`;
export const H2 = styled.h2`
  margin: -20px 0 0 0;
  font-family: "RadikalBold";
  color: #2098ae;
  font-size: 20px;
  @media screen and (max-width: 768px) {
    font-size: 2.7vw;
    display: flex;
    margin: none;
    padding: 10vw 0 0 0;
    justify-content: center;
  }
  @media screen and (max-height: 769px) {
    margin: -30px 0 1vh 0;
  }
`;
export const H = styled.h2`
  margin: -5px 0 0 0;
  letter-spacing: 2px;
  font-family: "RadikalBold";
  color: white;
  font-size: 20px;
  @media screen and (max-width: 768px) {
    font-size: 2.6vw;
    display: flex;
    justify-content: center;
  }
`;
export const Description = styled.h3`
  font-size: 0.7vw;
  color: white;
  letter-spacing: 1px;
  font-family: "Radikal1";
  @media screen and (max-width: 768px) {
    font-size: 2.2vw;
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
  @media screen and (max-width: 768px) {
    font-size: 2.8vw;
    width: 80px;
    text-align: center;
    justify-content: center;
  }
`;
export const ThDescription = styled.th`
  padding: 0 0 0 10px;
  margin: -0.5vw 0 3vw 0;
  @media screen and (max-width: 768px) {
    font-size: 2.8vw;
    padding: 0;
    margin: none;
  }
  @media screen and (max-width: 1024px) {
    margin: 1vh 0 1vh 0;
  }
  @media screen and (max-height: 769px) {
    margin: 0vh 0 1vh 0;
  }
`;
export const TrDes = styled.tr`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }
  @media screen and (max-width: 1024px) {
    margin: 1vh 0 4vh 0;
  }
  @media screen and (max-height: 769px) {
    margin: 0vh 0 0vh 0;
  }
`;
export const Quantity = styled.p`
  color: #2098ae;
  font-size: 0.8vw;
  margin: -5px 0 0 0;
  font-family: "Radikal1";
  @media screen and (max-width: 768px) {
    font-size: 2.8vw;
  }
`;

export const ContainerItems = styled.div`
  min-width: 15vw;
  @media screen and (max-width: 768px) {
    min-width: none;
    display: flex;
    padding: 5vw 0 5vw 0;
  }
`;
export const Items = styled.div`
  display: flex;
  margin: 0 0 0 4vw;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
export const InputColorName = styled.input`
  border-radius: 100%;
  width: 0.5vh;
  height: 0.8vh;
  border: 1px solid #003366;
  margin: 0 0.7vw 0 0;
  @media screen and (max-width: 768px) {
    width: 1vh;
  height: 1vh;
  position: relative;
  top: 3px;
    margin: 4vw 1vw 0 1vw;
  }
`;
