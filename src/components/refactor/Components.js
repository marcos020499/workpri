import Tooltip from "../Tooltip/Tooltip";
import React, { useReducer, useState, useEffect } from "react";
import styled from "styled-components";
import { ColorsItem, InputColorTooltip } from "../FirstContent/style";
import { Icons } from "./Icons";

export const ExpandableInput = ({ onTotal }) => {
	const k = ["first", "second", "three", "four"];
	const [keys, setKeys] = useState([]);
	const [state, dispatch] = useReducer((s, a) => ({ ...s, ...a }), {});
	const [hidden, setHidden] = useState(true);

	const sumAreas = (object) => {
		const total = Object.keys(object).reduce(
			(acc, key) => acc + object[key],
			0
		);
		onTotal(total);
	};

	function notify(key, area) {
		sumAreas({ ...state, [key]: area });
		dispatch({ [key]: area });
	}

	function append() {
		if (keys.length === 4) {
			return;
		}

		if (keys.length === 0) {
			setHidden(false);
		}

		setKeys((s) => [...s, k[keys.length]]);
	}

	function pop() {
		if (keys.length === 1) {
			setHidden(true);
		}

		dispatch({ [k[keys.length - 1]]: 0 });
		setKeys((s) => s.slice(1));
	}

	return (
		<div>
			<Row>
				{hidden ? (
					<SizeInput hidden />
				) : (
					<div>
						{keys.map((key, i) => (
							<SizeInput
								key={i}
								hidden={false}
								identifier={key}
								onSubmit={notify}
							/>
						))}
					</div>
				)}

				<Col>
					<Button onClick={append}>+</Button>
					<div style={{ height: "5px" }} />
					{!hidden && <Button onClick={pop}>-</Button>}
				</Col>
			</Row>
		</div>
	);
};

export const SizeInput = ({ identifier, hidden, onSubmit }) => {
	const [val, setVal] = useState({ x: 0, y: 0 });

	const submit = (k, v) => {
		setVal((s) => ({ ...s, [k]: v }));
	};

	useEffect(() => {
		if (onSubmit) {
			onSubmit(identifier, parseInt(val.x) * parseInt(val.y));
		}
	}, [val.x, val.y]);

	return (
		<div style={hidden ? { visibility: "hidden" } : {}}>
			<Row>
				<SimpleInput
					lIcon="vertical"
					value={val.x}
					onChangeText={(e) => submit("x", e)}
				/>
				<SimpleInput
					lIcon="horizontal"
					value={val.y}
					onChangeText={(e) => submit("y", e)}
				/>
			</Row>
		</div>
	);
};

export const SimpleInput = ({ onChangeText, lIcon, value }) => {
	return (
		<SIContainer>
			{lIcon && <Icons name={lIcon} size={25} />}
			<SIInput
				type="number"
				min={0}
				value={value}
				onInput={({ target }) => onChangeText(target.value)}
			/>
			<SILabel>mts</SILabel>
		</SIContainer>
	);
};

export const TitleHead = ({ title, icon, size, end }) => {
	function Label() {
		return (
			<LabelContainer>
				{size ? <H3>Metro</H3> : <H3>‏‏‎ ‎</H3>}
				<H2>{title}</H2>
			</LabelContainer>
		);
	}
	return (
		<HeaderContainer end={end}>
			<Box>
				<Icons name={icon} size={50} />
				<Label />
			</Box>
		</HeaderContainer>
	);
};

export function FirstCol({ index, colors, selected, onSelect }) {
	function select(color) {
		onSelect(color);
	}
	return (
		<Wall>
			<Separate>
				<RadioButton type="radio" checked />
				<div style={{ width: "20px" }} />
				<H4>Pared {index}</H4>
			</Separate>

			<Tooltip
				content={
					<div>
						<small>Colores a elegir</small>
						<div>
							{colors?.map((backgroundColor, i) => (
								<ColorsItem key={i}>
									<InputColorTooltip style={{ backgroundColor }} />
								</ColorsItem>
							))}
						</div>
					</div>
				}
				direction="right"
			>
				<RadioButton type="radio" checked={false} />
			</Tooltip>
		</Wall>
	);
}

const SIContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: baseline;
`;

const SIInput = styled.input`
	border: none;
	border-bottom: 1px solid #003366;
	margin-right: 2px;
	text-align: center;
	max-width: 50px;
`;

const SILabel = styled.p`
	font-size: 0.7em;
`;

const HeaderContainer = styled.div`
	display: flex;
	flex-direction: column;
	font-family: "Radikal1";
	align-items: ${({ end }) => (end ? "flex-end" : "center")};
`;

const Box = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const LabelContainer = styled.div`
	display: block;
	line-height: 0;
`;

const RadioButton = styled.input`
	width: 1.8em;
	height: 1.8em;
`;

const Row = styled.div`
	display: flex;
	flex-direction: row;
`;

const Col = styled.div`
	display: flex;
	flex-direction: column;
`;

const Separate = styled(Row)`
	align-items: center;
`;

const Wall = styled(Row)`
	align-items: center;
	justify-content: space-between;
	min-width: 180px;
`;

const Typograph = styled.p`
	margin: none;
	padding: none;
	font-family: "RadikalBold";
	color: #003366;
`;

const H2 = styled(Typograph)`
	font-size: 1em;
`;

const H3 = styled(Typograph)`
	font-size: 0.7em;
`;

const H4 = styled(Typograph)`
	font-size: 1.2;
`;

const Button = styled.button`
	height: 1em;
	font-size: 1em;
	background-color: red;
	border-radius: 999px;
	color: white;
	border: none;
`;
