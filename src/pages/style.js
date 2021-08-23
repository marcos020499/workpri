import styled from "styled-components";

export const CalculatorPage = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const First = styled.div`
  width: 50%;
  justify-content: center;
`;
export const Banner = styled.img`
  display: none;
  @media screen and (max-width: 768px) {
    display: initial;
    width: 100%;
    margin: none;
    padding: none;
    height: 40vw;
  }
`;

export const Second = styled.div`
  display: flex;
  background: #003366;
  width: 50%;
  min-height: 100%;
  max-height: 100%;
  margin: 0%;
  padding: 0%;
  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;
