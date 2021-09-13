import React, { useEffect, useState, memo } from "react";
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
} from "./style";
import { useSelector } from "react-redux";

const SecondPart = () => {
	//const { total } = useCalculatorField();
	const { result, colors } = useSelector((state) => state);
	const { linea_producto } = colors;
	const stateColors = useSelector((state) => state.colors);
	const colors1 = stateColors.colores || [];

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
	return (
		<div>
			{linea_producto && <Banner src={linea_producto.url_imagen_inspiracion} />}

			<ContainerSecondSection>
				<H1>RESULTADO</H1>
				<H2>PRISA TE RECOMIENDA</H2>
				{linea_producto && <ImagePaint src={linea_producto.url_imagen} />}
				<H>Elige la presentación </H>
				<div style={{ display: "flex" }}>
					{result.length === 0 ? getColors(): getResult()
				}
				</div>
				<ContainerButton>
					<h1> </h1>
					<ButtonReed>Comprar</ButtonReed>
				</ContainerButton>
			</ContainerSecondSection>
		</div>
	);
};
export default SecondPart;
