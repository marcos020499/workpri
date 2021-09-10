import { createSlice } from "@reduxjs/toolkit";

/*
  {
		id -> optional for internal manager
    color_id,
		largo,
		ancho,
		nombre,
		puretas: [{ largo, ancho}],
		ventanas: [{ largo, ancho}]
  }
*/

const merge = (array, element) =>
	array.reduce((acc, el) => {
		if (el.id === element.id) {
			acc.push(element);
		} else {
			acc.push(el);
		}
		return acc;
	}, []);

const initialState = [];

const infoSlice = createSlice({
	name: "info",
	initialState,
	reducers: {
		appendWall: (state, action) => {
			const old = state.find(({ id }) => id === action.payload.id);
			if (old) {
				// merge
				const newState = merge(state, action.payload);
				console.log("appendWall", newState);
				return newState;
			}
			// copy
			const newState = state.concat([action.payload]);
			return newState;
		},
		removeWall: (state, action) => {
			const elementId = action.payload;
			const newState = state.filter(({ id }) => id !== elementId);
			console.log("removeWall", elementId, newState);
			return newState;
		},
	},
});

const { actions, reducer } = infoSlice;
const { appendWall, removeWall } = actions;

export default reducer;

export const appendWallAction = (element) => (dispatch) =>
	dispatch(appendWall(element));

export const removeWallAction = (id) => (dispatch) => dispatch(removeWall(id));
