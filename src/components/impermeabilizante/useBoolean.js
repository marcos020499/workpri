import React from "react";
import { useSelector } from "react-redux";

const useBoolean = () => {
  const { colors } = useSelector((state) => state);
  const { linea_producto } = colors;
  let x = !!linea_producto?.impermeabilizante ? true : false;
  return { x };
};
export default useBoolean;
