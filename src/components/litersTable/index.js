import React, { useEffect, useState } from "react";
import { useSelector} from "react-redux";
import TooltipOver from "../Tooltip/TooltipOver";

import {
  InputArea,
  Description,
  Quantity,
  Input,
  Size,
  ImageQuantity,
  Row,
  RowDes,
  RowRecipients,
  InputAreaLiters,
  ContainerItems,
  InputColorName,
  DescriptionText,
  Items,
  TdSize,
  ThDescription,
  Table,
} from "./style";

const Liters = ({
  nombre,
  rgb,
  area,
  litros,
  presentaciones,
  cantidad4_1L,
  cantidad4_2L,
  cantidad4_3L,
  cantidad1_1L,
  cantidad1_2L,
  cantidad1_3L,
  cantidad19_1L,
  cantidad19_2L,
  cantidad19_3L,
  onChanges,
  indSecond,
}) => {
  const stateColors = useSelector((state) => state.colors);
  const colors1 = stateColors.colores || [];
  const { result } = useSelector((state) => state);

  return (
    <div>
      <Table
        style={{
          margin:
            colors1.length === 2 || result.length === 2 ? "0 0 0 12%" : "auto",
        }}
      >
        <Items>
          <ContainerItems>
            <Row>
              <ThDescription>
                <TooltipOver content={nombre} direction="top">
                  <DescriptionText>
                    <InputColorName
                      disabled="disabled"
                      style={{ backgroundColor: rgb }}
                    />
                    {nombre}
                  </DescriptionText>
                </TooltipOver>
              </ThDescription>
            </Row>
            <RowDes>
              <ThDescription>
                <Description>Area</Description>
                <InputArea
                  type="text"
                  value={area + " mts"}
                  readonly="readonly"
                />
              </ThDescription>

              <ThDescription>
                <Description>Litros</Description>
                <InputAreaLiters
                  type="text"
                  value={litros + " lts"}
                  readonly="readonly"
                />
              </ThDescription>
            </RowDes>
            <RowRecipients>
              {presentaciones.map((ele, index) =>
                index <= ele.presentacion_id ? (
                  <Can
                    key={index + "presentaciones"}
                    {...ele}
                    i={indSecond}
                    state4_1={cantidad4_1L}
                    state4_2={cantidad4_2L}
                    state4_3={cantidad4_3L}
                    state1_1={cantidad1_1L}
                    state1_2={cantidad1_2L}
                    state1_3={cantidad1_3L}
                    state19_1={cantidad19_1L}
                    state19_2={cantidad19_2L}
                    state19_3={cantidad19_3L}
                    onChanges1={onChanges}
                  />
                ) : null
              )}
            </RowRecipients>
          </ContainerItems>
        </Items>
      </Table>
    </div>
  );
};
export default Liters;

function Can({
  litros,
  cantidad,
  state4_1,
  state4_2,
  state4_3,
  state1_1,
  state1_2,
  state1_3,
  state19_1,
  state19_2,
  state19_3,
  onChanges1,
  i,
}) {
  const name = {
    _1: "1L",
    _4: "4L",
    _19: "19L",
  }["_" + litros];
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  useEffect(() => {
    width < 768 && handleSideNavToggle();
  }, [width]);
  function handleSideNavToggle() {
    console.log("toggle it");
  }
  return (
    <TdSize>
      <Size>
        <ImageQuantity
          src={
            litros === 19
              ? "https://res.cloudinary.com/marcos020499/image/upload/v1629305104/BOTES_PINTURA-01_dae6zr.svg"
              : "https://res.cloudinary.com/marcos020499/image/upload/v1629305104/BOTES_PINTURA-02_wvzqnb.svg"
          }
          size={litros}
          style={{
            position: "relative",
            left: litros === 1 ? "-10%" : litros === 4 ? "-22%" : "-25%",
          }}
        />
        <Quantity>{name}</Quantity>
        {width > 768 ? (
        <Input
        type="number"
        min="0"
        max="10"
        defaultValue="0"
        step="1"
        value={
          litros === 4 && i === 0
            ? state4_1 === 0
              ? cantidad
              : state4_1
            : litros === 4 && i === 1
            ? state4_2 === 0
              ? cantidad
              : state4_2
            : litros === 4 && i === 2
            ? state4_3 === 0
              ? cantidad
              : state4_3
            : litros === 1 && i === 0
            ? state1_1 === 0
              ? cantidad
              : state1_1
            : litros === 1 && i === 1
            ? state1_2 === 0
              ? cantidad
              : state1_2
            : litros === 1 && i === 2
            ? state1_3 === 0
              ? cantidad
              : state1_3
            : litros === 19 && i === 0
            ? state19_1 === 0
              ? cantidad
              : state19_1
            : litros === 19 && i === 1
            ? state19_2 === 0
              ? cantidad
              : state19_2
            : litros === 19 && i === 2
            ? state19_3 === 0
              ? cantidad
              : state19_3
            : cantidad
        }
        name={
          litros === 19 && i === 0
            ? "cantidad19_1L"
            : litros === 19 && i === 1
            ? "cantidad19_2L"
            : litros === 19 && i === 2
            ? "cantidad19_3L"
            : litros === 4 && i === 0
            ? "cantidad4_1L"
            : litros === 4 && i === 1
            ? "cantidad4_2L"
            : litros === 4 && i === 2
            ? "cantidad4_3L"
            : litros === 1 && i === 0
            ? "cantidad1_1L"
            : litros === 1 && i === 1
            ? "cantidad1_2L"
            : litros === 1 && i === 2
            ? "cantidad1_3L"
            : ""
        }
        onChange={onChanges1}
      />
      ) : (
        <select  
        value={
          litros === 4 && i === 0
            ? state4_1 === 0
              ? cantidad
              : state4_1
            : litros === 4 && i === 1
            ? state4_2 === 0
              ? cantidad
              : state4_2
            : litros === 4 && i === 2
            ? state4_3 === 0
              ? cantidad
              : state4_3
            : litros === 1 && i === 0
            ? state1_1 === 0
              ? cantidad
              : state1_1
            : litros === 1 && i === 1
            ? state1_2 === 0
              ? cantidad
              : state1_2
            : litros === 1 && i === 2
            ? state1_3 === 0
              ? cantidad
              : state1_3
            : litros === 19 && i === 0
            ? state19_1 === 0
              ? cantidad
              : state19_1
            : litros === 19 && i === 1
            ? state19_2 === 0
              ? cantidad
              : state19_2
            : litros === 19 && i === 2
            ? state19_3 === 0
              ? cantidad
              : state19_3
            : cantidad
        }
        name={
          litros === 19 && i === 0
            ? "cantidad19_1L"
            : litros === 19 && i === 1
            ? "cantidad19_2L"
            : litros === 19 && i === 2
            ? "cantidad19_3L"
            : litros === 4 && i === 0
            ? "cantidad4_1L"
            : litros === 4 && i === 1
            ? "cantidad4_2L"
            : litros === 4 && i === 2
            ? "cantidad4_3L"
            : litros === 1 && i === 0
            ? "cantidad1_1L"
            : litros === 1 && i === 1
            ? "cantidad1_2L"
            : litros === 1 && i === 2
            ? "cantidad1_3L"
            : ""
        }
        onChange={onChanges1} >
          <option value="0" disabled='disabled'>0</option>
          <option value="1">1</option>
          <option value="2" >2</option>
          <option value="3">3</option>
          <option value="4" >4</option>
          <option value="5" >5</option>
          <option value="1">6</option>
          <option value="2" >7</option>
          <option value="3">8</option>
          <option value="4" >9</option>
          <option value="5" >10</option>
    </select>
      )}
      
      </Size>
    </TdSize>
  );
}
