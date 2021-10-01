import styled from "styled-components";
export const ContainerSecondSection = styled.div`
  text-align: center;
  @media screen and (max-width: 1200px) {
    padding: 50px 0 0 0;
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    padding: 30px 0 0 0;
    width: 100%;
  }
`;
export const ContainerLiters = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
  justify-content: center;
  padding: 25px 0 0vw 0;
  @media screen and (max-width: 1367px) {
    flex-direction: row;
  }
  @media screen and (max-width: 1024px) {
    flex-direction: row;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const ContainerButton = styled.div`
  display: block;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1024px) {
    padding: 1vw 0 0vw 0;
  }
  @media screen and (max-height: 769px) and (orientation: landscape) {
    padding: 30px 0 0 0;
  }
  @media screen and (max-height: 601px) {
    padding: 50px 0 0 0;
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
  position: relative;
  top: -60px;
  @media screen and (max-width: 1500px) {
    top: -60px;
  }
  @media screen and (max-width: 1367px) {
    top: -40px;
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

export const ImagePaint = styled.img`
  width: 130px;
  @media screen and (max-width: 1500px) {
    width: 115px;
  }
  @media screen and (max-width: 1367px) {
    width: 105px;
  }
`;
export const Banner = styled.img`
  width: 100%;
  height: 20%;
  max-height: 300px;
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

export const H1 = styled.h1`
  font-family: "RadikalBold";
  font-size: 33px;
  color: white;
  letter-spacing: 4px;
  @media screen and (max-width: 1024px) {
    padding: 30px 0 0 0;
    margin: 1vh 1vh 1vh 1vh;
  }
  @media screen and (max-width: 768px) {
    margin: 0 0 10px 0;
    font-size: 20px;
    justify-content: center;
  }
`;
export const H2 = styled.h2`
  font-family: "RadikalBold";
  color: #2098ae;
  font-size: 19px;
  letter-spacing: 1px;
  margin: -20px 0 0 0;
  @media screen and (max-width: 1024px) and (orientation: landscape) {
    font-size: 17px;
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
  @media screen and (max-height: 601px) and (orientation: landscape) {
    position: relative;
    top: 5px;
  }
`;
export const H = styled.h2`
  margin: -5px 0 0 0;
  letter-spacing: 2px;
  font-family: "RadikalBold";
  color: white;
  font-size: 22px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
    display: flex;
    padding: 0 0 20px 0;
    justify-content: center;
  }
`;
export const Div = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  padding: 3% 2% 0 2%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
