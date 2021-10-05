import React from "react";
import styled from "styled-components";
import { TitleHead } from "../refactor/Components";
import { useSelector } from "react-redux";

const ThDoor = () => {
  const { colors } = useSelector((state) => state);
  const { linea_producto } = colors;

  return (
    <TH>
      {!!linea_producto?.impermeabilizante === false ? (
        <TitleHead title="Puertas" icon="door" />
      ) : (
        <TitleHead title="Domo" icon="domo" />
      )}
    </TH>
  );
};
export default ThDoor;
const TH = styled.th`
  padding: 0px 1vw;
  @media screen and (max-width: 1367px) {
    padding: 0px 0.7vw;
  }
  @media screen and (max-width: 1200px) {
    padding: 0px 1.5vw;
  }
  @media screen and (max-width: 768px) {
    padding: 0 0.2vw;
  }
`;
