import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
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
	dispatch(fetchCalculateData());
};

/*
	colores out
	[
		{
			color_id,
			paredes [
				{
				largo
				ancho
				puertas: { largo, ancho }
				ventanas: { largo, ancho }
				}
			]
		}
	]
*/

export const fetchCalculateData = createAsyncThunk(
	"result/fetchResult",
	async (_, { getState }) => {
		const walles = getState().info;
		if (!walles.length) {
			return;
		}
		console.log("walles: ", walles.length);
		console.log("walles: ", walles);
		const normalizr = walles.reduce((acc, el) => {
			const { color_id, largo, ancho, puertas, ventanas } = el;
			const wall = { largo, ancho, puertas, ventanas };
			const key = "_" + color_id;
			if (!acc[key]) {
				acc[key] = [];
			}
			acc[key].push(wall);
			return acc;
		}, {});

		console.log("normalizer", normalizr);

		const colors = Array.from(new Set(walles.map(({ color_id }) => color_id)));

		const colores = colors.map((key) => {
			return {
				color_id: key,
				paredes: normalizr["_" + key],
			};
		});

		console.log("colores finales", colores);

		//console.log(getState());
		/*
		const wlls = walles.reduce((acc, el) => {
			const {color_id, largo, ancho, puertas, ventanas } = el;
			acc.push({color_id: color_id, paredes:[{ largo, ancho, puertas, ventanas }]});
			return acc;
		}, []);
		*/
		const result = await sendCalculator(colores);
		//console.log("responses", result);
		return result;
		//dispatch(endCalculatorAction());
	}
);
