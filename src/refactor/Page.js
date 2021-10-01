import React, { useState, useMemo } from "react";
import { useDispatch } from "react-redux";
import { fetchCalculateDataV2 } from "../store/colorReducer";
import { Calculator } from "./cmps/Calculator";
import { Fields } from "./cmps/Fields";
import styled from "styled-components";

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
      <Container>
        <First>
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
        </First>
        <Second>
          <Calculator />
        </Second>
      </Container>
    ),
    []
  );
}
const Container = styled.div`
  display: flex;
  height: auto;
  overflow: hidden;
  @media screen and (max-width: 1200px) {
    overflow: visible;
    flex-direction: column;
  }
  @media screen and (min-width: 1200px) {
    align-items: center;
  }
`;
const Second = styled.div`
  background-color: #003366;
  height: auto !important;
  min-height: 105vh;
  max-height: 105vh;
  min-width: 48%;
  max-width: 48%;
  margin: 0vw -0.5vw 0 0;
`;
const First = styled.div`
  height: auto !important;
  min-height: 100vh;
  max-height: 100vh;
  min-width: 52%;
  max-width: 52%;
  margin: 2vw 0 0 0;
  justify-content: center;
`;