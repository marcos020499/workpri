import React, { useReducer, useState } from "react";
import useItems from "../Hooks/Hooks";
import {FieldsInput} from '../refactor/FieldsInput'
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
      <FieldsInput/>

      <Final>
        <Warning>*Tienes que llenar todos los campos</Warning>
        <ButtonRed onClick={calculateTotal}>Calcular</ButtonRed>
      </Final>
    </ContainerHeader>
  );
};
export default ItemList;
