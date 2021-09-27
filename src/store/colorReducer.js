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

const initialState = [
  {
    "id": 611,
    "rgb": "#495073",
    "nombre": "POLIPRISA® Blue Purple Mate",
    "area": 0,
    "litros": 0,
    "presentaciones": [
      {
        "litros": 19,
        "presentacion_id": 614,
        "cantidad": 0
      },
      {
        "litros": 4,
        "presentacion_id": 613,
        "cantidad": 0
      },
      {
        "litros": 4,
        "presentacion_id": 612,
        "cantidad": 0
      }
    ]
  }
]

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
	console.log(colors);
	dispatch(putColors(colors));
};
