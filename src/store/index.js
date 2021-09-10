import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import colorsReducer from "./colorReducer";
import infoReducer from "./infoReducer";
import gestionReducer from "./gestionReducer";

const store = configureStore({
	reducer: {
		colors: colorsReducer,
		info: infoReducer,
		gestion: gestionReducer,
	},
});

export function MProvider({ children }) {
	return <Provider store={store}>{children}</Provider>;
}
