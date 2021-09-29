/* eslint-disable react-hooks/exhaustive-deps */
import React, {
	useMemo,
	useEffect,
	useState,
	useReducer,
} from "react";
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
import { appendWallAction, removeWallAction } from "../../store/infoReducer";
import {
	endCalculatorAction,
	initCalculatorAction,
} from "../../store/gestionReducer";

const walles = ["wall1", "wall2", "wall3", "wall4", "wall5"];
const wallesFalse = ["wall1"];
export function FieldsInput() {
	const {colors1}  = useSelector((state) => state);
  	const linea_producto  = colors1;
	const dispatch = useDispatch();
	const stateColors = useSelector((state) => state.colors);
	const colors = stateColors.colores || [];

	const submitInf = () => dispatch(initCalculatorAction());

	return useMemo(
		() => (
			<Container>
				<Title>COLORES SELECCIONADOS</Title>
				<InputDiv>
					<div>
						{colors.map((el, i) => (
							<ColorsItem key={i + "colores"}>
								<InputItem disabled="disabled" style={{ backgroundColor: el.rgb, boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px' }} />
							</ColorsItem>
						))}
					</div>
					
					<Button onClick={() => {window.location.reload()}}>Borrar todo</Button>
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
								{!!linea_producto?.impermeabilizante === false?(
								<TitleHead title="Puertas" icon="door" />
								):(
								<TitleHead title="Domo" icon="domo" />
								)}
							</TH>
							<TH>
								{!!linea_producto?.impermeabilizante === false?(
								<TitleHead title="Ventanas" icon="window" />
								):(
								<TitleHead title="Tragaluz" icon="tragaluz" />
								)}
							</TH>
						</THead>
						{!!linea_producto?.impermeabilizante === false?(
							walles.map((el, index) => (
							<Wall key={index + "top"} index={index + 1} identifier={el} length={colors}/>
							))
							):(
							wallesFalse.map((el, index) => (
							<Wall key={index + "top"} index={index + 1} identifier={el}/>
							))
						)}
					</TableHorizontal>
				</Conta>
				<Final>
						<Warning>*Tienes que llenar todos los campos</Warning>
						<ButtonRed onClick={submitInf}>Calcular</ButtonRed>
					</Final>
			</Container>
		),
		[colors]
	);
}

function Wall({ index, identifier, }) {
	const { isReadyToCompute, finishRecopilation } = useSelector(
		(state) => state.gestion
	);
	const stateColors = useSelector((state) => state.colors);
	const colors = stateColors.colores || [];

	const getColorByHex = (array, c) => {
		return array.find(({ rgb }) => {
			console.log("compare ", rgb, c);
			return rgb === c;
		});
	};
	const storeDistpach = useDispatch();
	const [color, setColor] = useState(null);
	const [select, setSelect] = useState( 
		colors.length === 2 && index===2?!null:null
	  );
	const initialState = {
		edit: false,
		id: index + identifier,
		color_id: null,
		nombre: null,
		largo: 0,
		ancho: 0,
		puertas: [],
		ventanas: [],
	};
	const [inf, dispatch] = useReducer((s, a) => ({ ...s, ...a }), initialState);

	useEffect(() => {
		/*
			case
			-- select/deselect [reset] -> remove
			-- append
			-- submit

			-- press calculate
		*/
    
		//select/deselect

		if (!select) {
			// deselect
			setColor(null);
			if (inf.edit) {
				console.log("calculator remove");
				storeDistpach(removeWallAction(inf.id));
			}
			dispatch(initialState);
		}
		// append
		if (select && color && inf.edit) {
			dispatch({ edit: false });
			storeDistpach(appendWallAction(inf));
		}
		// onCalculate
		if (index === walles.length && !finishRecopilation) {
			storeDistpach(endCalculatorAction());
		}
	}, [select, color, isReadyToCompute, finishRecopilation]);

	function onColor(value) {
		const _color = getColorByHex(colors, value);
		if (_color) {
			setColor(value);
			dispatch({ color_id: _color.id, nombre: _color.nombre, edit: true });
		}
	}

	function onEdit(identifier, value) {
		dispatch({ [identifier]: value, edit: true });
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
