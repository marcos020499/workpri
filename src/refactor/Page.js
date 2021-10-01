import React, { useState, useMemo } from "react";
import { useDispatch } from "react-redux";
import { fetchCalculateDataV2 } from "../store/colorReducer";
import { Calculator } from "./cmps/Calculator";
import { Fields } from "./cmps/Fields";

export function Page() {
	const dispatch = useDispatch();

	const init = () => ({
		color_id: null,
		nombre: null,
		largo: 0,
		ancho: 0,
		puertas: [],
		ventanas: [],
	});
	const [wall1, setWall1] = useState(init());
	const [wall2, setWall2] = useState(init());
	const [wall3, setWall3] = useState(init());
	const [wall4, setWall4] = useState(init());
	const [wall5, setWall5] = useState(init());

	const update = (index, key, value) => {
		const setter = [setWall1, setWall2, setWall3, setWall4, setWall5][index];
		setter((prev) => ({ ...prev, [key]: value }));
	};

	const onClear = () => {};
	const onSubmit = () => {
		dispatch(fetchCalculateDataV2([wall1, wall2, wall3, wall4, wall5]));
	};

	return useMemo(
		() => (
			<div>
				<Fields
					wall1={wall1}
					wall2={wall2}
					wall3={wall3}
					wall4={wall4}
					wall5={wall5}
					onSubmit={onSubmit}
					onClear={onClear}
					update={update}
				/>
				<Calculator />
			</div>
		),
		[]
	);
}
