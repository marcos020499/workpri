import React from "react";
import styled from "styled-components";

export function Tooltip({
  children,
  select,
  colors,
  visible,
  onSelect,
  onClose,
}) {
  return (
    <Container>
      {children}
      <Content visible={visible} onClick={onClose} />
      <Box visible={visible}>
        <P>Colores a elegir</P>
        <Row>
          {colors?.map((el, i) => (
            <BoxColor
              key={i}
              color={el}
              select={select}
              index={i}
              onClick={onSelect}
            />
          ))}
        </Row>
      </Box>
    </Container>
  );
}

const Container = styled.div`
  padding: none;
  margin: none;
  display: inline-block;
  top: 0;
  left: 0;
`;

const Content = styled.div`
  visibility: ${({ visible }) => (visible ? "initial" : "hidden")};
  position: fixed;
  width: 100vw;
  higith: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  line-height: 1;
  z-index: 2;
  top: 0;
  left: 0;
  rigth: 0;
  bottom: 0;
`;

const Box = styled.div`
  position: absolute;
  visibility: ${({ visible }) => (visible ? "initial" : "hidden")};
  background-color: white;
  border-radius: 6px;
  z-index: 3;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100px;
  height: 45px;
`;
const P = styled.p`
  color: #003366;
  font-size: 10px;
`;

function BoxColor({ index, color, select, onClick }) {
  // color, select
  function onSelect() {
    onClick(index);
  }

  return (
    <ColorContainer select={select} color={color} onClick={onSelect}>
      <ColorInner color={color} />
    </ColorContainer>
  );
}

const ColorContainer = styled.div`
  border: 2px solid
    ${({ select, color }) => `${select === color ? color : "black"}`};
  width: 23px;
  height: 23px;
  margin: auto;
`;

const ColorInner = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ color }) => `${color}`};
`;
