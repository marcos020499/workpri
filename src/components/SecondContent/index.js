import React, { useEffect, useState, memo } from "react";
import SecondpartLiters from "../litersTable/index";
import useInput from '../Hooks//Inputs'
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

const SecondPart = ({cantidad4L}) => {
	const { result, colors } = useSelector((state) => state);
	const { linea_producto } = colors;
	const stateColors = useSelector((state) => state.colors);
	const colors1 = stateColors.colores || [];
	const {state} = useInput()

	function getResult() {
		return result.map ((el, i) => (
		<SecondpartLiters key={i + "pintura"} {...el} {...i} />
		 ))
	}  
	function getColors() {
		return colors1.map ((el, i) => (
		<SecondpartLiters key={i + "pintura"} {...el} {...i} />
		))
	} 	
	function getPresent() {
		return result.map ((element) => (
			element.presentaciones.map((elsn)=>( 
				elsn.litros===4? elsn.presentacion_id +':'+ ((state.cantidad4L === 0?state.cantidad4L = elsn.cantidad: state.cantidad4L += elsn.cantidad )) :elsn.presentacion_id +':'+ elsn.cantidad
			))
		))
	}
	function templateUr(){
		let url = `ec2-44-242-66-211.us-west-2.compute.amazonaws.com/finalizar-compra/?add-to-cart=${getPresent()},`
		console.log(url)
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
					<a href={templateUr()}><ButtonReed>Comprar</ButtonReed></a>
				</ContainerButton>
			</ContainerSecondSection>
		</div>
	);
};
export default SecondPart;
