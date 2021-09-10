import React, { useEffect, useState, memo } from "react";
import SecondpartLiters from '../litersTable/index'
import {
	ContainerSecondSection,
	H1,
	H2,
	Banner,
	ImagePaint,
	H,
} from "./style";
const SecondPart = () => {
	//const { total } = useCalculatorField();
	const [items] = useState([1]);
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
				<SecondpartLiters/>
			</ContainerSecondSection>
		</div>
	);
};
export default SecondPart;
