import styled from "styled-components";
import Tooltip from "react-simple-tooltip";

export const Tooltips = styled(Tooltip)`
  color: #003366;
  @media screen and (max-width: 768px) {
  }
`;
export const Table = styled.table`
  margin: auto;
  width: 20%;
`;
export const RowRecipients = styled.tr`
  font-family: "Radikal1";
  display: flex;
  position: relative;
  top: -30px;
  align-items: flex-end;
  justify-content: center;
  text-align: center;
  @media screen and (max-width: 1367px) {
    top: -10px;
    margin: 0 0.5vh 0vw 0;
  }
  @media screen and (max-width: 1024px) {
    min-width: 200px;
    max-width: 200px;
  }
  @media screen and (max-width: 768px) {
    min-width: 150px;
    max-width: 150px;
  }
  @media screen and (max-width: 400px) {
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
      _1: "7.5",
      _4: "9.5",
      _19: "10",
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
  margin: 0;
  width: 30%;
  @media screen and (max-width: 1367px) {
    width: 35%;
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
    left: 10px;
  }
  @media screen and (max-width: 400px) {
    width: 25px;
    margin: 0 5vw 0 1vw;
    position: relative;
    left: 5px;
  }
`;
export const InputArea = styled.input`
  font-family: "Radikal1";
  width: 80px;
  font-size: 11px;
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
  width: 40px;
  text-align: center;
  font-size: 11px;
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
  width: 130px;
  max-height: 30px;
  overflow: hidden;
  white-space: nowrap;
  text-align: center;
  text-overflow: ellipsis;

  @media screen and (max-width: 1024px) {
    font-size: 14px;
    width: 130px;
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
  width: 100%;
  @media screen and (max-width: 1367px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: auto;
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
    min-width: none;
    display: flex;
    display: flex;
    justify-content: center;
    max-width: 90%;
    min-height: 90%;
    flex-direction: row;
    align-items: center;
  }
`;
export const Items = styled.div`
  display: flex;
  justify-content: center;
  margin: -20px auto auto auto;
  max-width: 90%;
  @media screen and (max-width: 1367px) {
    flex-direction: row;
  }
  @media screen and (max-width: 600px) {
    max-width: 10px;
  }
`;
export const InputColorName = styled.input`
  border-radius: 100%;
  width: 10px;
  height: 10px;
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
