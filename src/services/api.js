let linea_id;
export const getPresetation = async () => {
	try {
		const res = await fetch(
			"https://api.tiendaenlineaprisa.mx/calcdemo/calculadora/inicializar?origen=e&origen_id=erd&color_id=611"
		);
		const data = await res.json();
		if (data.hasOwnProperty("colores")) {
			linea_id = data.linea_producto?.id;
			return data.colores;
		}
		return [];
	} catch (e) {
		return [];
	}
};

export const sendCalculator = async (body) => {
	try {
		const data = {
			origen: "e",
			origen_id: "erd",
			color_id: "643",
			linea_id: 'ad',
			paredes: body,
		};
		console.log("sendCalculator", data);
		const res = await fetch(
			"https://api.tiendaenlineaprisa.mx/calcdemo/calculadora/calcular",
			{
				method: "POST",
				body: JSON.stringify(data),
			}
		);

		const d = await res.json();
		return d;
	} catch (e) {
		console.log("sendCalculator", e);
	}
};
