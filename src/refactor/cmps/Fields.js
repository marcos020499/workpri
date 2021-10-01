import React, { useMemo, useState, useReducer, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
	ColorsItem,
	InputDiv,
	InputItem,
	Title,
	Final,
	ButtonRed,
	Warning,
	Button,
} from "../../components/FirstContent/style";

import {
	TitleHead,
	FirstCol,
	ExpandableInput,
	SimpleInputOwnState,
} from "../../components/refactor/Components";

export function Fields({
	wall1,
	wall2,
	wall3,
	wall4,
	wall5,
	onSubmit,
	onClear,
	update,
}) {
	const {
		colors1,
		colors: { colores },
	} = useSelector((state) => state);

	const linea_producto = colors1;
	const colors = colores || [];
	return (
		<Container>
			<Title>COLORES SELECCIONADOS</Title>
			<InputDiv>
				<div>
					{colors.map((el, i) => (
						<ColorsItem key={i + "colores"}>
							<InputItem
								disabled="disabled"
								style={{
									backgroundColor: el.rgb,
								}}
							/>
						</ColorsItem>
					))}
				</div>
				<Button
					onClick={() => {
						window.location.reload();
					}}
				>
					Borrar todo
				</Button>
			</InputDiv>
			<Conta>
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
							{!!linea_producto?.impermeabilizante === false ? (
								<TitleHead title="Puertas" icon="door" />
							) : (
								<TitleHead title="Domo" icon="domo" />
							)}
						</TH>
						<TH>
							{!!linea_producto?.impermeabilizante === false ? (
								<TitleHead title="Ventanas" icon="window" />
							) : (
								<TitleHead title="Tragaluz" icon="tragaluz" />
							)}
						</TH>
					</THead>
					<div>
						<Wall index={1} wall={wall1} update={update} />
						<Wall index={2} wall={wall2} update={update} />
						<Wall index={3} wall={wall3} update={update} />
						<Wall index={4} wall={wall4} update={update} />
						<Wall index={5} wall={wall5} update={update} />
					</div>
				</TableHorizontal>
			</Conta>
			<Final>
				<Warning>*Tienes que llenar todos los campos</Warning>
				<ButtonRed onClick={onSubmit}>Calcular</ButtonRed>
			</Final>
		</Container>
	);
}

const getColorByHex = (array, c) => {
	return array.find(({ rgb }) => {
		return rgb === c;
	});
};

function Wall({ index, wall, update }) {
	const stateColors = useSelector((state) => state.colors);
	const colors = stateColors.colores || [];

	const [select, setSelect] = useState(false);

	const onColor = (value) => {
		const _color = getColorByHex(colors, value);
		if (_color) {
			update(index - 1, "color_id", _color.id);
		}
	};

	const onEdit = (identifier, value) => {
		update(index - 1, identifier, value);
	};

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
						onSubmit={onColor}
					/>
				</TD>
				<TD key="second">
					<Content>
						<SimpleInputOwnState
							id="largo"
							onSubmit={onEdit}
							defaultValue={3}
						/>
					</Content>
				</TD>
				<TD key="three">
					<Content>
						<SimpleInputOwnState
							id="ancho"
							onSubmit={onEdit}
							defaultValue={2.5}
						/>
					</Content>
				</TD>
				<TD key="four">
					<Content>
						<ExpandableInput id="puertas" onSubmit={onEdit} />
					</Content>
				</TD>
				<TD key="five" end>
					<Content>
						<ExpandableInput id="ventanas" onSubmit={onEdit} />
					</Content>
				</TD>
			</TBody>
		),
		[select]
	);
}

const Conta = styled.div`
	max-width: 768;
	overflow-x: auto;
	overflow-y: auto;
	@media screen and (max-width: 768px) {
		margin: 5vw 0 0 0;
	}
`;
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
	margin: auto;
`;
const THead = styled(TChild)`
	min-width: 1024px;
`;
const TBody = styled(TChild)`
	min-width: 1024px;
	max-width: 1600px;
	min-heigth: 1067px;
	max-heigth: 1067px;
`;
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
