import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import colorsReducer from "./colorReducer";
import infoReducer from "./infoReducer";
import gestionReducer from "./gestionReducer";
import resultReducer from "./resultReducer";

const store = configureStore({
	reducer: {
		colors: colorsReducer,
		info: infoReducer,
		gestion: gestionReducer,
		result: resultReducer,
	},
});

export function MProvider({ children }) {
	return <Provider store={store}>{children}</Provider>;
}
