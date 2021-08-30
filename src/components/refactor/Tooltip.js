import React from "react";
import styled from "styled-components";

export function Tooltip({ children, colors, visible, onSelect, onClose }) {
	return (
		<Container>
			{children}
			<Content visible={visible} onClick={onClose} />
			<Box visible={visible}>
				<p>Colores a elegir</p>
				<Row>
					{colors?.map((el, i) => (
						<BoxColor key={i} {...el} index={i} onClick={onSelect} />
					))}
				</Row>
			</Box>
		</Container>
	);
}

const Container = styled.div`
	padding: none;
	margin: none;
	display: inline-block;
`;

const Content = styled.div`
	visibility: ${({ visible }) => (visible ? "initial" : "hidden")};
	top: 0;
	left: 0;
	position: absolute;
	width: 100vw;
	height: 100vw;
	background-color: rgba(0, 0, 0, 0.3);
	white-space: nowrap;
	line-height: 1;
`;

const Box = styled.div`
	position: absolute;
	visibility: ${({ visible }) => (visible ? "initial" : "hidden")};
	background-color: cyan;
	z-index: 2;
`;

const Row = styled.div`
	display: flex;
	flex-direction: row;
`;

function BoxColor(props) {
	function onSelect() {
		props.onClick(props.index);
	}

	return (
		<ColorContainer {...props} onClick={onSelect}>
			<ColorInner color={props.color} />
		</ColorContainer>
	);
}

const ColorContainer = styled.div`
	border: 3px solid ${({ selected, color }) => `${selected ? color : "black"}`};
	width: 50px;
	height: 50px;
`;

const ColorInner = styled.div`
	width: 100%;
	height: 100%;
	background-color: ${({ color }) => `${color}`};
`;
