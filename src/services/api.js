let linea_id;
export const getPresetation = async () => {
  try {
    const res = await fetch(
      //'https://api.tiendaenlineaprisa.mx/calcdemo/calculadora/inicializar?origen=e&origen_id=erd&color_id=611'
      `https://api.tiendaenlineaprisa.mx/calcdemo/calculadora/inicializar?origen=e&origen_id=erd&color_id=611`
      //'https://api.tiendaenlineaprisa.mx/calcdemo/calculadora/inicializar?origen=k&origen_id=erd&color_id=sa23d'
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
  var {O, Tienda, Color_id }= window.onload()
  try {
    const data = {
      
      origen: 'e',
      origen_id: 'et',
      color_id: 'ad',
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
