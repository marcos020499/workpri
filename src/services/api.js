let linea_id;
export const getPresetation = async () => {
	try {
		function getGET() {
			// capturamos la url
			var loc = document.location.href;
			// si existe el interrogante
			if (loc.indexOf("?") > 0) {
				// cogemos la parte de la url que hay despues del interrogante
				var getString = loc.split("?")[1];
				// obtenemos un array con cada clave=valor
				var GET = getString.split("&");
				var get = {};
				// recorremos todo el array de valores
				for (var i = 0, l = GET.length; i < l; i++) {
					var tmp = GET[i].split("=");
					get[tmp[0]] = unescape(decodeURI(tmp[1]));
				}
				return get;
			}
		}
		window.onload = function () {
			// Cogemos los valores pasados por get
			var valores = getGET();
			if (valores) {
				//recogemos los valores que nos envia la URL en variables para trabajar
				//con ellas
				var Oo = valores["o"];
				var Tienda = valores["tienda"];
				var Color_id = valores["color_id"];
				return { Oo, Tienda, Color_id };
				// hacemos un bucle para pasar por cada indice del array de valores
			}
		};
		const { Oo, Tienda, Color_id } = window.onload();
		const res = await fetch(
			`https://api.tiendaenlineaprisa.mx/calctest/calculadora/inicializar?origen=${Oo}&origen_id=${Tienda}&color_id=${Color_id}`
		);
		const data = await res.json();
		//console.log("data", data);
		if (data.hasOwnProperty("colores")) {
			linea_id = data.linea_producto?.id;
			return data;
		}
		return [];
	} catch (e) {
		return [];
	}
};

export const sendCalculator = async (body) => {
	const { Oo, Tienda, Color_id } = window.onload();
	try {
		const data = {
			origen: Oo,
			origen_id: Tienda,
			linea_id: Color_id,
			colores: body,
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
