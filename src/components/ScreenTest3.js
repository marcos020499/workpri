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
  Selectors,
  Buttons,
  WallContainer,
  Mts,
  Mtss,
} from "../components/FirstContent/style";
import Tooltip from "./Tooltip/Tooltip";
import styled from "styled-components";
import useItems from "./Hooks/Hooks";
import useInput from "./Hooks/Inputs";

const ScreenTest2 = ({ }) => {
  const [addOptions, setAddOptions] = useState([1]);
  const [addOptions1, setAddOptions1] = useState([1]);
  const { item } = useItems();
  function appendInput() {
    setAddOptions((s) => [...s, s.lenght]);
  }
  const { state, handleInput } = useInput()
  function popInput() {
    setAddOptions((s) => s.slice(1));
  }
  function appendInput1() {
    setAddOptions1((s) => [...s, s.lenght]);
  }

  function popInput1() {
    setAddOptions1((s) => s.slice(1));
  }

  return (
    <div>
      <table>
        {item.map(
          (item1, index) =>
            index ===   2 && (
              <PaintContainer>
                <TdFirst>
                  <Wall>
                    <WallContainer>
                      <Radior type="radio" checked={index <= 2 ? true : ""} />
                      <WallText
                        style={{ color: index >= 3 ? "#999999" : "initial" }}
                      >
                        Pared {index + 1}
                      </WallText>
                    </WallContainer>
                    <Tooltip
                  content={
                    <div>
                      <small>Colores a elegir</small>
                      <div>
                        {item.map((item, index) => index <= 2 && ((
                          <ColorsItem key={index}>
                            <InputColorTooltip
                              style={{ backgroundColor: `${item.color}` }}
                            />
                          </ColorsItem>
                        )))}
                      </div>
                    </div>
                  }
                  direction="right"
                >
                  <InputColor
                    style={{
                      backgroundColor:`${item.color}`
                    }}
                  />
                </Tooltip>
                  </Wall>
                </TdFirst>
                <Td>
                  <Mts>
                    <InputNumber
                      type="number"
                      min="1"
                      max="10"
                      step="0.5"
                      defaultValue="3"
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
                      type="number"
                      min="1"
                      max="10"
                      step="0.5"
                      defaultValue="2"
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
                              display:
                                addOptions.length > 4 ? "none" : "initial",
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
                              display:
                                addOptions.length === 1 ? "none" : "initial",
                            }}
                          >
                            -
                          </ButtonDecrement>
                        </Buttons>
                      ) : (
                        <InputObject
                          key={i}
                          x={i + 11}
                          y={
                            index === 0
                              ? 1
                              : index === 1
                              ? 2
                              : index === 3
                              ? 3
                              : +""
                          }
                          index={i}
                          ind={index}
                          total={addOptions.totall}
                          length={addOptions.length}
                          appendInput={appendInput}
                          popInput={popInput}
                          state1={state.int62}
                          onCh={handleInput}
                        />
                      );
                    })}
                  </Selectors>
                </Td>

                <td>
                  <Selectors>
                    {addOptions1.map((_, i) => {
                      return i === 0 ? (
                        <Buttons>
                          <ButtonIncrement
                            onClick={() => {
                              appendInput1();
                              //i = i + 1;
                              //setAddOptions([...addOptions, i]);
                              //console.log(addOptions);
                            }}
                            style={{
                              display:
                                addOptions1.length > 3 ? "none" : "initial",
                            }}
                          >
                            +
                          </ButtonIncrement>
                          <ButtonDecrement
                            onClick={() => {
                              popInput1();
                              //i = i - 1;
                              //setAddOptions([...addOptions, i]);
                            }}
                            style={{
                              display:
                                addOptions1.length === 1 ? "none" : "initial",
                            }}
                          >
                            -
                          </ButtonDecrement>
                        </Buttons>
                      ) : (
                        <InputObject1
                          key={i}
                          x={i + 54}
                          y={
                            index === 0
                              ? 1
                              : index === 1
                              ? 2
                              : index === 3
                              ? 3
                              : +""
                          }
                          index={i}
                          ind={index}
                          total={addOptions1.totall}
                          length={addOptions1.length}
                          appendInput1={appendInput1}
                          popInput1={popInput1}
                          state2={state.int7}
                          onCh={handleInput}
                        />
                      );
                    })}
                  </Selectors>
                </td>
                </PaintContainer>
            )
        )}
      </table>
    </div>
  );
};
export default ScreenTest2;
function InputObject({
  total,
  index,
  length,
  appendInput,
  popInput,
  onCh,
  state1,
  state2,
}) {
  return (
    <Options>
      <Mtss>
        <ImageTable
          src={
            "https://res.cloudinary.com/marcos020499/image/upload/v1629305107/ICO%CC%81NOS-06_knbij5.svg"
          }
        />
        <InputNumber
          type="number"
          value={state1}
          name={`${"int"}${index}`}
          onChange={onCh}
          defaultValue="1"
          min="1"
          max="5"
          step="0.5"
        />
        mts
      </Mtss>
      <Mtss>
        <ImageTable
          src={
            "https://res.cloudinary.com/marcos020499/image/upload/v1629305107/ICO%CC%81NOS-07_jzke1w.svg"
          }
        />
        <InputNumber
          type="number"
          value={state2}
          name={`${"int"}${index}`}
          onChange={onCh}
          defaultValue="2"
          min="1"
          max="5"
          step="0.5"
        />
        mts
      </Mtss>
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
function InputObject1({
  total,
  index,
  length,
  appendInput1,
  popInput1,
  state1,
  state2,
  onCh,
}) {
  return (
    <Options>
      <Mtss>
        <ImageTable
          src={
            "https://res.cloudinary.com/marcos020499/image/upload/v1629305107/ICO%CC%81NOS-06_knbij5.svg"
          }
        />
        <InputNumber
          type="number"
          value={state1}
          name={`${"int"}${index}`}
          onChange={onCh}
          defaultValue="1"
          min="1"
          max="5"
          step="0.5"
        />
        mts
      </Mtss>
      <Mtss>
        <ImageTable
          src={
            "https://res.cloudinary.com/marcos020499/image/upload/v1629305107/ICO%CC%81NOS-07_jzke1w.svg"
          }
        />
        <InputNumber
          type="number"
          value={state2}
          name={`${"int"}${index}`}
          onChange={onCh}
          defaultValue="2"
          min="1"
          max="5"
          step="0.5"
        />
        mts
      </Mtss>
      {index === 0 && (
        <Buttons>
          <ButtonIncrement
            onClick={() => {
              appendInput1();
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
              popInput1();
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
