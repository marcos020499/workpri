import React, { createContext, useContext, useReducer } from "react";

function reducer(state, action) {
	return { ...state, ...action };
}

const CalculatorContext = createContext();
export function CalculatorProvider({ children }) {
	const initialWall = {
		wall: 0,
		door: 0,
		window: 0,
	};
	const [state, dispatch] = useReducer(reducer, {
		wall1: initialWall,
		wall2: initialWall,
		wall3: initialWall,
		wall4: initialWall,
	});

	// [0: area walle, 1: doorArea, 2: windowArea]
	const append = (keyWall, index, area) => {
		const obj = state[keyWall];
		if (obj) {
			obj[index] = area;
			dispatch({ [keyWall]: { ...obj } });
		}
	};

	const { wall1, wall2, wall3, wall4 } = state;

	const calculateWallArea = (wall) =>
		Object.keys(state[wall]).reduce((acc, el) => acc + wall1[el], 0);

	return (
		<CalculatorContext.Provider
			value={{ wall1, wall2, wall3, wall4, append, calculateWallArea }}
		>
			{children}
		</CalculatorContext.Provider>
	);
}

export function useCalculatorField() {
	const context = useContext(CalculatorContext);
	if (!context) throw new Error("Necesita tener padre CalculatorProvider");
	return context;
}
