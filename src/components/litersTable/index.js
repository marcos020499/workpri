import React, { useEffect, useState, memo } from "react";
import useItems from "../Hooks/Hooks";
import TooltipOver from "../Tooltip/TooltipOver";
import {
	InputArea,
	Description,
	Quantity,
	Input,
	PaintSize,
	Size,
	ButtonReed,
	ContainerButton,
	ImageQuantity,
	Recipients,
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
const SecondPartLiters = ({ area, handleInput }) => {
	const { item } = useItems();
	return (
		<div>
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
													<Input type="text" defaultValue='0' onChange={handleInput} />
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
													<Input type="text" defaultValue='0' onChange={handleInput} />
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
													<Input type="text" defaultValue='0' onChange={handleInput} />
												</Size>
											</TdSize>
										</Recipients>
									</ContainerItems>
								)
						)}
					</Items>
					<ContainerButton>
					<h1> </h1>
					<ButtonReed>Comprar</ButtonReed>
				</ContainerButton>
				</PaintSize>
		</div>
	);
};
export default SecondPartLiters;
