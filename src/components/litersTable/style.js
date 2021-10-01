import styled from "styled-components";
import Tooltip from "react-simple-tooltip";

export const Tooltips = styled(Tooltip)`
  color: #003366;
  @media screen and (max-width: 768px) {
  }
`;
export const Table = styled.table`
  margin: auto;
  min-heigth: 1067px;
  max-heigth: 1067px;
`;
export const RowRecipients = styled.tr`
  font-family: "Radikal1";
  display: flex;
  position: relative;
  width: 200px;
  top: -60px;
  align-items: flex-end;
  justify-content: center;
  text-align: center;
  @media screen and (max-width: 1500px) {
    top: -50px;
    width: 180px;
  }
  @media screen and (max-width: 1367px) {
    top: -40px;
  }
  @media screen and (max-width: 1024px) and (orientation: landscape) {
    top: -30px;
  }
  @media screen and (max-height: 768px) and (orientation: landscape) {
    top: -20px;
  }
  @media screen and (max-width: 768px) and (orientation: landscape) {
    top: 0px;
  }
  @media screen and (max-width: 600px) {
    min-width: 180px;
    max-width: 180px;
  }
  @media screen and (max-height: 601px) {
    top: 10px;
    min-width: 180px;
    max-width: 180px;
  }

  @media screen and (max-width: 400px) {
    min-width: 140px;
    max-width: 140px;
  }
  @media screen and (max-width: 350px) {
    min-width: 130px;
    max-width: 130px;
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
      _1: "7.3",
      _4: "9.6",
      _19: "10.4",
    }["_" + size];

    return `width: ${sz}vh`;
  }}
`;

export const Size = styled.div`
  font-size: 1.1vw;
  @media screen and (max-width: 768px) {
    text-align: center;
    align-items: center;
  }
`;
export const TdSize = styled.td`
  padding: none;
  width: 33%;
  @media screen and (max-width: 1367px) {
    width: 33%;
  }
  @media screen and (max-width: 600px) {
    width: 30%;
  }
`;

export const Input = styled.input`
  border-radius: 7px;
  min-width: 30px;
  max-width: 30px;
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
    margin: 0 8vw 0 1vw;
    position: relative;
  }
  @media screen and (max-height: 601px) and (orientation: landscape) {
    position: relative;
    left: -15%;
  }
  @media screen and (max-width: 400px) {
    width: 25px;
    margin: 0 5vw 0 1vw;
  }
`;
export const InputArea = styled.input`
  font-family: "Radikal1";
  width: 95px;
  font-size: 11px;
  padding: 0.3vh 0 0.3vh 0;
  border-radius: 7px;
  border: none;
  text-align: center;
  color: #999999;
  @media screen and (max-width: 768px) {
    width: 35px;
    font-size: 13px;
    margin: 1vh 1vh 1vh 1vh;
  }
`;
export const InputAreaLiters = styled.input`
  font-family: "Radikal1";
  width: 55px;
  text-align: center;
  font-size: 11px;
  padding: 0.3vh 0 0.3vh 0;
  border-radius: 7px;
  border: none;
  color: #999999;
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
  font-family: "RadikalBold";
  width: 160px;
  max-height: 30px;
  overflow: hidden;
  white-space: nowrap;
  text-align: center;
  text-overflow: ellipsis;
  position: relative;
  top: 10px;
  @media screen and (max-width: 1024px) {
    font-size: 14px;
    width: 160px;
    text-align: center;
    justify-content: center;
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
    width: 150px;
    margin: 0;
    top: -10px;
  }
  @media screen and (max-width: 600px) {
    width: 120px;
    font-size: 12px;
  }
  @media screen and (max-width: 400px) {
    font-size: 11px;
    width: 110px;
  }
  @media screen and (max-width: 340px) {
    font-size: 10px;
    width: 100px;
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
  left: -4%;
  @media screen and (max-width: 1200px) {
    position: relative;
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
  @media screen and (max-height: 601px) and (orientation: landscape) {
    position: relative;
    left: -15%;
  }
`;

export const ContainerItems = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1367px) {
    flex-direction: column;
    width: 100%;
    margin: auto auto 0 auto;
  }
  @media screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 768px) {
    padding: 0 0 3vh 0;
    min-width: none;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
  }
  @media screen and (max-width: 600px) {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
  }
`;
export const Items = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: -35px 60px 0 0;
  max-width: 100%;
  @media screen and (max-width: 1500px) {
    margin: -15px 20px 0 auto;
  }
  @media screen and (max-width: 1367px) {
    margin: -15px 0px 0 auto;
    flex-direction: row;
  }
  @media screen and (max-width: 1200px) {
    margin: -15px 60px 0 auto;
  }
  @media screen and (max-width: 768px) and (orientation: landscape) {
    padding: 0 0 10px 0;
  }
  @media screen and (max-width: 600px) {
    margin: auto;
    position: relative;
    left: -12%;
    padding: 0;
    width: 90%;
  }
  @media screen and (max-height: 768px) and (orientation: landscape) {
    left: 5%;
  }
  @media screen and (max-width: 400px) {
    margin: auto;
    position: relative;
    left: -14%;
    padding: 0;
    width: 90%;
  }
  @media screen and (max-width: 350px) {
    left: -15%;
  }
`;
export const InputColorName = styled.input`
  border-radius: 100%;
  width: 10px;
  height: 13px;
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
export const ContainerButton = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  padding: 25px 0 0vw 0;
  @media screen and (max-width: 1366px) {
    padding: 50px 0 0vw 0;
  }
  @media screen and (max-width: 1024px) {
    padding: 1vw 0 0vw 0;
  }
`;
