import React, { useReducer, useCallback, useState } from "react";
import SecondpartLiters from "../litersTable/index";
import Banner from "../banner/index";
import {
  ContainerSecondSection,
  H1,
  H2,
  ImagePaint,
  H,
  ContainerButton,
  ButtonReed,
  Div,
} from "./style";
import { useSelector } from "react-redux";

const SecondPart = () => {
  const { result, colors } = useSelector((state) => state);
  const { linea_producto } = colors;
  const stateColors = useSelector((state) => state.colors);
  const colors1 = stateColors.colores || [];
  const initialState = {
    cantidad1_1L: 0,
    cantidad1_2L: 0,
    cantidad1_3L: 0,
    cantidad4_1L: 0,
    cantidad4_2L: 0,
    cantidad4_3L: 0,
    cantidad19_1L: 0,
    cantidad19_2L: 0,
    cantidad19_3L: 0,
  };
  const reducer = (s, a) => ({ ...s, ...a });
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleInput = (e) => {
    dispatch({ [e.target.name]: e.target.value });
  };
  
  let x1_1 = state.cantidad1_1L
  let x1_2 = state.cantidad1_2L
  let x1_3 = state.cantidad1_3L
  let x4_1 = state.cantidad4_1L
  let x4_2 = state.cantidad4_2L
  let x4_3 = state.cantidad4_3L
  let x19_1 = state.cantidad19_1L
  let x19_2 = state.cantidad19_2L
  let x19_3 = state.cantidad19_3L

  function getColors() {
    return colors1.map((el, inde) => (
      <SecondpartLiters key={inde + "pintura"} {...el} {...inde}  />
    ));
  }
  
  function getPresent() {
    return result.map((element, index) =>
    element.litros !== 0?(
      element.presentaciones.map((elsn, l) =>
        elsn.litros === 1 && index === 0
          ? (state.cantidad1_1L !== 0 && !elsn.cantidad? state.cantidad1_1L: state.cantidad1_1L = elsn.cantidad) === 0
            ? null
            : x1_1 === 0?'': elsn.presentacion_id + ":" + x1_1:
          
            elsn.litros === 1 && index === 1
            ? (state.cantidad1_2L !== 0 && !elsn.cantidad? state.cantidad1_2L: state.cantidad1_2L = elsn.cantidad) === 0
              ? null
              : elsn.presentacion_id + ":" + x1_2:

              elsn.litros === 1 && index === 2
          ? (state.cantidad1_3L !== 0 && !elsn.cantidad? state.cantidad1_3L: state.cantidad1_3L = elsn.cantidad) === 0
            ? null
            : elsn.presentacion_id + ":" + x1_3:

            elsn.litros === 4 && index === 0
          ? (state.cantidad4_1L !== 0 && !elsn.cantidad? state.cantidad4_1L: state.cantidad4_1L = elsn.cantidad) === 0
            ? null
            : elsn.presentacion_id + ":" + x4_1:

            elsn.litros === 4 && index === 1
          ? (state.cantidad4_2L !== 0 && !elsn.cantidad? state.cantidad4_2L: state.cantidad4_2L = elsn.cantidad) === 0
            ? null
            : elsn.presentacion_id + ":" + x4_2:

            elsn.litros === 4 && index === 2
          ? (state.cantidad4_3L !== 0 && !elsn.cantidad? state.cantidad4_3L: state.cantidad4_3L = elsn.cantidad) === 0
            ? null
            : elsn.presentacion_id + ":" + x4_3:

            elsn.litros === 19 && index === 0
          ? (state.cantidad19_1L !== 0 && !elsn.cantidad? state.cantidad19_1L: state.cantidad19_1L = elsn.cantidad) === 0
            ? null
            : elsn.presentacion_id + ":" + x19_1:

            elsn.litros === 19 && index === 1
          ? (state.cantidad19_2L !== 0 && !elsn.cantidad? state.cantidad19_2L: state.cantidad19_2L = elsn.cantidad) === 0
            ? null
            : elsn.presentacion_id + ":" + x19_2:

            elsn.litros === 19 && index === 2
          ? (state.cantidad19_3L !== 0 && !elsn.cantidad? state.cantidad19_3L: state.cantidad19_3L = elsn.cantidad) === 0
            ? null
            : elsn.presentacion_id + ":" + x19_3:

           null
      )):(
        element.presentaciones.map((elsnm, x) =>(
          x1_1= 0,
          x1_2= 0,
          x1_3= 0,
          x4_1= 0,
          x4_2= 0,
          x4_3= 0,
          x19_1= 0,
          x19_2= 0,
          x19_3= 0
          )
        )
      )
    );
  }
  function getResult(linea_producto) {
    return result.map((el, ind) => (
      <SecondpartLiters
        key={ind + "pintura"}
        {...el}
        {...ind}
        {...state}
        indSecond={ind}
        onChanges={handleInput}
      />
    ));
  }

  function templateUr() {
    let url = `http://ec2-44-242-66-211.us-west-2.compute.amazonaws.com/finalizar-compra/?add-to-cart=${getPresent()},`;
    let replace = url.replace(/,,/g, ",");
    let replace1 = replace.replace(/=,/g, "=").replace(/,,/g, ",");
    let replace2 = replace1.replace(/0,/g, "")
    let replace3 = replace2.replace(/0,/g, "")
    return replace3;
  }
  return (
    <div>
      <Banner />

      <ContainerSecondSection>
        <H1>RESULTADO</H1>
        <H2>PRISA TE RECOMIENDA</H2>
        {linea_producto && <ImagePaint src={linea_producto.url_imagen} />}
        <H>Elige la presentación </H>
        <Div
          style={{
            position: "relative",
            left: colors1.length === 1 ? "2%" : "",
          }}
        >
          {result.length === 0 ? getColors() : getResult()}
        </Div>
        <ContainerButton>
          <h1> </h1>
          <a href={templateUr() + ""}>
            <ButtonReed>Comprar</ButtonReed>
          </a>
        </ContainerButton>
      </ContainerSecondSection>
    </div>
  );
};
export default SecondPart;
