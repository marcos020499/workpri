import React, {useState, useReducer} from "react";
import { useSelector } from "react-redux";
import TooltipOver from "../Tooltip/TooltipOver";
import useInput from '../Hooks//Inputs'

import {
	InputArea,
	Description,
	Quantity,
	Input,
	Size,
	ImageQuantity,
	Row,
	RowDes,
	RowRecipients,
	InputAreaLiters,
	ContainerItems,
	InputColorName,
	DescriptionText,
	Items,
	TdSize,
	ThDescription,
	Table,
	ContainerButton,
	ButtonReed
} from "./style";


const Liters = ({ color_id, nombre, rgb, area, litros, presentaciones }) => {
	const stateColors = useSelector((state) => state.colors);
	const colors1 = stateColors.colores || [];
	const { result } = useSelector((state) => state);
	
	
	return (
		<div>
		<Table style={{margin: colors1.length === 2 || result.length === 2 ? '0 0 0 12%': 'auto' }}>
			
			<Items>
				<ContainerItems>
					<Row>
						<ThDescription>
							<TooltipOver content={nombre} direction="top">
								<DescriptionText>
									<InputColorName style={{ backgroundColor: rgb }} />
									{nombre}
								</DescriptionText>
							</TooltipOver>
						</ThDescription>
					</Row>
					<RowDes>
					
						<ThDescription>
							<Description>Area</Description>
							<InputArea type="text" value={area} readonly="readonly" />
						</ThDescription>

						<ThDescription>
							<Description>Litros</Description>
							<InputAreaLiters type="text" value={litros} readonly="readonly" />
						</ThDescription>
					</RowDes>
					<RowRecipients >
						{presentaciones.map((ele, index) =>
							 index <= ele.presentacion_id ? <Can {...ele} />: null
							 )}
					</RowRecipients>
				</ContainerItems>
			</Items>
		</Table>
	</div>
	);
};
export default Liters;


function Can({ presentacion_id, litros, cantidad }) {
	const {state, handleInput} = useInput()
	const name = {
		_1: "1L",
		_4: "4L",
		_19: "19L",
	}["_" + litros];

	return (
		<TdSize >
			<Size>
				<ImageQuantity
					src={
						litros === 19 ?
						'https://res.cloudinary.com/marcos020499/image/upload/v1629305104/BOTES_PINTURA-01_dae6zr.svg'
						:
						"https://res.cloudinary.com/marcos020499/image/upload/v1629305104/BOTES_PINTURA-02_wvzqnb.svg"
					}
					size={litros}
					style={{ position: 'relative', left: '-10%' }}
				/>
				<Quantity>{name}</Quantity>
				<Input type="number" defaultValue="0" step="1" value={ litros === 4?state.cantidad4L === 0 ? cantidad: state.cantidad4L: cantidad } name={litros===19?'cantidad19L':litros===4?'cantidad4L':litros===1?'cantidad1L':''} onChange={handleInput}/>
			</Size>
		</TdSize>
	);
}
