import React, { useState } from "react";
import styled from "styled-components";
import {
	SimpleInput,
	SizeInput,
	TitleHead,
	FirstCol,
	ExpandableInput,
} from "./Components";

export function FieldsInput() {
	const [walles] = useState(new Array(4).fill(0));
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
					<Wall key={index} index={index + 1} />
				))}
			</TableHorizontal>
		</div>
	);
}

function Wall({ index }) {
	return (
		<TBody>
			<TD>
				<FirstCol index={index} />
			</TD>
			<TD>
				<SimpleInput />
			</TD>
			<TD>
				<SimpleInput />
			</TD>
			<TD>
				<ExpandableInput />
			</TD>
			<TD end>
				<ExpandableInput />
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
