import React, { useReducer, useState } from "react";
import useItems from "../Hooks/Hooks";
import { FieldsInput } from "../refactor/FieldsInput";
import useInput from "../Hooks/Inputs";
import {
  ContainerHeader,
  ButtonRed,
  Button,
  InputItem,
  ColorsItem,
  Warning,
  Title,
  InputDiv,
} from "./style";

const ItemList = ({
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
      <FieldsInput />

      <Final>
        <Warning>*Tienes que llenar todos los campos</Warning>
        <ButtonRed onClick={calculateTotal}>Calcular</ButtonRed>
      </Final>
    </ContainerHeader>
  );
};
export default ItemList;
