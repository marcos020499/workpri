import React, { useEffect, useReducer, useState } from "react";
import useItems from "../Hooks/Hooks";
import Tooltip from "../Tooltip/Tooltip";

import {
  ContainerHeader,
  H2,
  Td,
  WallText,
  InputNumber,
  ButtonRed,
  InputColor,
  Icon,
  Image,
  Button,
  Wall,
  ButtonIncrement,
  ButtonDecrement,
  Buttons,
  Selectors,
  Table,
  A,
  InputItem,
  ColorsItem,
  Mts,
  Warning,
  Title,
  Radio,
  ButtonDiv,
  InputDiv,
  IconColor,
  ImageTable,
  Small,
  ImageM,
  Final,
  Meters,
  InputColorTooltip,
  PaintContainer,
  TdFirst,
  Options,
  IconMeter,
  ImageColor,
  H2Color,
  H2Puertas
} from "./style";

/*
[
  { pared1: {
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

const getFields = (fields) => fields.split("x");

const ItemList = ({
  state,
  total0,
  total1,
  total2,
  total3,
  handleInput,
  calculateTotal,
}) => {
  const { item, imper } = useItems();
  const [addOptions, setAddOptions] = useState([1]);
  const [options, dispatch] = useReducer((s, a) => ({ ...s, ...a }), {
    door: [],
    window: [],
  });
  const x = 1;
  function appendInput() {
    setAddOptions((s) => [...s, s.lenght]);
  }

  function popInput() {
    setAddOptions((s) => s.slice(1));
  }

  return (
    <ContainerHeader>
      <Title>COLORES SELECCIONADOS</Title>
      <InputDiv>
        <div>
          {item.map((item, index) => (
            <ColorsItem key={index}>
              <InputItem style={{ backgroundColor: `${item.color}` }} />
            </ColorsItem>
          ))}
        </div>
        <Button>Borrar todo</Button>
      </InputDiv>
      <Table>
        <tr>
          <th>
            <IconColor>
              <ImageColor
                src={
                  "https://res.cloudinary.com/marcos020499/image/upload/v1629305105/ICO%CC%81NOS-01_s3i78l.svg"
                }
              />
              <H2Color>Colores</H2Color>
            </IconColor>
          </th>

          <th>
            <IconMeter>
              <ImageM
                src={
                  "https://res.cloudinary.com/marcos020499/image/upload/v1629305107/ICO%CC%81NOS-06_knbij5.svg"
                }
              />
              <Meters>
                <Small>Metros</Small>
                <H2>Largo</H2>
              </Meters>
            </IconMeter>
          </th>

          <th>
            <IconMeter>
              <ImageM
                src={
                  "https://res.cloudinary.com/marcos020499/image/upload/v1629305107/ICO%CC%81NOS-07_jzke1w.svg"
                }
              />
              <Meters>
                <Small>Metros</Small>
                <H2>Ancho</H2>
              </Meters>
            </IconMeter>
          </th>
          <th>
            <Icon>
              <Image
                src={
                  imper
                    ? "https://res.cloudinary.com/marcos020499/image/upload/v1629305106/ICO%CC%81NOS-04_j8euvm.svg"
                    : "https://res.cloudinary.com/marcos020499/image/upload/v1629305105/ICO%CC%81NOS-02_xhsnm8.svg"
                }
              />
              <H2Puertas>{imper ? "Domos" : "Puertas"}</H2Puertas>
            </Icon>
          </th>
          <th>
            <Icon>
              <Image
                src={
                  imper
                    ? "https://res.cloudinary.com/marcos020499/image/upload/v1629305107/ICO%CC%81NOS-05_xqp9kd.svg"
                    : "https://res.cloudinary.com/marcos020499/image/upload/v1629305106/ICO%CC%81NOS-03_p6l5gd.svg"
                }
              />
              <H2Puertas>{imper ? "Tragaluz" : "Ventanas"}</H2Puertas>
            </Icon>
          </th>
        </tr>
        {item.map((item1, index) => (
          <PaintContainer key={index}>
            <TdFirst>
              <Wall>
                <Radio type="radio" checked></Radio>
                <WallText>{imper ? "Azotea" : `Pared ${index + 1}`}</WallText>

                <Tooltip
                  content={
                    <div>
                      <small>Colores a elegir</small>
                      <div>
                        {item.map((item, index) => (
                          <ColorsItem key={index}>
                            <InputColorTooltip
                              style={{ backgroundColor: `${item.color}` }}
                            />
                          </ColorsItem>
                        ))}
                      </div>
                    </div>
                  }
                  direction="right"
                >
                  <InputColor
                    style={{
                      backgroundColor: imper ? `${item1.color}` : "white",
                    }}
                  />
                </Tooltip>
              </Wall>
            </TdFirst>

            <Td>
              <Mts>
                <InputNumber
                  type="text"
                  value={state.input1}
                  name={`${"input1"}${index}`}
                  onChange={handleInput}
                />
                mts
              </Mts>
            </Td>

            <Td>
              <Mts>
                <InputNumber
                  type="text"
                  value={state.input2}
                  name={`${"input2"}${index}`}
                  onChange={handleInput}
                />
                mts
              </Mts>
            </Td>
            <Td>
              <Selectors>
                {addOptions.map((_, i) => {
                  return i === 0 ? (
                    <Buttons>
                      <ButtonIncrement
                        onClick={() => {
                          appendInput();
                          //i = i + 1;
                          //setAddOptions([...addOptions, i]);
                          //console.log(addOptions);
                        }}
                        style={{
                          display: addOptions.length > 4 ? "none" : "initial",
                        }}
                      >
                        +
                      </ButtonIncrement>
                      <ButtonDecrement
                        onClick={() => {
                          popInput();
                          //i = i - 1;
                          //setAddOptions([...addOptions, i]);
                        }}
                        style={{
                          display: addOptions.length === 1 ? "none" : "initial",
                        }}
                      >
                        -
                      </ButtonDecrement>
                    </Buttons>
                  ) : (
                    <InputObject
                    key={i}
                    x={i+11}
                    y={ index === 0 ? 1 : index === 1 ? 2: index===3 ? 3: +'' }
                    index={i}
                    ind={index}
                    total={addOptions.totall}
                    length={addOptions.length}
                    appendInput={appendInput}
                    popInput={popInput}
                    state={state.int62}
                    onCh={handleInput}
                    />
                  );
                })}
              </Selectors>
            </Td>

            <td>
              <Selectors>
                {addOptions.map((_, i) => {
                  return i === 0 ? (
                    <Buttons>
                      <ButtonIncrement
                        onClick={() => {
                          appendInput();
                          //i = i + 1;
                          //setAddOptions([...addOptions, i]);
                          //console.log(addOptions);
                        }}
                        style={{
                          display: addOptions.length > 3 ? "none" : "initial",
                        }}
                      >
                        +
                      </ButtonIncrement>
                      <ButtonDecrement
                        onClick={() => {
                          popInput();
                          //i = i - 1;
                          //setAddOptions([...addOptions, i]);
                        }}
                        style={{
                          display: addOptions.length === 1 ? "none" : "initial",
                        }}
                      >
                        -
                      </ButtonDecrement>
                    </Buttons>
                  ) : (
                    <InputObject
                      key={i}
                      x={i+54}
                      y={ index === 0 ? 1 : index === 1 ? 2: index===3 ? 3: +'' }
                      index={i}
                      ind={index}
                      total={addOptions.totall}
                      length={addOptions.length}
                      appendInput={appendInput}
                      popInput={popInput}
                      state2={state.int7}
                      onCh={handleInput}
                    />
                  );
                })}
              </Selectors>
            </td>
          </PaintContainer>
        ))}
      </Table>

      <Final>
        <Warning>*Tienes que llenar todos los campos</Warning>
        <ButtonRed onClick={calculateTotal}>Calcular</ButtonRed>
      </Final>
    </ContainerHeader>
  );
};
export default ItemList;

function InputObject({ x, y ,ind, index, length, appendInput, popInput, state1, state2, handleI, onCh }) {
  return (
    <Options>
      <Mts>
        <ImageTable
          src={
            "https://res.cloudinary.com/marcos020499/image/upload/v1629305107/ICO%CC%81NOS-06_knbij5.svg"
          }
        />
        <InputNumber type='text' value={state1} name={`${'int'}${ind*4+x +50}`} onChange={onCh}/>
        mts
      </Mts>
      <Mts>
        <ImageTable
          src={
            "https://res.cloudinary.com/marcos020499/image/upload/v1629305107/ICO%CC%81NOS-07_jzke1w.svg"
          }
        />
        <InputNumber  type='text'  value={state2} name={`${'int'}${ind*4+x -5}`} onChange={onCh}/>
        mts
      </Mts>

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
