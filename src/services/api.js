let linea_id;
export const getPresetation = async () => {
  try {
    const slug = window.location.href.substring(
      window.location.href.lastIndexOf("?") + 1

    );
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
            var Origen = valores['origen'];
            var Color_id = valores['color_id'];
            var Origen_id = valores['origen_id'];
            alert('el origen es  '+ Origen+'  Origen_id  '+Origen_id+"  Color_id  "+Color_id)
            return {Origen,Origen_id,Color_id}
                // hacemos un bucle para pasar por cada indice del array de valores
      }
    }
    const res = await fetch(
      //'https://api.tiendaenlineaprisa.mx/calcdemo/calculadora/inicializar?origen=e&origen_id=erd&color_id=611'
      `https://api.tiendaenlineaprisa.mx/calcdemo/calculadora/inicializar?${slug}`
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
export const getPresentation = async () => {
  try {
    const res = await fetch(
      "https://api.tiendaenlineaprisa.mx/calcdemo/calculadora/inicializar?origen=k&origen_id=erd&color_id=sa23d"
    );
    const data = await res.json();
    if (data.hasOwnProperty("linea_producto")) {
      linea_id = data.linea_producto?.id;
      return data.linea_producto;
    }
    console.log("data", data);
    return [];
  } catch (e) {
    return [];
  }
};
export const sendCalculator = async (body) => {
  var {Origen, Origen_id, Color_id }= window.onload()
  try {
    const data = {
      origen: Origen,
      origen_id: Origen_id,
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
