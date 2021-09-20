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
          <SecondContent />
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
  @media screen and (max-width: 1200px) {
    min-width: 100%;
    max-width: 100%;
    position: relative;
    top: 300px;
  }
  @media screen and (max-width: 1024px) {
		min-width: 100%;
    max-width: 100%;
    min-height: 900px;
		position: relative;
    top: 320px;
	}
  @media screen and (max-width: 760px) and (orientation: landscape) {
		min-width: 100%;
    max-width: 100%;
    min-height: 900px;
		position: relative;
    top: 640px;
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
  }
  @media screen and (max-width: 768px) {
    min-width: 100%;
  }
`;
