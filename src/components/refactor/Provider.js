import React, { createContext, useContext, useReducer } from "react";

function reducer(state, action) {
	return state;
}

const CalculatorContext = createContext();
export function CalculatorProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, {
		wall1: [],
		wall2: [],
		wall3: [],
		wall4: [],
	});

	const append = (keyWall, area) => {
		const arr = state[keyWall];
		arr.push(area);
		dispatch({ [keyWall]: arr });
	};

	return (
		<CalculatorContext.Provider value={{ walles: state, append }}>
			{children}
		</CalculatorContext.Provider>
	);
}

export function useCalculatorField() {
	const context = useContext(CalculatorContext);
	if (!context) throw new Error("Necesita tener padre CalculatorProvider");
	return context;
}
