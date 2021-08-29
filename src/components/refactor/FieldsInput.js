import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
	SimpleInput,
	TitleHead,
	FirstCol,
	ExpandableInput,
} from "./Components";
import { useCalculatorField } from "./Provider";

export function FieldsInput() {
	const [walles] = useState(["wall1", "wall2", "wall3", "wall4"]);

	return (
		<div>
			<TableHorizontal>
				<THead>
					<TH>
						<TitleHead title="Colores" icon="colors" end />
					</TH>
					<TH>
						<TitleHead title="Largo" icon="vertical" size />
					</TH>
					<TH>
						<TitleHead title="Ancho" icon="horizontal" size />
					</TH>
					<TH>
						<TitleHead title="Puertas" icon="door" />
					</TH>
					<TH>
						<TitleHead title="Ventanas" icon="window" />
					</TH>
				</THead>
				{walles.map((el, index) => (
					<Wall key={index} index={index + 1} identifier={el} />
				))}
			</TableHorizontal>
		</div>
	);
}

function Wall({ index, identifier }) {
	const { append } = useCalculatorField();
	const [door, setDoor] = useState(0);
	const [window, setWindow] = useState(0);
	const [wallX, setWallX] = useState(0);
	const [wallY, setWallY] = useState(0);

	useEffect(() => {
		console.log(wallX, wallY, door, window);
		append(identifier, "wall", wallX * wallY);
		append(identifier, "door", door);
		append(identifier, "window", window);
	}, [wallX, wallY, door, window]);

	return (
		<TBody>
			<TD>
				<FirstCol index={index} />
			</TD>
			<TD>
				<SimpleInput value={wallY} onChangeText={setWallY} />
			</TD>
			<TD>
				<SimpleInput value={wallX} onChangeText={setWallX} />
			</TD>
			<TD>
				<ExpandableInput onTotal={setDoor} />
			</TD>
			<TD end>
				<ExpandableInput onTotal={setWindow} />
			</TD>
		</TBody>
	);
}

const TChild = styled.tr`
	margin: 0;
	padding: 0;
`;

const TableHorizontal = styled(TChild)`
	text-align: center;
	justify-content: center;
`;
const THead = styled(TChild)``;
const TBody = styled(TChild)``;
const TD = styled.td`
	padding: 0px 10px;
	${({ end }) => (!end ? `border-right: 1px solid #003366;` : ``)}
`;

const TH = styled.th`
	padding: 0px 10px;
`;
