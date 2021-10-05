import React, { useReducer } from "react";
import { Banner } from "../SecondContent/style";

import { useSelector } from "react-redux";

const Ban = () => {
  const { colors } = useSelector((state) => state);
  const { linea_producto } = colors;

  return (
    <div>
      {linea_producto && <Banner src={linea_producto.url_imagen_inspiracion} />}
    </div>
  );
};
export default Ban;
