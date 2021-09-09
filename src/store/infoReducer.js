import { createSlice } from "@reduxjs/toolkit";
import { sendCalculator } from "../services/api";

/*
  {
    id,
    rgb,
    nombre,
    presentaciones: [
      {
        litros: 0,
        presentacion_id: "0L",
        cantidad: 0,
      }
    ]
  }
*/

const initialState = {
	isReadyToCompute: false,
};

const infoSlice = createSlice({
	name: "info",
	initialState,
	reducers: {
		goCalculator: (state) => {
			state.isReadyToCompute = true;
		},
		finishCalculator: (state) => {
			state.isReadyToCompute = false;
		},
	},
});

const { actions, reducer } = infoSlice;
const { goCalculator, finishCalculator } = actions;

export default reducer;

export const initCalculatorAction = goCalculator;

export const calculateData = (data) => async (dispatch) => {
	const result = await sendCalculator(data);
	dispatch(finishCalculator());
};
