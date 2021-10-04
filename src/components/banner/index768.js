import React from "react";
import styled from 'styled-components'

import { useSelector } from "react-redux";

const Ban = () => {
  const { colors } = useSelector((state) => state);
  const { linea_producto } = colors;

  return (
    <div>
      {linea_producto && <Ban1 src={linea_producto.url_imagen_inspiracion} />}
    </div>
  );
};
export default Ban;
const Ban1 = styled.img`
  display: none;
  @media screen and (max-width: 1200px) {
    display: initial;
    width: 100%;
    height: 30vw;
  }
`;