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

export const fetchCalculateData = createAsyncThunk(
	"result/fetchResult",
	async (_, { getState }) => {
		const walles = getState().info;
		if (!walles.length) {
			return;
		}
		console.log(getState());
		const wlls = walles.reduce((acc, el) => {
			const { largo, ancho, puertas, ventanas } = el;
			acc.push({ largo, ancho, puertas, ventanas });
			return acc;
		}, []);
		const wlls1 = walles.reduce((accw, elw) => {
			const { color_id } = elw;
			accw.push(color_id)
			return color_id;
		}, []);
		const result = await sendCalculator(wlls, wlls1);
		console.log("responses", result);
		return result;
		//dispatch(endCalculatorAction());
	}
);
