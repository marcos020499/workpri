import Tooltip from "../Tooltip/Tooltip";
import React, {
	forwardRef,
	useImperativeHandle,
	useReducer,
	useRef,
	useState,
	useEffect,
	useCallback,
	useMemo,
} from "react";
import styled from "styled-components";
import { ColorsItem, InputColorTooltip } from "../FirstContent/style";
import { Icons } from "./Icons";

export const ExpandableInput = () => {
	const [keys] = useState(["first", "second", "three", "four"]);
	const [state, dispatch] = useReducer((s, a) => ({ ...s, ...a }), {});

	function notify(key, x, y) {
		dispatch({ [key]: x * y });
	}

	return (
		<div>
			<p>{state["first"]}</p>
			{keys.map((key, i) => (
				<SizeInput key={i} identifier={key} onSubmit={notify} />
			))}
		</div>
	);
};

export const SizeInput = ({ identifier, onSubmit }) => {
	const [val, setVal] = useState({ x: 0, y: 0 });

	const submit = (k, v) => {
		setVal((s) => ({ ...s, [k]: v }));
	};

	useEffect(() => {
		if (onSubmit) {
			onSubmit(identifier, val.x, val.y);
		}
	}, [val.x, val.y]);

	return (
		<Row>
			<SimpleInput
				lIcon="vertical"
				value={val.x}
				onChangeText={(e) => submit("x", e.target.value)}
			/>
			<SimpleInput
				lIcon="horizontal"
				value={val.y}
				onChangeText={(e) => submit("y", e.target.value)}
			/>
		</Row>
	);
};

export const SimpleInput = ({ onChangeText, lIcon, value }) => {
	return (
		<SIContainer>
			{lIcon && <Icons name={lIcon} size={25} />}
			<SIInput type="number" min={0} value={value} onInput={onChangeText} />
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
