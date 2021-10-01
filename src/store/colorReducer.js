import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPresetation, sendCalculator } from "../services/api";

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
	async (walls, { getState }) => {
		//console.log("FETCh", walls);
		const colors = getState().colors.colores;
		//console.log("COLORES", colors);
		const validateWall = walls.filter(({ color_id }) => color_id !== null);
		if (!validateWall.length) {
			return;
		}
		//console.log("VALIDATE WALL", validateWall);

		const wallsByColor = validateWall.reduce((acc, el) => {
			const keyColor = "kc" + el.color_id;
			if (!acc[keyColor]) {
				acc[keyColor] = [];
			}
			const { largo, ancho, puertas, ventanas } = el;
			acc[keyColor].push({ largo, ancho, puertas, ventanas });
			return acc;
		}, {});
		/*
      {
        kc<id>: [
          { ... }
        ],
        kc<id>: [
          { ... }
        ]
      }
    */

		//console.log("NORMALIZADA", wallsByColor);

		const colorsByWall = colors.reduce((acc, el) => {
			const colorId = el.id;
			const keyColor = "kc" + colorId;
			const object = {
				color_id: colorId,
				paredes: wallsByColor[keyColor] || [],
			};

			acc.push(object);
			return acc;
		}, []);

		//console.log("COLOR FINAL", colorsByWall);

		const result = await sendCalculator(colorsByWall);
		return result;

		/*
      {
        origen,
        origen_id,
        linea_id,
        colores: [
          {
            color_id,
            paredes: [
              {
                largo,
                ancho,
                puertas,
                ventanas,
              }
            ]
          }
        ]
      }
    */

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
		//const result = await sendCalculator2(colores);
		//console.log("responses", result);
		//return result;
		//dispatch(endCalculatorAction());
	}
);
