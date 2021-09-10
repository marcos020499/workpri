import React, { useMemo, useEffect, useState, useReducer } from "react";
import styled from "styled-components";
import {
	TitleHead,
	FirstCol,
	ExpandableInput,
	SimpleInputOwnState,
} from "./Components";
import {
	ButtonRed,
	Button,
	InputItem,
	ColorsItem,
	Warning,
	Title,
	InputDiv,
	Final,
} from "../FirstContent/style";
import { useDispatch, useSelector } from "react-redux";
export function FieldsInput() {
	const dispatch = useDispatch();
	const { colors } = useSelector((state) => state);
	const [walles] = useState(["wall1", "wall2", "wall3", "wall4", "wall5"]);

	function submitInfoToCalculator() {
		dispatch();
	}

	return useMemo(
		() => (
			<Container>
				<Title>COLORES SELECCIONADOS</Title>
				<InputDiv>
					<div>
						{colors.map((el, i) => (
							<ColorsItem key={i + "colores"}>
								<InputItem style={{ backgroundColor: el.rgb }} />
							</ColorsItem>
						))}
					</div>
					<Button onClick={() => {}}>Borrar todo</Button>
				</InputDiv>
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
						<Wall key={index + "top"} index={index + 1} identifier={el} />
					))}
					<Final>
						<Warning>*Tienes que llenar todos los campos</Warning>
						<ButtonRed onClick={() => {}}>Calcular</ButtonRed>
					</Final>
				</TableHorizontal>
			</Container>
		),
		[colors]
	);
}

function Wall({ index, identifier }) {
	const [color, setColor] = useState(null);
	const [select, setSelect] = useState(false);
	const initialState = {
		alto: 1,
		ancho: 1,
		puertas: [],
		ventanas: [],
	};
	const [inf, dispatch] = useReducer((s, a) => ({ ...s, ...a }), initialState);

	useEffect(() => {
		if (!select) {
			setColor(null);
		}
	}, [select, color]);

	function onEdit(identifier, value) {
		dispatch({ [identifier]: value });
	}

	const Content = ({ children }) => {
		return <Hidding hidden={!select}>{children}</Hidding>;
	};

	return useMemo(
		() => (
			<TBody key="table">
				<TD key="first">
					<FirstCol
						index={index}
						selectControl={select}
						onSelectControl={setSelect}
						id="color"
						identifier={identifier}
						onSubmit={setColor}
					/>
				</TD>
				<TD key="second">
					<Content>
						<SimpleInputOwnState id="alto" onSubmit={onEdit} />
					</Content>
				</TD>
				<TD key="three">
					<Content>
						<SimpleInputOwnState id="ancho" onSubmit={onEdit}/>
					</Content>
				</TD>
				<TD key="four">
					<Content>
						<ExpandableInput
							id="puertas"
							identifier={identifier}
							onSubmit={onEdit}
						/>
					</Content>
				</TD>
				<TD key="five" end>
					<Content>
						<ExpandableInput
							id="ventanas"
							identifier={identifier}
							onSubmit={onEdit}
						/>
					</Content>
				</TD>
			</TBody>
		),
		[select]
	);
}
const Container = styled.div`
	max-width: 768;
	@media screen and (max-width: 768px) {
		margin: 5vw 0 0 0;
	}
`;
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
	margin: 0;
	${({ end }) => (!end ? `border-right: 1px solid #003366;` : ``)}
`;

const Hidding = styled.div`
	display: flex;
	flex: 1;
	visibility: ${({ hidden }) => `${hidden ? "hidden" : "visible"}`};
`;

const TH = styled.th`
	padding: 0px 1vw;
	@media screen and (max-width: 1367px) {
		padding: 0px 0.7vw;
	}
	@media screen and (max-width: 1200px) {
		padding: 0px 1.5vw;
	}
	@media screen and (max-width: 768px) {
		padding: 0 0.2vw;
	}
`;
