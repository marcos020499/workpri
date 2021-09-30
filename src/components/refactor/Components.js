import { Radio } from "@mui/material";
import React, { useReducer, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Icons } from "./Icons";
import { Tooltip } from "./Tooltip";
import { indigo } from "@mui/material/colors";

function useForceUpdate() {
	const [value, setValue] = useState(0); // integer state
	return () => setValue((value) => value + 1); // update the state to force render
}

const initDoor = { largo: 2, ancho: 1 };
const initWindow = { largo: 1, ancho: 1 };

export const ExpandableInput = ({ id, onSubmit }) => {
	const forceUpdate = useForceUpdate();
	const [inputs, setInputs] = useReducer((s, a) => a || s, []);
	const [hidden, setHidden] = useState(true);

	const initValue = id === "puerta" ? initDoor : initWindow;

	/*
		inputs: [{ largo, ancho}]
	*/
	function onChange(inputKey, cell, value) {
		const old = [...inputs];
		let input = old[inputKey];
		input[cell] = value;
		setInputs(old);
		onSubmit(id, old);
		forceUpdate();
	}

	const append = () => {
		if (inputs.length === 4) {
			return;
		}
		const old = [...inputs, initValue];
		setInputs(old);
		onSubmit(id, old);
		setHidden(false);
	};
	const pop = () => {
		if (inputs.length === 0) {
			return;
		}
		const old = inputs.slice(0, -1);
		setInputs(old);
		onSubmit(id, old);
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
						{inputs.map((values, i) => (
							<SizeInput
								key={i}
								hidden={false}
								values={values}
								inp={i}
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

export const SizeInput = ({ identifier, values, hidden, onChange, inp }) => {
	const submit = (key, value) => {
		console.log("size", key, value);
		onChange(identifier, key, value);
	};

	return (
		<div style={hidden ? { visibility: "hidden" } : {}}>
			<RowSimple
				style={{
					width: inp < 1 ? "" : "135px",
					marginLeft: inp < 1 ? "0" : "22px",
				}}
			>
				<SimpleInput
					lIcon={inp < 1 ? "vertical" : ""}
					value={values?.largo}
					onChangeText={(e) => submit("largo", e)}
				/>
				<SimpleInput
					lIcon={inp < 1 ? "horizontal" : ""}
					value={values?.ancho}
					onChangeText={(e) => submit("ancho", e)}
				/>
			</RowSimple>
		</div>
	);
};

export const SimpleInput = ({ onChangeText, lIcon, value }) => {
	console.log("Simple item", value);

	function onChange({ target }) {
		console.log("v", value, "target", target.value);
		onChangeText(parseFloat(target.value));
	}

	return (
		<SIContainer>
			{lIcon && <Icons name={lIcon} size={20} />}
			<SIInput
				type="number"
				value={value}
				onChange={onChange}
				min="0.5"
				max="5"
				step="0.5"
			/>
			<SILabel>mts</SILabel>
		</SIContainer>
	);
};

export const SimpleInputOwnState = ({ id, onSubmit, defaultValue }) => {
	const [text, setText] = useState(defaultValue);

	useEffect(() => {
		onSubmit(id, parseFloat(text));
	}, []);

	function onChange({ target }) {
		setText(target.value);
		onSubmit(id, parseFloat(target.value));
	}

	return (
		<SIContainer>
			<SIInput
				type="number"
				value={text}
				onChange={onChange}
				min="0.5"
				max="5"
				step="0.5"
			/>
			<SILabel>mts</SILabel>
		</SIContainer>
	);
};

export const TitleHead = ({ title, icon, size, end }) => {
	function Label() {
		return (
			<LabelContainer>
				{size ? <H3>Metros</H3> : <H3>‏‏‎ ‎</H3>}
				<H2>{title}</H2>
			</LabelContainer>
		);
	}

	const strEnd = end ? "true" : "false";

	return (
		<HeaderContainer end={strEnd}>
			<Box>
				<Icons name={icon} size={42} />
				<Label />
			</Box>
		</HeaderContainer>
	);
};

export function FirstCol({ index, selectControl, onSelectControl, onSubmit }) {
	const stateColors = useSelector((state) => state.colors);
	const colors = stateColors.colores || [];
	const [tooltip, setTooltip] = useState(false);
	const [select, setSelect] = useState(null);
	const { colors1 } = useSelector((state) => state);
	const linea_producto = colors1;
	const colorsArray = colors.map((c) => c.rgb);
	const [selectedValue, setSelectedValue] = React.useState("a");

	const handleChange = (event) => {
		setSelectedValue(event.target.value);
	};

	const controlProps = (item) => ({
		checked: selectedValue === item,
		onChange: handleChange,
		value: item,
		name: "color-radio-button-demo",
		inputProps: { "aria-label": item },
	});
	useEffect(() => {
		if (index === 1 && colorsArray.length === 1) {
			onSelectColor(0);
		}
		if (!selectControl) {
			setSelect(null);
		}
	}, [selectControl, colors, onSelectColor]);

	function onSelectColor(index) {
		setTooltip(false);
		console.log("callign color set");
		setSelect(colorsArray[index]);
		onSubmit(colorsArray[index]);
	}

	return (
		<Wall>
			<Separate>
				<RadioButtonFirst
					{...controlProps("e")}
					sx={{
						color: indigo[800],
						"&.Mui-checked": {
							color: indigo[800],
						},
					}}
					type="radio"
					checked={selectControl}
					onClick={(e) => {
						onSelectControl((s) => !s);
					}}
				/>
				<div style={{ width: "1em" }} />
				{!!linea_producto?.impermeabilizante === false ? (
					<H4>{index < 5 ? `${"Pared" + index}` : "Techo"}</H4>
				) : (
					<H4>Azotea</H4>
				)}
			</Separate>

			<Tooltip
				select={select}
				colors={colorsArray}
				onSelect={onSelectColor}
				visible={tooltip}
				onClose={() => setTooltip(false)}
			>
				<RadioButton
					color={select}
					type="button"
					checked={!!select}
					onClick={(e) => {
						selectControl && setTooltip((s) => !s);
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
	padding: 0.2vw 0 0 0;
	position: relative;
	left: 15%;
	align-items: flex-start;
	@media screen and (max-width: 768px) {
		left: 4%;
	}
`;
const SIInput = styled.input`
	border: none;
	border-bottom: 1px solid #003366;
	max-width: 33px;
	min-height: auto;
	font-size: 13px;
	text-align: end;
	@media screen and (max-width: 1367px) {
		max-width: 35px;
		font-size: 12px;
	}
	@media screen and (max-width: 1024px) {
		max-width: 30px;
		font-size: 11px;
	}
	@media screen and (max-width: 768px) {
		max-width: 30px;
		font-size: 10px;
	}
`;
const SILabel = styled.p`
	font-size: 0.5em;
	color: #003366;
	font-family: "Radikal1";
	@media screen and (max-width: 768px) {
		font-size: 8px;
	}
`;

const HeaderContainer = styled.div`
	font-size: 0.8em;
	display: flex;
	flex-direction: column;
	font-family: "Radikal1";
	align-items: ${({ end }) => (end === "true" ? "flex-end" : "center")};
	@media screen and (max-width: 768px) {
		margin: 0 0 30px 0;
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
	width: 21px;
	height: 21px;
	background-color: ${({ color }) => `${color ? color : "transparent"}`};
	border-radius: 999px;
	border: 0.4px solid gray;
	position: relative;
	@media screen and (max-width: 1367px) {
		left: -10px;
	}
	@media screen and (max-width: 768px) {
		left: -20px;
	}
	@media screen and (max-width: 600px) {
		left: -60px;
	}
	@media screen and (max-width: 500px) {
		left: -70px;
	}
	@media screen and (max-width: 450px) {
		left: -80px;
	}
	@media screen and (max-width: 400px) {
		left: -95px;
	}
	@media screen and (max-width: 400px) {
		left: -98px;
	}
`;
const RadioButtonFirst = styled(Radio)`
	width: 1.5em;
	height: 1.5em;
	background-color: ${({ color }) => `${color ? color : "transparent"}`};
	border-radius: 999px;

	@media screen and (max-width: 500px) {
		margin: 0 0 0 10px;
	}
`;
const Row = styled.div`
	display: flex;
	flex-direction: row;
	position: relative;
	left: -5px;
	width: 200px;
	margin: 0 1vw 0 1vw;
	@media screen and (max-width: 1500px) {
		width: 180px;
		margin: 0 1vw 0 1vw;
	}
	@media screen and (max-width: 1367px) {
		width: 170px;
		margin: 0 0 0 0.5vw;
	}
	@media screen and (max-width: 1200px) {
		margin: 0 2vw 0 2vw;
	}
	@media screen and (max-width: 1024px) {
		margin: 0 1.7vw 0 1.7vw;
		left: -20px;
	}
	@media screen and (max-width: 768px) {
		margin: 0 -3vw 0 0.5vw;
	}
	@media screen and (max-width: 600px) {
		margin: 0 -4vw 0 0.5vw;
	}
`;
const RowSimple = styled.div`
	display: flex;
	flex-direction: row;
	position: relative;
	width: 155px;
	justify-content: space-between;
	top: 7px;
	left: -14%;
	margin: -0.6vw 0 0 0;
	@media screen and (max-width: 1200px) {
		margin: 0 3vw 0 20px;
		left: -18%;
	}
	@media screen and (max-width: 1024px) {
		margin: 0 1.5vw 0 20px;
		left: -14%;
	}
	@media screen and (max-width: 768px) {
		margin: 0.1vw -2vw 0 30px;
		left: 5%;
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
	margin: 0 10% 0 10%;
	width: 180px;
	padding: 0px 30px 60px 0;
	@media screen and (max-width: 1600px) {
		margin: 0 0% 0 2%;
		width: 180px;
		padding: 0 1px 55px 0;
	}
	@media screen and (max-width: 1367px) {
		width: 150px;
		margin: 0 2% 0 5%;
	}
	@media screen and (max-width: 1200px) {
		width: 180px;
		margin: 0 4vw 55px 7vw;
	}
	@media screen and (max-width: 1024px) {
		margin: 0 3vw 55px 7vw;
	}
	@media screen and (max-width: 768px) {
		margin: 0 -2vw 55px 8vw;
	}
	@media screen and (max-width: 600px) {
		margin: 0 -12vw 55px 8vw;
	}
	@media screen and (max-width: 500px) {
		margin: 0 -18vw 55px 10vw;
	}
	@media screen and (max-width: 450px) {
		margin: 0 -24vw 55px 10vw;
	}
	@media screen and (max-width: 400px) {
		margin: 0 -30vw 55px 12vw;
	}
	@media screen and (max-width: 330px) {
		margin: 0 -35vw 55px 14vw;
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
	@media screen and (max-width: 600px) {
		font-size: 13px;
	}
	@media screen and (orientation: landscape) {
		font-size: 15px;
	}
`;

const H3 = styled(Typograph)`
	font-size: 0.7em;
	@media screen and (max-width: 600px) {
		font-size: 9px;
	}
`;

const H4 = styled(Typograph)`
	font-size: 1.3;
	font-family: "Radikal1";
	position: relative;
	letter-spacing: 2px;
	left: -10px;
	@media screen and (max-width: 600px) {
		font-size: 13px;
	}
	@media screen and (max-width: 400px) {
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
	position: relative;
	left: 25px;
	@media screen and (max-width: 1500px) {
		left: 5px;
	}
	@media screen and (max-width: 1367px) {
		left: 3px;
	}
	@media screen and (max-width: 1200px) {
		left: -20px;
	}
	@media screen and (max-width: 1024px) {
		left: -10px;
	}
	@media screen and (max-width: 1024px) and (orientation: landscape) {
		width: 1.6vh;
	}
	@media screen and (max-width: 768px) {
		position: relative;
		font-size: 10px;
		left: 50px;
		top: -25px;
		height: 2vh;
		width: 2vh;
		margin: 2vw;
	}
	@media screen and (max-width: 600px) and (orientation: landscape) {
		width: 1.75vh;
	}
	@media screen and (max-width: 400px) and (orientation: landscape) {
		width: 1.9vh;
	}
`;
