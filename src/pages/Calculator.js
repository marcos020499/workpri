import React, { useEffect } from "react";
import SecondContent from "../components/SecondContent/index";
import { FieldsInput } from "../components/refactor/FieldsInput";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { fetchColors } from "../store/colorReducer";
import { useSelector } from "react-redux";

const Index = () => {
  const dispatch = useDispatch();
  const { colors } = useSelector((state) => state);
	const { linea_producto } = colors;
  useEffect(() => {
    dispatch(fetchColors());
  }, []);

  

  return (
    <div>
      {linea_producto && <Ban src={linea_producto.url_imagen_inspiracion} />}
      <Container>
        <First>
          <FieldsInput />
        </First>
        <Second>
          <SecondContent total={{}} />
        </Second>
      </Container>
    </div>
  );
};
export default Index;

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  @media screen and (max-width: 1200px) {
    overflow: visible;
    flex-direction: column;
  }
  @media screen and (min-width: 1200px) {
    align-items: center;
  }
`;

const Ban = styled.img`
  display: none;
  @media screen and (max-width: 1200px) {
    display: initial;
    width: 100%;
    height: 30vw;
  }
`;
const Second = styled.div`
  background-color: #003366;
  height: auto !important;
  min-height: 100vh;
  max-height: 100vh;
  min-width: 48%;
  max-width: 48%;
  margin: 0vw -0.5vw 0 0;
  @media screen and (max-width: 1366px) {
    top: 0vw;
  }
  @media screen and (max-width: 1200px) {
    min-width: 100%;
    max-width: 100%;
    min-height: none;
    max-height: none;
  }
  @media screen and (max-width: 1024px) and (orientation: landscape) {
    margin: 5vw 0 0 0;
    min-width: 102%;
    max-width: 102%;
    min-height: 140vh;
  }
  @media screen and (max-width: 768px) {
    min-width: 100%;
    max-width: 100%;
    min-height: 180vh;
  }
  @media screen and (max-width: 768px) and (orientation: landscape) {
    padding: 0 0 5% 0;
  }
  @media screen and (max-width: 600px) {
    min-width: 100%;
    max-width: 100%;
    min-height: 130vh;
  }
  @media screen and (max-width: 600px) and (orientation: landscape) {
    padding: 0 0 50% 0;
  }
  @media screen and (max-width: 420px) {
    min-width: 100%;
    max-width: 100%;
    min-height: auto;
  }
`;
const First = styled.div`
  height: auto !important;
  min-height: 100vh;
  max-height: 100vh;
  min-width: 52%;
  max-width: 52%;
  margin: 2vw 0 0 0;
  justify-content: center;
  @media screen and (max-width: 1200px) {
    margin: 5vw 0 0 0;
    min-width: 100%;
    max-width: 100%;
    min-height: none;
  }
  @media screen and (max-width: 1200px) and (orientation: landscape) {
    margin: 5vw 0 0 0;
    min-width: 100%;
    max-width: 100%;
    min-height: 110vh;
  }
  @media screen and (max-width: 1024px) {
    margin: 5vw 0 0 0;
    min-height: 100vh;
  }
  @media screen and (max-width: 1024px) and (orientation: landscape) {
    margin: 5vw 0 0 0;
    padding: 0 0 10% 0;
    min-width: 100%;
    max-width: 100%;
    min-height: auto;
  }
  @media screen and (max-width: 900px) and (orientation: landscape) {
    margin: 5vw 0 0 0;
    padding: 0 0 40% 0;
    min-width: 100%;
    max-width: 100%;
    min-height: auto;
  }
  @media screen and (max-width: 768px) {
    margin: 5vw 0 0 0;
    padding: 0 0 30% 0;
    min-width: 100%;
    max-width: 100%;
    min-height: auto;
  }
  @media screen and (max-width: 768px) and (orientation: landscape) {
    margin: 5vw 0 0 0;
    min-width: 100%;
    padding: 0 0 80% 0;
    max-width: 100%;
    min-height: auto;
  }
  @media screen and (max-width: 700px) and (orientation: landscape) {
    margin: 5vw 0 0 0;
    min-width: 100%;
    max-width: 100%;
    padding: 0 0 90% 0;
    min-height: auto;
  }
  @media screen and (max-width: 600px) and (orientation: landscape) {
    margin: 5vw 0 0 0;
    padding: 0 0 140% 0;
    min-width: 100%;
    max-width: 100%;
    min-height: auto;
  }
  @media screen and (max-width: 600px){
    margin: 5vw 0 0 0;
    padding: 0 0 40% 0;
    min-width: 100%;
    max-width: 100%;
    min-height: auto;
  }
  @media screen and (max-width: 400px){
    padding: 0 0 45% 0;
  }
  @media screen and (max-width: 380px){
    padding: 0 0 55% 0;
  }
  @media screen and (max-width: 350px){
    padding: 0 0 65% 0;
  }
  @media screen and (max-width: 330px){
    padding: 0 0 78% 0;
  }
`;
