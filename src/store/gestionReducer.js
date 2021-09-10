import { createSlice } from "@reduxjs/toolkit";
import { sendCalculator } from "../services/api";

const initialState = {
	isReadyToCompute: false,
	finishRecopilation: true,
};

const gestionSlice = createSlice({
	name: "gestion",
	initialState,
	reducers: {
		goCalculator: (state) => {
			console.log("goCalculator");
			state.isReadyToCompute = true;
			state.finishRecopilation = false;
		},
		endCalculator: (state) => {
			console.log("endcalculator");
			state.isReadyToCompute = false;
			state.finishRecopilation = true;
			return state;
		},
	},
});

const { actions, reducer } = gestionSlice;
const { goCalculator, endCalculator } = actions;

export default reducer;

export const initCalculatorAction = () => (dispatch) =>
	dispatch(goCalculator());
export const endCalculatorAction = () => (dispatch) => {
	dispatch(endCalculator());
	dispatch(calculateData());
};

const calculateData = () => async (dispatch, getState) => {
	const walles = getState().info;
	if (!walles.length) {
		return;
	}
	console.log(getState());
	const wlls = walles.reduce((acc, el) => {
		const { color_id, nombre, largo, ancho, puertas, ventanas } = el;
		acc.push({ color_id, nombre, largo, ancho, puertas, ventanas });
		return acc;
	}, []);
	const result = await sendCalculator(wlls);
	console.log("response", result);
	//dispatch(endCalculatorAction());
};
