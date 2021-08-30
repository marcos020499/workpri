import React, { useMemo, useEffect, useState } from "react";
import styled from "styled-components";
import { TitleHead, FirstCol, ExpandableInput, Input } from "./Components";
import { useCalculatorField } from "./Provider";
import {
	ContainerHeader,
	H2,
	Td,
	WallText,
	InputNumber,
	ButtonRed,
	InputColor,
	Icon,
	Image,
	Button,
	ButtonIncrement,
	ButtonDecrement,
	Buttons,
	Selectors,
	Table,
	A,
	InputItem,
	ColorsItem,
	Mts,
	Warning,
	Title,
	Radior,
	ButtonDiv,
	InputDiv,
	IconColor,
	ImageTable,
	Smallm,
	ImageM,
	Final,
	Meters,
	InputColorTooltip,
	PaintContainer,
	TdFirst,
	Options,
	IconMeter,
	ImageColor,
	H2Color,
	H2Puertas,
	Mtss,
	WallContainer,
  } from "../FirstContent/style";
export function FieldsInput() {
	const { calculateTotal, clearAll } = useCalculatorField();
	const [walles] = useState(["wall1", "wall2", "wall3", "wall4"]);

	return useMemo(
		() => (
			<Container>
				<Title>COLORES SELECCIONADOS</Title>
      <InputDiv>
        <div>
                <ColorsItem>
                  <InputItem style={{ backgroundColor: 'blue' }} />
                </ColorsItem>
        </div>
        <Button onClick={clearAll}>Borrar todo</Button>
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
				</TableHorizontal>
				<Final>
        <Warning>*Tienes que llenar todos los campos</Warning>
        <ButtonRed onClick={calculateTotal}>Calcular</ButtonRed>
      </Final>
			</Container>
		),
		[]
	);
}

function Wall({ index, identifier }) {
	const { clearWall, colors } = useCalculatorField();
	const [select, setSelect] = useState(false);

	useEffect(() => {
		if (!select) {
			clearWall(identifier);
		}

		if (!colors.length) {
			setSelect(false);
		}
	}, [select, colors]);

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
					/>
				</TD>
				<TD key="second">
					<Content>
						<Input id="height" identifier={identifier} />
					</Content>
				</TD>
				<TD key="three">
					<Content>
						<Input id="width" identifier={identifier} />
					</Content>
				</TD>
				<TD key="four">
					<Content>
						<ExpandableInput id="door" identifier={identifier} />
					</Content>
				</TD>
				<TD key="five" end>
					<Content>
						<ExpandableInput id="window" identifier={identifier} />
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
const TBody = styled(TChild)`
`;
const TD = styled.td`
	padding: 0px 10px 35px 0;
	${({ end }) => (!end ? `border-right: 1px solid #003366;` : ``)}
`;

const Hidding = styled.div`
	display: flex;
	flex: 1;
	visibility: ${({ hidden }) => `${hidden ? "hidden" : "visible"}`};
`;

const TH = styled.th`
	padding: 0px 10px;
`;


