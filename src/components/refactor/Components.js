import React, { useReducer, useState, useCallback } from "react";
import styled from "styled-components";
import { Icons } from "./Icons";
import { useCalculatorField } from "./Provider";
import { Tooltip } from "./Tooltip";

const k = ["first", "second", "three", "four"];

function useForceUpdate() {
	const [value, setValue] = useState(0); // integer state
	return () => setValue((value) => value + 1); // update the state to force render
}

export const Input = ({ id, identifier }) => {
	const { putWallInfo } = useCalculatorField();
	const [x, setX] = useState(0);

	function set(value) {
		setX(value);
		putWallInfo(identifier, id, value);
	}

	return <SimpleInput value={x} onChangeText={set} />;
};

export const ExpandableInput = ({ id, identifier }) => {
	const forceUpdate = useForceUpdate();
	const { putWallInfo } = useCalculatorField();
	const [inputs, setInputs] = useReducer((s, a) => a || s, []);
	const [hidden, setHidden] = useState(true);

	/*
		inputs: { first, second}
	*/

	const sum = (arr) =>
		arr
			.map(({ first, second }) => first * second)
			.reduce((acc, el) => acc + el, 0);

	function onChange(inputKey, cell, value) {
		const old = inputs;
		const input = old[inputKey];
		input[cell] = value;
		setInputs(old);
		putWallInfo(identifier, id, sum(old));
		forceUpdate();
	}

	const append = () => {
		if (inputs.length === 4) {
			return;
		}
		//onChange((s) => s.concat([0]));
		setInputs([...inputs, { first: 0, second: 0 }]);
		setHidden(false);
	};

	const pop = () => {
		if (inputs.length === 0) {
			return;
		}
		const old = inputs.slice(0, -1);
		putWallInfo(identifier, id, sum(old));
		setInputs(old);
		if (old.length === 0) {
			setHidden(true);
		}
	};

	return (
		<div>
			<Row>
				{hidden ? (
					<SizeInput hidden />
				) : (
					<div>
						{inputs?.map((values, i) => (
							<SizeInput
								key={i}
								hidden={false}
								values={values}
								identifier={i}
								onChange={onChange}
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

export const SizeInput = ({ identifier, values, hidden, onChange }) => {
	const submit = (key, value) => {
		onChange(identifier, key, value);
	};

	return (
		<div style={hidden ? { visibility: "hidden" } : {}}>
			<Row>
				<SimpleInput
					lIcon="vertical"
					value={values?.first}
					onChangeText={(e) => submit("first", e)}
				/>
				<SimpleInput
					lIcon="horizontal"
					value={values?.second}
					onChangeText={(e) => submit("second", e)}
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
				onChange={(e) => {
					onChangeText(parseInt(e.target.value));
				}}
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

	const strEnd = end ? "true" : "false";

	return (
		<HeaderContainer end={strEnd}>
			<Box>
				<Icons name={icon} size={50} />
				<Label />
			</Box>
		</HeaderContainer>
	);
};

export function FirstCol({
	index,
	selectControl,
	onSelectControl,
	onClickColor,
	id,
	identifier,
}) {
	const { putWallInfo } = useCalculatorField();
	const [tooltip, setTooltip] = useState(false);
	const [select, setSelect] = useState();
	const [colors, setColors] = useState([
		{ color: "blue", selected: false },
		{ color: "red", selected: true },
		{ color: "green", selected: false },
	]);

	function onSelectColor(index) {
		setColors((s) => s.map((el, i) => ({ ...el, selected: i === index })));
		setTooltip(false);
		setSelect(colors[index].color);
		onClickColor(colors[index].color);
		putWallInfo(identifier, id, colors[index].color);
	}

	return (
		<Wall>
			<Separate>
				<RadioButton
					type="radio"
					checked={selectControl}
					onClick={(e) => {
						onSelectControl((s) => !s);
					}}
				/>
				<div style={{ width: "1em" }} />
				<H4>Pared {index}</H4>
			</Separate>

			<Tooltip
				colors={colors}
				onSelect={onSelectColor}
				visible={tooltip}
				onClose={() => setTooltip(false)}
			>
				<RadioButton
					color={select}
					type="button"
					checked={!!select}
					onClick={(e) => {
						setTooltip((s) => !s);
					}}
				/>
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
	max-width: 30px;
`;

const SILabel = styled.p`
	font-size: 0.7em;
`;

const HeaderContainer = styled.div`
font-size: 0.8em;
	display: flex;
	flex-direction: column;
	font-family: "Radikal1";
	align-items: ${({ end }) => (end === "true" ? "flex-end" : "center")};
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
	width: 1.5em;
	height: 1.5em;
	background-color: ${({ color }) => `${color ? color : "transparent"}`};
	border-radius: 999px;
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
	min-width: 150px;
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
	font-size: 1.3;
	font-family: "Radikal1"
`;

const Button = styled.button`
border-radius: 100%;
border: none;
background: #b70033;
color: white;
padding: 0;
font-size: 1.2vh;
width: 1.3vh;
`;
