import React from "react";

import TooltipOver from "../Tooltip/TooltipOver";
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
	ImageQuantity19L,
	ImageQuantity4L,
	ContainerItems,
	InputColorName,
	DescriptionText,
	Items,
	TdSize,
	ThDescription,
	Table,
} from "./style";

const Liters = ({ color_id, nombre, rgb, area, litros, presentaciones }) => {
	return (
		<Table>
			<Items>
				<ContainerItems>
					<Row>
						<ThDescription>
							<TooltipOver content={""} direction="top">
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

					<RowRecipients>
						{presentaciones.map((el, i) =>
							el.cantidad ? <Can {...el} /> : null
						)}
					</RowRecipients>
				</ContainerItems>
			</Items>
		</Table>
	);
};
export default Liters;

function Can({ presentacion_id, litros, cantidad }) {
	const name = {
		_1: "1L",
		_4: "4L",
		_19: "19L",
	}["_" + litros];

	return (
		<TdSize>
			<Size>
				<ImageQuantity
					src={
						"https://res.cloudinary.com/marcos020499/image/upload/v1629305104/BOTES_PINTURA-02_wvzqnb.svg"
					}
					size={litros}
				/>
				<Quantity>{name}</Quantity>
				<Input type="text" defaultValue="0" value={cantidad} />
			</Size>
		</TdSize>
	);
}
