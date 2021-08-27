import React, { useReducer, useState } from "react";
import {
  H2,
  Td,
  WallText,
  InputNumber,
  InputColor,
  Icon,
  Image,
  Wall,
  Table,
  ColorsItem,
  Radior,
  IconColor,
  Smallm,
  ImageM,
  Meters,
  InputColorTooltip,
  PaintContainer,
  TdFirst,
  ButtonDecrement,
  ButtonIncrement,
  ImageTable,
  Options,
  IconMeter,
  H2Color,
} from "../components/FirstContent/style";
import Tooltip from "./Tooltip/Tooltip";
import styled from "styled-components";
/*
[
  { pared1: {
    width: 0,
    height: 0,
    door: [
      '2x2', ------
      '3x3',
    ]
    window: [
      '2x2', ...
    ]
  }}
]
*/

const useInput = () => {
  const [inputs, dispatch] = useReducer((s, a) => ({ ...s, ...a }), {});
  const [inputKeys, setKeys] = useState([]);

  const handleInput = ({ target }) => {
    dispatch({ [target.name]: parseInt(target.value) || 0 });
  };

  const appendInput = (key) => {
    setKeys((s) => [...s, key]);
  };

  const popInput = () => {
    setKeys((s) => s.slide(1));
  };

  return { inputs, inputKeys, handleInput, appendInput, popInput };
};

const url = {
  Colores:
    "https://res.cloudinary.com/marcos020499/image/upload/v1629305105/ICO%CC%81NOS-01_s3i78l.svg",
  Largo:
    "https://res.cloudinary.com/marcos020499/image/upload/v1629305107/ICO%CC%81NOS-06_knbij5.svg",
  Ancho:
    "https://res.cloudinary.com/marcos020499/image/upload/v1629305107/ICO%CC%81NOS-07_jzke1w.svg",
  Puertas:
    "https://res.cloudinary.com/marcos020499/image/upload/v1629305105/ICO%CC%81NOS-02_xhsnm8.svg",
  Ventanas:
    "https://res.cloudinary.com/marcos020499/image/upload/v1629305106/ICO%CC%81NOS-03_p6l5gd.svg",
};

const columns = [
  {
    title: "Colores",
    image: url["Colores"],
    size: false,
    end: true,
  },
  {
    title: "Largo",
    image: url["Largo"],
    size: true,
  },
  {
    title: "Ancho",
    image: url["Ancho"],
    size: true,
  },
  {
    title: "Puertas",
    image: url["Puertas"],
    size: false,
  },
  {
    title: "Ventanas",
    image: url["Ventanas"],
    size: false,
  },
];

export default function ScreenTest({
  state,
  handleInput,
  appendInput,
  popInput,
  total,
}) {
  const [addOptions, setAddOptions] = useState([1]);
  const [options, dispatch] = useReducer((s, a) => ({ ...s, ...a }), {
    door: [],
    window: [],
  });

  function appendInput() {
    setAddOptions((s) => [...s, s.lenght]);
  }

  function popInput() {
    setAddOptions((s) => s.slice(1));
  }

  return (
    <div>
      <Table>
        <tr>
          {columns.map((el, i) => (
            <th>
              <HeaderCol key={i} {...el} />
            </th>
          ))}
        </tr>

        <PaintContainer>
          <TdFirst>
            <FirstCol />
          </TdFirst>

          <Td>
            <Input />
          </Td>

          <Td>
            <Input />
          </Td>
          <Td>
            <Selectors>
              {addOptions.map((_, i) => {
                return (
                  <InputObject
                    key={i}
                    index={i}
                    total={total}
                    length={addOptions.length}
                    appendInput={appendInput}
                    popInput={popInput}
                  />
                );
              })}
            </Selectors>
          </Td>

          <Td>
            <Selectors>
              {addOptions.map((_, i) => {
                return (
                  <InputObject
                    key={i}
                    index={i}
                    total={total}
                    length={addOptions.length}
                    appendInput={appendInput}
                    popInput={popInput}
                  />
                );
              })}
            </Selectors>
          </Td>
        </PaintContainer>
      </Table>
    </div>
  );
}

function InputObject({ total, index, length, appendInput, popInput }) {
  return (
    <Options>
      <Input icon="vertical" />
      <Input icon="horizontal" />

      {index === 0 && (
        <Buttons>
          <ButtonIncrement
            onClick={() => {
              appendInput();
              //i = i + 1;
              //setAddOptions([...addOptions, i]);
              //console.log(addOptions);
            }}
            style={{ display: length > 3 ? "none" : "initial" }}
          >
            +
          </ButtonIncrement>
          <ButtonDecrement
            onClick={() => {
              popInput();
              //i = i - 1;
              //setAddOptions([...addOptions, i]);
            }}
            style={{ display: length === 1 ? "none" : "initial" }}
          >
            -
          </ButtonDecrement>
        </Buttons>
      )}
    </Options>
  );
}

function HeaderCol({ title, size, end, image, disable }) {
  const Container = HeaderContainer;
  const TitleContainer = LabelContainer;
  const TitleAlign = H2;

  function Label() {
    return (
      <TitleContainer>
        {size ? <Smallm>Metro</Smallm> : <Smallm>‏‏‎ ‎</Smallm>}
        <TitleAlign>{title}</TitleAlign>
      </TitleContainer>
    );
  }

  return !disable ? (
    <Container end={end}>
      <Box>
        <IconImage src={image} />
        <Label />
      </Box>
    </Container>
  ) : (
    <></>
  );
}

function FirstCol() {
  return (
    <Wall>
      <Radior type="radio" checked />
      <WallText>Pared 1</WallText>

      <Tooltip
        content={
          <div>
            <small>Colores a elegir</small>
            <div>
              <ColorsItem>
                <InputColorTooltip style={{ backgroundColor: "blue" }} />
              </ColorsItem>
            </div>
          </div>
        }
        direction="right"
      >
        <InputColor />
      </Tooltip>
    </Wall>
  );
}

function Input({ icon }) {
  const img = {
    vertical:
      "https://res.cloudinary.com/marcos020499/image/upload/v1629305107/ICO%CC%81NOS-06_knbij5.svg",
    horizontal:
      "https://res.cloudinary.com/marcos020499/image/upload/v1629305107/ICO%CC%81NOS-07_jzke1w.svg",
  };

  return (
    <Mts>
      {!!icon && <ImageTable src={img[icon]} />}
      <InputNumber />
      mts
    </Mts>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Radikal1";
  align-items: ${({ end }) => (end ? "flex-end" : "center")};
`;

const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconImage = styled.img`
  margin: none;
  padding: none;
  width: 5vh;
  height: 5vh;
  align-self: center;
`;
const Mts = styled.p`
  font-family: "Radikal1";
  font-size: 10px;
  margin: 0 0 0 0.3vw;
  color: #003366;
  media screen and (max-width: 768px) {
    font-size: 20px;
  }
  @media screen and (max-width: 1367px) {
    font-size: 1vh;
    position: relative;
  }
`;
const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 0 0 0 1vh;
  padding: 0 1vh 0 1.5vh;
  @media screen and (max-width: 1367px) {
    position: relative;
  }
`;
const Selectors = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Radikal1";
  @media screen and (max-width: 1367px) {
  }
  media screen and (max-width: 768px) {
    justify-content: space-between;
  }
`;
