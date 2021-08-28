import React, { useReducer, useState } from "react";
import useItems from "../Hooks/Hooks";
import ScreenTest2 from "../ScreenTest2";
import ScreenTest1 from "../ScreenTest1";
import ScreenTest3 from "../ScreenTest3";
import ScreenTest4 from "../ScreenTest4";
import ScreenTest5 from "../ScreenTest5";
import ScreenTestImper from "../ScreenTestImper";
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
  Radior,
  ButtonDiv,
  InputDiv,
  IconColor,
  ImageTable,
  Smallm,
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
  H2Puertas,
  Mtss,
  WallContainer,
} from "./style";

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
  const props1 = useInput();
  const props = useInput();
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
          {item.map(
            (item, index) =>
              index <= 2 && (
                <ColorsItem key={index}>
                  <InputItem style={{ backgroundColor: `${item.color}` }} />
                </ColorsItem>
              )
          )}
        </div>
        <Button>Borrar todo</Button>
      </InputDiv>
      <Table>
        <tr>
          <th style={{ paddingBottom: "40px" }}>
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
                <Smallm>Metros</Smallm>
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
                <Smallm>Metros</Smallm>
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
          <ScreenTest1/>
          <ScreenTest2 />
          <ScreenTest3/>
          <ScreenTest4 />
          <ScreenTest5 />
      </Table>

      <Final>
        <Warning>*Tienes que llenar todos los campos</Warning>
        <ButtonRed onClick={calculateTotal}>Calcular</ButtonRed>
      </Final>
    </ContainerHeader>
  );
};
export default ItemList;
