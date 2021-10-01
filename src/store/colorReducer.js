import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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
		id: 611,
		rgb: "#495073",
		nombre: "POLIPRISA® Blue Purple Mate",
		area: 0,
		litros: 0,
		presentaciones: [
			{
				litros: 19,
				presentacion_id: 614,
				cantidad: 0,
			},
			{
				litros: 4,
				presentacion_id: 613,
				cantidad: 0,
			},
			{
				litros: 4,
				presentacion_id: 612,
				cantidad: 0,
			},
		],
	},
];

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

export const fetchCalculateDataV2 = createAsyncThunk(
	"result/fetchResult",
	async (walls) => {
		console.log("FETCh", walls);
		/*
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
*/
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
