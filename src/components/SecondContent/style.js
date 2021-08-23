import styled from "styled-components";

export const ContainerSecondSection = styled.div`
  text-align: center;
  padding: 0%;
  margin: 0%;
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
  min-width: 105px;
  width: auto;
  height: 35px;
  letter-spacing: 0.5px;
  line-height: 35px;
  padding: 0 12px 0 12px;
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
export const PaintSize = styled.table`
  font-family: "Radikal1";
  justify-content: center;
  text-align: center;
  padding: 0 0 2vh 0;
`;
export const Recipients = styled.tr`
  font-family: "Radikal1";
  display: flex;
  align-items: flex-end;
`;
export const Image = styled.img`
  width: 100px;
  color: white;
`;
export const ImageQuantity = styled.img`
  width: 7vh;
  color: white;
`;
export const ImageQuantity4L = styled.img`
  width: 8vh;
  color: white;
`;
export const ImageQuantity19L = styled.img`
  width: 10vh;
  color: white;
`;
export const ImagePaint = styled.img`
  width: 120px;
`;
export const Banner = styled.img`
  width: 100%;
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
  margin: 2vh 0 0 0;
`;
export const Input = styled.input`
  border-radius: 7px;
  width: 30px;
`;
export const InputArea = styled.input`
  font-family: "Radikal1";
  width: 6vw;
  margin: 0 10px 0 0;
  border-radius: 8px;
  border: none;
`;
export const InputAreaLiters = styled.input`
  font-family: "Radikal1";
  width: 4vw;
  border-radius: 10px;
  border: none;
`;
export const H1 = styled.h1`
  font-family: "RadikalBold";
  font-size: 35px;
  color: white;
  letter-spacing: 4px;
  @media screen and (max-width: 768px) {
    font-size: 3.5vw;
    display: flex;
    justify-content: center;
  }
`;
export const H2 = styled.h2`
  margin: -20px 0 0 0;
  font-family: "RadikalBold";
  color: #2098ae;
  font-size: 21px;
  @media screen and (max-width: 768px) {
    font-size: 2.5vw;
    display: flex;
    margin: 10px 0 0 0;
    justify-content: center;
  }
`;
export const H = styled.h2`
  margin: -5px 0 0 0;
  letter-spacing: 2px;
  font-family: "RadikalBold";
  color: white;
  font-size: 18px;
  @media screen and (max-width: 768px) {
    font-size: 2.5vw;
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
    font-size: 2vw;
  }
`;
export const DescriptionText = styled.h3`
  font-size: 0.8vw;
  color: white;
  font-family: "Radikal1";
  width: 114px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  &:hover {
    text-overflow: initial;
    white-space: initial;
    overflow: visible;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    font-size: 2.8vw;
  }
`;
export const ThDescription = styled.th`
  padding: 0 0 0 10px;
  max-height: 5px;
  margin: -0.5vw 0 5vw 0;
`;
export const TrDes = styled.tr`
  display: flex;
  flex-direction: row;
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
  width: 0.5vw;
  height: 0.5vw;
  border: 1px solid #003366;
  margin: 0 0.7vw 0 0;
`;
