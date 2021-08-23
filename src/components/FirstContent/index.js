import React, { useEffect, useReducer, useState } from "react";
import useItems from "../Hooks/Hooks";
import Tooltip from "../Tooltip/Tooltip";
import useInput from "../Hooks/Inputs";
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

const getFields = (fields) => fields.split('x')

const ItemList = ({ state, total, handleInput, calculateTotal }) => {
  const { item, imper, suma } = useItems();
  const [addOptions, setAddOptions] = useState([1])
  const [options, dispatch] = useReducer((s, a) => ({ ...s, ...a }), {
    door: [],
    window: [],
  })

  function appendInput() {
    setAddOptions(s => [...s, s.lenght])
  }

  function popInput() {
    setAddOptions(s => s.slice(1))
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
              <Image
                src={
                  "https://res.cloudinary.com/marcos020499/image/upload/v1629305105/ICO%CC%81NOS-01_s3i78l.svg"
                }
              />
              <H2>Colores</H2>
            </IconColor>
          </th>

          <th>
            <Icon>
              <ImageM
                src={
                  "https://res.cloudinary.com/marcos020499/image/upload/v1629305107/ICO%CC%81NOS-06_knbij5.svg"
                }
              />
              <Meters>
                <Small>Metros</Small>
                <H2>Largo</H2>
              </Meters>
            </Icon>
          </th>

          <th>
            <Icon>
              <ImageM
                src={
                  "https://res.cloudinary.com/marcos020499/image/upload/v1629305107/ICO%CC%81NOS-07_jzke1w.svg"
                }
              />
              <Meters>
                <Small>Metros</Small>
                <H2>Ancho</H2>
              </Meters>
            </Icon>
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
              <H2>{imper ? "Domos" : "Puertas"}</H2>
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
              <H2>{imper ? "Tragaluz" : "Ventanas"}</H2>
            </Icon>
          </th>
        </tr>
        {item.map((item1, index) => (
          <PaintContainer key={index}>
            <TdFirst>
              <Wall>
                <Radio type="radio" checked></Radio>
                <WallText>Pared {index + 1}</WallText>

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
                  <InputColor backgroundColor={imper ? "purple" : "black"} />
                </Tooltip>
              </Wall>
            </TdFirst>

            <Td>
              <Mts>
                <InputNumber
                  type='text'
                  value={state.input1}
                  name='input1'
                  onChange={handleInput}
                />
                mts
              </Mts>
            </Td>

            <Td>
              <Mts>
                <InputNumber
                  type='text'
                  value={state.input2}
                  name='input2'
                  onChange={handleInput} />
                mts
              </Mts>
            </Td>
            <Td>
              <Selectors>
                {addOptions.map((_, i) => {
                  return (
                    <InputObject key={i} index={i} total={total} length={addOptions.length} appendInput={appendInput} popInput={popInput} />
                  );
                })}
              </Selectors>
            </Td>

            <Td>
              <Selectors>
                {addOptions.map((_, i) => {
                  return (
                    <InputObject key={i} index={i} total={total} length={addOptions.length} appendInput={appendInput} popInput={popInput} />
                  );
                })}
              </Selectors>
            </Td>
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

function InputObject({ total, index, length, appendInput, popInput }) {
  return (
    <Options>
      <Mts>
        <ImageTable
          src={
            "https://res.cloudinary.com/marcos020499/image/upload/v1629305107/ICO%CC%81NOS-06_knbij5.svg"
          }
        />
        <InputNumber value={total} />
        mts
      </Mts>
      <Mts>
        <ImageTable
          src={
            "https://res.cloudinary.com/marcos020499/image/upload/v1629305107/ICO%CC%81NOS-07_jzke1w.svg"
          }
        />
        <InputNumber />
        mts
      </Mts>

      {index === 0 && (
        <Buttons>
          <ButtonIncrement
            onClick={() => {
              appendInput()
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
              popInput()
              //i = i - 1;
              //setAddOptions([...addOptions, i]);
            }}
            style={{ display: length === 1 ? "none" : "initial" }}
          >
            -
          </ButtonDecrement>
        </Buttons>)}
    </Options>
  )
}
