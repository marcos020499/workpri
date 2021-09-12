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
	const result = useSelector((state) => state.result);

	return (
		<div>
			<Banner
				src={
					"https://res.cloudinary.com/marcos020499/image/upload/v1629305103/BANNER_SUPERIOR-01-01_qc1rs2.png"
				}
			/>
			<ContainerSecondSection>
				<H1>RESULTADO</H1>
				<H2>PRISA TE RECOMIENDA</H2>
				<ImagePaint
					src={
						false
							? "https://res.cloudinary.com/marcos020499/image/upload/v1629305104/BANNER_SUPERIOR-02_okd6me.png"
							: "https://res.cloudinary.com/marcos020499/image/upload/v1629305104/BANNER_SUPERIOR-01_tlx0kg.png"
					}
				/>
				<H>Elige la presentación </H>
				<div style={{ display: "flex" }}>
					{result.map((el, i) => (
						<SecondpartLiters key={i + "pintura"} {...el} />
					))}
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
