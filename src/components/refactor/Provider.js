import { func } from "prop-types";
import React, {
	createContext,
	useCallback,
	useContext,
	useReducer,
	useState,
} from "react";

const CalculatorContext = createContext();
export function CalculatorProvider({ children }) {
	const initialWall = {
		color: "",
		width: 0,
		height: 0,
		door: 0,
		window: 0,
	};

	const [wall1, setWall1] = useState(initialWall);
	const [wall2, setWall2] = useState(initialWall);
	const [wall3, setWall3] = useState(initialWall);
	const [wall4, setWall4] = useState(initialWall);
	const [wall5, setWall5] = useState(initialWall);
	const [colors, setColors] = useState([1]);
	const [total, setTotal] = useState(0);

	// [0: area walle, 1: doorArea, 2: windowArea]

	const putWallInfo = (keyWall, field, value) => {
		function setter(prevState) {
			console.log("prev: ", prevState);
			return { ...prevState, [field]: value };
		}
		console.log(keyWall, field, value);

		const _ = {
			wall1: () => {
				console.log("x");
				setWall1(setter);
			},
			wall2: () => setWall2(setter),
			wall3: () => setWall3(setter),
			wall4: () => setWall4(setter),
			wall5: () => setWall4(setter),
		}[keyWall]();
	};

	const putColors = (colors) => {
		setColors(colors);
	};

	const clearWall = (keyWall) => {
		const _ = {
			wall1: () => setWall1(initialWall),
			wall2: () => setWall2(initialWall),
			wall3: () => setWall3(initialWall),
			wall4: () => setWall4(initialWall),
			wall5: () => setWall4(initialWall),
		}[keyWall]();
	};

	const clearAll = () => {
		setWall1(initialWall);
		setWall2(initialWall);
		setWall3(initialWall);
		setWall4(initialWall);
		setWall5(initialWall);
		setColors([]);
		setTotal(0);
	};

	const calculateWallArea = useCallback(
		(wall) => {
			const { width, height, door, window } = wall;
			console.log("calc", wall);
			const wallArea = width * height;
			const result = wallArea + door + window;
			return result;
		},
		[wall1, wall2, wall3, wall4]
	);

	const calculateTotal = useCallback(() => {
		const total =
			calculateWallArea(wall1) +
			calculateWallArea(wall2) +
			calculateWallArea(wall3) +
			calculateWallArea(wall4)+
			calculateWallArea(wall5);
		console.log(total);
		setTotal(total);
	}, [wall1, wall2, wall3, wall4, wall5]);

	return (
		<CalculatorContext.Provider
			value={{
				calculateTotal,
				clearAll,
				putWallInfo,
				putColors,
				clearWall,
				total,
				colors,
			}}
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
