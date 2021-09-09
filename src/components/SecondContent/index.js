import React, { useEffect, useState, memo } from "react";
import useItems from "../Hooks/Hooks";
import useAlgorim from "../Hooks/Algoritm";
import useInput from "../Hooks/Inputs";

import TooltipOver from "../Tooltip/TooltipOver";
import {
	ContainerSecondSection,
	InputArea,
	H1,
	H2,
	Description,
	Quantity,
	Input,
	PaintSize,
	Size,
	ButtonReed,
	ContainerButton,
	Banner,
	ImagePaint,
	ImageQuantity,
	Recipients,
	H,
	InputAreaLiters,
	ImageQuantity19L,
	ImageQuantity4L,
	ContainerItems,
	InputColorName,
	DescriptionText,
	Items,
	TrDes,
	TdSize,
	ThDescription,
} from "./style";
import { useCalculatorField } from "../refactor/Provider";
const SecondPart = ({ area, handleInput }) => {
	//const { total } = useCalculatorField();
	const total = 0;
	const { item, imper, liters } = useItems();
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
				<PaintSize style={{ display: false ? "inline-block" : "initial" }}>
					<Items>
						{item.map(
							(item, index) =>
								index <= 2 && (
									<ContainerItems key={index}>
										<tr>
											<ThDescription>
												<TooltipOver content={item.nombre} direction="top">
													<DescriptionText>
														<InputColorName
															style={{ backgroundColor: "blue" }}
														/>
														color azul
													</DescriptionText>
												</TooltipOver>
											</ThDescription>
										</tr>
										<TrDes>
											<ThDescription>
												<Description>Area</Description>
												<InputArea type="text" value={0} readonly="readonly" />
											</ThDescription>

											<ThDescription>
												<Description>Litros</Description>
												<InputAreaLiters
													type="text"
													value={area + " " + "lts"}
													readonly="readonly"
												/>
											</ThDescription>
										</TrDes>

										<Recipients>
											<TdSize>
												<Size>
													<ImageQuantity19L
														src={
															"https://res.cloudinary.com/marcos020499/image/upload/v1629305104/BOTES_PINTURA-01_dae6zr.svg"
														}
													/>
													<Quantity>19L</Quantity>
													<Input type="text" value={0} onChange={handleInput} />
												</Size>
											</TdSize>

											<TdSize>
												<Size>
													<ImageQuantity4L
														src={
															"https://res.cloudinary.com/marcos020499/image/upload/v1629305104/BOTES_PINTURA-02_wvzqnb.svg"
														}
													/>
													<Quantity>4L</Quantity>
													<Input type="text" value={0} onChange={handleInput} />
												</Size>
											</TdSize>

											<TdSize>
												<Size>
													<ImageQuantity
														src={
															"https://res.cloudinary.com/marcos020499/image/upload/v1629305104/BOTES_PINTURA-02_wvzqnb.svg"
														}
													/>
													<Quantity>1L</Quantity>
													<Input type="text" value={0} onChange={handleInput} />
												</Size>
											</TdSize>
										</Recipients>
									</ContainerItems>
								)
						)}
					</Items>
				</PaintSize>
				<ContainerButton>
					<h1> </h1>
					<ButtonReed>Comprar</ButtonReed>
				</ContainerButton>
			</ContainerSecondSection>
		</div>
	);
};
export default SecondPart;
