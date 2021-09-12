import { createSlice } from "@reduxjs/toolkit";
import { getPresetation } from "../services/api";

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

const initialState = [];

const colorSlice = createSlice({
	name: "colors",
	initialState,
	reducers: {
		putColors: (state, action) => {
			console.log(action);
			return action.payload || state;
		},
	},
});

const { actions, reducer } = colorSlice;
const { putColors } = actions;

export default reducer;

export const fetchColors = () => async (dispatch) => {
	const colors = await getPresetation();
  dispatch(putColors(colors.concat([])));
};
