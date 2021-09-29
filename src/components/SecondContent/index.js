import React, {  useReducer} from "react";
import SecondpartLiters from "../litersTable/index";

import {
	ContainerSecondSection,
	H1,
	H2,
	Banner,
	ImagePaint,
	H,
	ContainerButton,
	ButtonReed,
	Div
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
	function getResult() {
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
  function getColors() {
    return colors1.map((el, inde) => (
      <SecondpartLiters key={inde + "pintura"} {...el} {...inde} />
    ));
  }
  function getPresent() {
    return result.map((element, index) =>
      element.presentaciones.map((elsn, x) => 
            elsn.litros === 4 && index === 0
            ? (state.cantidad4_1L>elsn.cantidad?state.cantidad4_1L = elsn.cantidad:state.cantidad4_1L<elsn.cantidad?state.cantidad4_1L = elsn.cantidad: state.cantidad4_1L )< 1 ?null: elsn.presentacion_id + ":" + state.cantidad4_1L
          : elsn.litros === 4 && index === 1
          ? (state.cantidad4_2L>elsn.cantidad?state.cantidad4_2L = elsn.cantidad: state.cantidad4_2L<elsn.cantidad?state.cantidad4_2L = elsn.cantidad: state.cantidad4_2L)< 1 ?null: elsn.presentacion_id + ":" + state.cantidad4_2L
          : elsn.litros === 4 && index === 2
          ? ( state.cantidad4_3L>elsn.cantidad?state.cantidad4_3L = elsn.cantidad: state.cantidad4_3L<elsn.cantidad?state.cantidad4_3L = elsn.cantidad: state.cantidad4_3L)< 1 ?null: elsn.presentacion_id + ":" + state.cantidad4_3L

          : elsn.litros === 1 && index === 0 
          ? (state.cantidad1_1L<elsn.cantidad?state.cantidad1_1L = elsn.cantidad:state.cantidad1_1L>elsn.cantidad?state.cantidad1_1L = elsn.cantidad: state.cantidad1_1L)< 1 ? null: elsn.presentacion_id + ":" + state.cantidad1_1L
          : elsn.litros === 1 && index === 1
          ? (state.cantidad1_2L>elsn.cantidad?state.cantidad1_2L = elsn.cantidad: state.cantidad1_2L<elsn.cantidad?state.cantidad1_2L = elsn.cantidad: state.cantidad1_2L)< 1 ?null: elsn.presentacion_id + ":" + state.cantidad1_2L
          : elsn.litros === 1 && index === 2
          ? (state.cantidad1_3L>elsn.cantidad?state.cantidad1_3L = elsn.cantidad: state.cantidad1_3L<elsn.cantidad?state.cantidad1_3L = elsn.cantidad: state.cantidad1_3L)< 1 ?null: elsn.presentacion_id + ":" + state.cantidad1_3L

          : elsn.litros === 19 && index === 0
          ? (state.cantidad19_1L>elsn.cantidad?state.cantidad19_1L = elsn.cantidad: state.cantidad19_1L<elsn.cantidad?state.cantidad19_1L = elsn.cantidad: state.cantidad19_1L)< 1 ?null: elsn.presentacion_id + ":" + state.cantidad19_1L
          : elsn.litros === 19 && index === 1
          ? (state.cantidad19_2L>elsn.cantidad?state.cantidad19_2L = elsn.cantidad: state.cantidad19_2L<elsn.cantidad?state.cantidad19_2L = elsn.cantidad: state.cantidad19_2L)< 1 ?null: elsn.presentacion_id + ":" + state.cantidad19_2L
          : elsn.litros === 19 && index === 2
          ? (state.cantidad19_3L>elsn.cantidad?state.cantidad19_3L = elsn.cantidad: state.cantidad19_3L<elsn.cantidad?state.cantidad19_3L = elsn.cantidad: state.cantidad19_3L)< 1 ?null: elsn.presentacion_id + ":" + state.cantidad19_3L
          : null
      )
    );
  }
	function templateUr(){
		let url = `http://ec2-44-242-66-211.us-west-2.compute.amazonaws.com/finalizar-compra/?add-to-cart=${getPresent()},`
		let replace = url.replace(/,,/g , ',')
    let replace1 = replace.replace(/=,/g, '=').replace(/,,/g , ',')
    return replace1
	}
	return (
		<div>
			{linea_producto && <Banner src={linea_producto.url_imagen_inspiracion} />}

			<ContainerSecondSection>
				<H1>RESULTADO</H1>
				<H2>PRISA TE RECOMIENDA</H2>
				{linea_producto && <ImagePaint src={linea_producto.url_imagen} />}
				<H>Elige la presentación </H>
				<Div>
					{result.length === 0 ? getColors(): getResult()
				}
				</Div>
				<ContainerButton>
					<h1> </h1>
					<a href={templateUr()+''}><ButtonReed>Comprar</ButtonReed></a>
				</ContainerButton>
			</ContainerSecondSection>
		</div>
	);
};
export default SecondPart;
