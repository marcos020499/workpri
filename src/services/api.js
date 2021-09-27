let linea_id;
export const getPresetation = async () => {
	try {
		function getGET()
    {
        // capturamos la url
        var loc = document.location.href;
        // si existe el interrogante
        if(loc.indexOf('?')>0)
        {
            // cogemos la parte de la url que hay despues del interrogante
            var getString = loc.split('?')[1];
            // obtenemos un array con cada clave=valor
            var GET = getString.split('&');
            var get = {};
            // recorremos todo el array de valores
            for(var i = 0, l = GET.length; i < l; i++){
                var tmp = GET[i].split('=');
                get[tmp[0]] = unescape(decodeURI(tmp[1]));
            }
            return get;
        }
    }
    window.onload = function()
    {
        // Cogemos los valores pasados por get
        var valores=getGET();
        if(valores)
        {
            //recogemos los valores que nos envia la URL en variables para trabajar 
                //con ellas
            var Oo = valores['o'];
            var Tienda = valores['tienda'];
            var Color_id = valores['color_id'];
            return {Oo,Tienda,Color_id}
                // hacemos un bucle para pasar por cada indice del array de valores
      }
	}
	const {Oo, Tienda, Color_id} = window.onload()
		const res = await fetch(
			//'https://api.tiendaenlineaprisa.mx/calcdemo/calculadora/inicializar?origen=e&origen_id=erd&color_id=611'
			`https://api.tiendaenlineaprisa.mx/calcdemo/calculadora/inicializar?origen=${Oo}&origen_id=${Tienda}&color_id=${Color_id}`
			//`https://api.tiendaenlineaprisa.mx/calcdemo/calculadora/inicializar?origen=k&origen_id=erd&color_id=fa4tg"
			//'https://api.tiendaenlineaprisa.mx/calcdemo/calculadora/inicializar?origen=e&origen_id=erd&color_id=611'
		);
		const data = await res.json();
		console.log("data", data);
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
	try {
		const data = {
			origen: "e",
			origen_id: "erd",
			linea_id: "ad",
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
