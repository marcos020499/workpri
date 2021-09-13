import { createSlice } from "@reduxjs/toolkit";
import { fetchCalculateData } from "./gestionReducer";
/*
[
    {
        "color_id": 611,
        "nombre": "POLIPRISA® Blue Purple Mate",
        "rgb": "#495073",
        "area": 4,
        "litros": 1,
        "presentaciones": [
            {
                "presentacion_id": 614,
                "litros": 19,
                "cantidad": 0
            },
            {
                "presentacion_id": 613,
                "litros": 4,
                "cantidad": 0
            },
            {
                "presentacion_id": 612,
                "litros": 1,
                "cantidad": 1
            }
        ]
    }
]
*/
const initialState = [];

const resultSlice = createSlice({
	name: "result",
	initialState,
	extraReducers: (builder) => {
		builder.addCase(fetchCalculateData.fulfilled, (_, { payload }) => {
			console.log("object result ", payload);
			return payload;
		});
	},
});

export default resultSlice.reducer;
