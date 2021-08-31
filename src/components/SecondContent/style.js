import styled from "styled-components";
import Tooltip from "react-simple-tooltip";
export const ContainerSecondSection = styled.div`
  text-align: center;
  @media screen and (max-width: 768px) {
    padding: 30px 0 0 0;
    width: 100%;
  }
`;

export const Tooltips = styled(Tooltip)`
  color: #003366;
  @media screen and (max-width: 768px) {
  }
`;
export const ContainerButton = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  padding: 46px 0 0vw 0;
  @media screen and (max-width: 1366px) {
    padding: 90px 0 0vw 0;
  }
  @media screen and (max-width: 1024px) {
    padding: 1vw 0 0vw 0;
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
  @media screen and (max-width: 1367px) {
    margin: -1vw;
  }
  @media screen and (max-width: 768px) {
    margin: 0vw 0 5vw 0;
  }
  @media screen and (max-width: 400px) {
    margin: 0vw 0 5vw 0;
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
  min-height: 18vw;
  max-height: 18vw;
  @media screen and (max-width: 1367px) {
    min-height: 12vw;
    max-height: 12vw;
  }

  @media screen and (max-width: 768px) {
    padding: 0 0 5vw 0;
  }
  @media screen and (max-width: 1024px) {
    padding: 0 0 0vw 0;
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
  margin: 0vw 0.5vw 0vh 0;
  position: relative;
  left: -10px;

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
    width: 6.5vh;
    margin: 1vw 1vw 0 1vw;
  }
`;
export const ImageQuantity4L = styled.img`
  width: 9vh;
  color: white;

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
  color: white;
  @media screen and (max-width: 1367px) {
    width: 8vh;
    margin: 1vw 1vw 0 0vw;
  }

  @media screen and (max-width: 768px) {
    width: 9vh;
    margin: 0 0vw 0 0vw;
  }
`;
export const ImagePaint = styled.img`
  width: 7vw;
  @media screen and (max-width: 1367px) {
    width: 7vw;
  }
  @media screen and (max-width: 1024px) {
    width: 120px;
  }
`;
export const Banner = styled.img`
  width: 101.5%;
  height: auto;
  margin: -0.56vh 0 0 -.5vh;
  position: relative;
  left: -0.08vw;
  @media screen and (max-width: 1200px) {
    display: none;
  }

  @media screen and (max-width: 1024px) {
    display: none;
  }
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
  margin: 0 4px 0 0;
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
export const H1 = styled.h1`
  font-family: "RadikalBold";
  font-size: 35px;
  color: white;
  letter-spacing: 4px;
  @media screen and (max-width: 768px) {
    font-size: 20px;
    display: flex;
    justify-content: center;
  }
  @media screen and (max-width: 1024px) {
    padding: 30px 0 0 0;
    margin: 1vh 1vh 1vh 1vh;
  }
`;
export const H2 = styled.h2`
  margin: -20px 0 0 0;
  font-family: "RadikalBold";
  color: #2098ae;
  font-size: 20px;
  @media screen and (max-width: 1024px) and (orientation: landscape){
    font-size: 17px;
  }
  @media screen and (max-height: 769px) {
    margin: -30px 0 1vh 0;
  }
  @media screen and (max-width: 1024px) {
    padding: 10px 0 0 0;
    font-size: 20px;
  }
  @media screen and (max-width: 768px) {
    font-size: 15px;
    display: flex;
    margin: none;
    padding: 10vw 0 0 0;
    justify-content: center;
  }
`;
export const H = styled.h2`
  margin: -5px 0 0 0;
  letter-spacing: 2px;
  font-family: "RadikalBold";
  color: white;
  font-size: 20px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
    display: flex;
    padding: 0 0 20px 0;
    justify-content: center;
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
export const TrDes = styled.tr`
  display: flex;
  flex-direction: row;
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
    max-width:25vw;
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
