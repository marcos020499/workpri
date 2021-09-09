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
export const Input1 = ({ id, identifier }) => {
	const { putWallInfo } = useCalculatorField();
	const [x, setX] = useState(0);

	function set(value) {
		setX(value);
		putWallInfo(identifier, id, value);
	}

	return <SimpleInput1 value={x} onChangeText={set} />;
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
								val = {inputs.length}
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

export const SizeInput = ({ identifier, values, hidden, onChange, val }) => {
	const submit = (key, value) => {
		onChange(identifier, key, value);
	};

	return (
		<div style={hidden ? { visibility: "hidden" } : {}}>
			<RowSimple>
				<SimpleInput
					lIcon='vertical'
					value={values?.first}
					onChangeText={(e) => submit("first", e)}
				/>
				<SimpleInput
					lIcon="horizontal"
					value={values?.second}
					onChangeText={(e) => submit("second", e)}
				/>
			</RowSimple>
		</div>
	);
};

export const SimpleInput = ({ onChangeText, lIcon, value }) => {
	return (
		<SIContainer>
			{lIcon && <Icons name={lIcon} size={20} />}
			<SIInput
				type="number"
				onChange={(e) => {
					onChangeText(parseInt(e.target.value));
				}}
				min="1"
                        max="10"
                        step="0.5"
                        defaultValue='3'
			/>
			<SILabel>mts</SILabel>
		</SIContainer>
	);
};
export const SimpleInput1 = ({ onChangeText, lIcon, value }) => {
	return (
		<SIContainer>
			{lIcon && <Icons name={lIcon} size={20} />}
			<SIInput
				type="number"
				onChange={(e) => {
					onChangeText(parseInt(e.target.value));
				}}
				min="1"
                        max="10"
                        step="0.5"
                        defaultValue='2'
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
				<RadioButtonFirst
					type="radio"
					checked={selectControl}
					onClick={(e) => {
						onSelectControl((s) => !s);
					}}
				/>
				<div style={{ width: "1em" }} />
				<H4>{index < 5? `${'Pared'+index}`: 'Techo'}</H4>
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
	padding: 0.5vw 0 0 1vw;
	@media screen and (max-width: 1367px) {
		padding: 0 0 0 0.5vw;
	  }
	  @media screen and (max-width: 1200px) {
		padding: 0 0 0 3vw;
	}
	@media screen and (max-width: 768px) {
		padding: 0 0 0 2vw;
		justify-content: space-between;
	}
	@media screen and (max-width: 600px) {
		padding: 0 0 0 1vw;
	}
	@media screen and (max-width: 400px) {
		padding: 0.1vw 0 0 1vw;
	}
	@media screen and (max-width: 350px) {
		padding: 0vw -2vw 0 0vw;
	}
`;

const SIInput = styled.input`
	border: none;
	border-bottom: 1px solid #003366;
	max-width: 1.8vw;
	max-height: 1.8vw;
	font-size: 13px;
	text-align: end;
	@media screen and (max-width: 1367px) {
		max-width: 1.8vw;
		max-height: 1.8vw;
	  }
	  @media screen and (max-width: 1200px) {
	max-width: 3vw;
	max-height: 3vw;
	}
	@media screen and (max-width: 768px) {
		max-width: 4vw;
		font-size: 13px;
	}
	@media screen and (max-width: 600px) {
		max-width: 4vw;
		margin: 0 -4vw 0 0;
	}
	@media screen and (max-width: 400px) {
		max-width: 4vw;
		padding: 0vw -7vw 0 0;
	}
	@media screen and (max-width: 350px) {
		max-width: 4vw;
		padding: 0vw -10vw 0 0;
	}
	
`;
const SILabel = styled.p`
	font-size: 0.5em;
	color:  #003366;
	font-family: "Radikal1";
	@media screen and (max-width: 600px) {
		position: relative;
		top: 12px;
		left: 17px;
	}
	@media screen and (max-width: 400px) {
		top: 0;
		left: 30px;
	}
	@media screen and (max-width: 350px) {
		top: 0;
		left: 20px;
	}
`;

const HeaderContainer = styled.div`
font-size: 0.8em;
	display: flex;
	flex-direction: column;
	font-family: "Radikal1";
	align-items: ${({ end }) => (end === "true" ? "flex-end" : "center")};
	@media screen and (max-width: 768px) {
		padding: 0 0 3vw 0;
	}
	@media screen and (max-width: 600px) {
		padding: 0 0 5vw 0;
	}
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
	@media screen and (max-width: 768px) {
		position: relative;
		left: -60px;
		top: 5vw;
	}
`;
const RadioButtonFirst = styled.input`
	width: 1.5em;
	height: 1.5em;
	background-color: ${({ color }) => `${color ? color : "transparent"}`};
	border-radius: 999px;

`;
const Row = styled.div`
	display: flex;
	flex-direction: row;
	position: relative;
	left: -5px;
	@media screen and (max-width: 768px) {
		margin: 0;
	}
	@media screen and (max-width: 600px) {
		margin: 0;
	}
	@media screen and (max-width: 400px) {
		display: flex;
		flex-direction: row;
	}
`;
const RowSimple = styled.div`
	display: flex;
	flex-direction: row;
	position: relative;
	left: -5px;
	max-height: 5vw;
	margin: -0.9vw 0 0 0;
	@media screen and (max-width: 768px) {
		margin: -0.6vw 0vw 0 -1vw;
	}
	@media screen and (max-width: 600px) {
		margin: -0.4vw 3vw 0 1vw;
	}
	@media screen and (max-width: 400px) {
		display: flex;
		flex-direction: column;
		margin: 2vw 8vw 9vw 4vw;
	}
	@media screen and (max-width: 350px) {
		
	}
	@media screen and (max-width: 600px) and (orientation: landscape){
		padding: 0vw 5vw 0vw 5vw;
	}
`;

const Col = styled.div`
	display: flex;
	flex-direction: column;
	@media screen and (max-width: 768px) {
		flex-direction: row;
		position: absolute;
	}
`;

const Separate = styled(Row)`
	align-items: center;
`;

const Wall = styled(Row)`
	align-items: center;
	justify-content: space-between;
	min-width: 140px;
	margin: 0 0 0 3vw;
	padding: 0px 10px 3.5vw 0;
	@media screen and (max-width: 1367px) {
		margin: 0 0 0 2vw;
	  }
	  @media screen and (max-width: 1200px) {
		margin: 0 2vw 2vw 7vw;
	}
	@media screen and (max-width: 1024px) {
		margin: 0 3vw 2.8vw 6vw;
	}
	@media screen and (max-width: 768px) {
		margin: 0 4vw 55px 3vw;
	}
	@media screen and (max-width: 600px) {
		margin: 0 4vw 60px 3vw;
		max-width: 55px;
		min-width: 55px;
	}
	@media screen and (max-width: 400px) {
		margin: 0 4vw 48vw 3vw;
		max-width: 45px;
		min-width: 45px;
	}
	@media screen and (max-width: 350px) {
		margin: 0 4vw 48vw 4vw;
		max-width: 40px;
		min-width: 40px;
	}
	@media screen and (max-width: 600px) and (orientation: landscape){
		margin: 0 8vw 18vw 4vw;
		max-width: 40px;
		min-width: 40px;
	}
`;

const Typograph = styled.p`
	margin: none;
	padding: none;
	font-family: "RadikalBold";
	color: #003366;
`;

const H2 = styled(Typograph)`
	font-size: 1em;

	@media screen and (orientation: landscape){
		font-size: 15px;
	}
`;

const H3 = styled(Typograph)`
	font-size: 0.7em;
	@media screen and (max-width: 600px) {
		font-size: 8px;
		}
`;

const H4 = styled(Typograph)`
	font-size: 1.3;
	font-family: "Radikal1";
	position: relative;
	letter-spacing: 2px;
	left: -10px;
	@media screen and (max-width: 768px) {
		font-size: 13px;
	}
	@media screen and (max-width: 600px) {
		font-size: 13px;
	}
	@media screen and (max-width: 600px) {
		font-size: 12px;
	}
	
`;

const Button = styled.button`
border-radius: 100%;
border: none;
background: #b70033;
color: white;
padding: 0;
font-size: 1.2vh;
width: 1.3vh;
@media screen and (max-width: 768px) {
	position: relative;
	font-size: 10px;
	left: 40px;
	top: -30px;
	height: 2vh;
	width: 2vh;
	margin: 2vw;
}
@media screen and (max-width: 600px) {
	position: relative;
	left: 5px;
	top: -40px;
	height: 2vh;
	width: 2vh;
	margin: 2vw;
}
@media screen and (max-width: 400px) {
	position: relative;
	left: 13px;
	top: -20px;
	height: 2vh;
	width: 2vh;
	margin: 1.5vw;
}
@media screen and (max-width: 600px) and (orientation: landscape){
	width: 15px;
	height:15px;
}
`;
