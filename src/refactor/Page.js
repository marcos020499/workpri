import React, { useState, useMemo, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { fetchCalculateDataV2, fetchColors } from "../store/colorReducer";
import SecondPart from "../components/SecondContent";
import { Fields } from "./cmps/Fields";
import Banner from '../components/banner/index768'
import styled from "styled-components";
import { useSelector } from "react-redux";
export function Page() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchColors());
  }, []);
  const init = () => ({
    color_id: null,
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
  const [wall6, setWall6] = useState(init());
  const [ready, setReady] = useState(false);
  /*
	console.log("WALL1", wall1);
	console.log("WALL2", wall2);
	console.log("WALL3", wall3);
	console.log("WALL4", wall4);
  */

  const update = (index, key, value) => {
    //console.log("UPDATE", index, key, value);
    const setter = [setWall1, setWall2, setWall3, setWall4, setWall5, setWall6][index];
    setter((prev) => ({ ...prev, [key]: value }));
  };

  useEffect(() => {
    if (ready) {
      dispatch(fetchCalculateDataV2([wall1, wall2, wall3, wall4, wall5, wall6]));
      setReady(false);
    }
  }, [ready, wall1, wall2, wall3, wall4, wall5, wall6]);

  const onSubmit = () => {
    setReady(true);
  };
  return useMemo(
    () => (
      <div>
        <Banner/>
        <Container>
          <First>
            <Fields
              wall1={wall1}
              wall2={wall2}
              wall3={wall3}
              wall4={wall4}
              wall5={wall5}
              wall6={wall6}
              onSubmit={onSubmit}
              update={update}
            />
          </First>
          <Second>
            <SecondPart />
          </Second>
        </Container>
      </div>
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
  @media screen and (max-width: 1366px) {
    top: 0vw;
  }
  @media screen and (max-width: 1200px) {
    margin: 180px 0 0 0;
    min-width: 100%;
    max-width: 100%;
    min-height: none;
    max-height: none;
  }
  @media screen and (max-width: 1024px) {
    margin: 240px 0 0 0;
    min-width: 102%;
    max-width: 102%;
    min-height: 100vh;
  }
  @media screen and (max-width: 768px) {
    min-width: 100%;
    max-width: 100%;
    min-height: 180vh;
    margin: 300px 0 0 0;
  }
  @media screen and (max-width: 768px) and (orientation: landscape) {
    min-height: 800px;
  }
  @media screen and (max-width: 600px) {
    min-width: 100%;
    max-width: 100%;
    min-height: 130vh;
  }
  @media screen and (max-width: 600px) and (orientation: landscape) {
    min-height: 700px;
  }
  @media screen and (max-height: 601px) and (orientation: landscape) {
    margin: 340px 0 0 0;
  }
  @media screen and (max-width: 420px) {
    min-width: 100%;
    max-width: 100%;
    min-height: auto;
  }
`;
const First = styled.div`
  height: auto !important;
  min-height: 100vh;
  max-height: 100vh;
  min-width: 52%;
  max-width: 52%;
  margin: 2vw 0 0 0;
  justify-content: center;
  @media screen and (max-width: 1200px) {
    margin: 5vw 0 0 0;
    min-width: 100%;
    max-width: 100%;
    min-height: none;
  }
  @media screen and (max-width: 1200px) and (orientation: landscape) {
    margin: 5vw 0 20% 0;
    min-width: 100%;
    max-width: 100%;
    min-height: 110vh;
  }
  @media screen and (max-width: 1024px) {
    margin: 5vw 0 0 0;
    min-height: 100vh;
  }
  @media screen and (max-width: 1024px) and (orientation: landscape) {
    margin: 5vw 0 0 0;
    padding: 0 0 20% 0;
    min-width: 100%;
    max-width: 100%;
    min-height: auto;
  }
  @media screen and (max-width: 900px) and (orientation: landscape) {
    margin: 5vw 0 0 0;
    padding: 0 0 40% 0;
    min-width: 100%;
    max-width: 100%;
    min-height: auto;
  }
  @media screen and (max-width: 768px) {
    margin: 5vw 0 0 0;
    padding: 0 0 30% 0;
    min-width: 100%;
    max-width: 100%;
    min-height: auto;
  }
  @media screen and (max-width: 768px) and (orientation: landscape) {
    margin: 5vw 0 0 0;
    min-width: 100%;
    padding: 0 0 80% 0;
    max-width: 100%;
    min-height: auto;
  }
  @media screen and (max-width: 700px) and (orientation: landscape) {
    margin: 5vw 0 0 0;
    min-width: 100%;
    max-width: 100%;
    padding: 0 0 90% 0;
    min-height: auto;
  }
  @media screen and (max-width: 600px) and (orientation: landscape) {
    margin: 5vw 0 0 0;
    padding: 0 0 140% 0;
    min-width: 100%;
    max-width: 100%;
    min-height: auto;
  }
  @media screen and (max-width: 600px) {
    margin: 5vw 0 0 0;
    padding: 0 0 20% 0;
    min-width: 100%;
    max-width: 100%;
    min-height: auto;
  }
  @media screen and (max-width: 600px) and (orientation: landscape) {
    padding: 0 0 90% 0;
  }
  @media screen and (max-width: 400px) {
    padding: 0 0 25% 0;
  }
  @media screen and (max-width: 380px) {
    padding: 0 0 30% 0;
  }
  @media screen and (max-width: 350px) {
    padding: 0 0 45% 0;
  }
  @media screen and (max-width: 330px) {
    padding: 0 0 58% 0;
  }
`;
