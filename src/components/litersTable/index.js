import React from "react";

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
  ImageQuantity19L,
  ImageQuantity4L,
  ContainerItems,
  InputColorName,
  DescriptionText,
  Items,
  TdSize,
  ThDescription,
  Table
} from "./style";

const Liters = () => {
  return (
      <Table>
        <Items>
          <ContainerItems>
			  
            <Row>
              <ThDescription>
                <TooltipOver content={""} direction="top">
                  <DescriptionText>
                    <InputColorName style={{ backgroundColor: "blue" }} />
                    color azul
                  </DescriptionText>
                </TooltipOver>
              </ThDescription>
            </Row>

            <RowDes>
              <ThDescription>
                <Description>Area</Description>
                <InputArea type="text" value={0} readonly="readonly" />
              </ThDescription>

              <ThDescription>
                <Description>Litros</Description>
                <InputAreaLiters type="text" readonly="readonly" />
              </ThDescription>
            </RowDes>

            <RowRecipients>
              <TdSize>
                <Size>
                  <ImageQuantity19L
                    src={
                      "https://res.cloudinary.com/marcos020499/image/upload/v1629305104/BOTES_PINTURA-01_dae6zr.svg"
                    }
                  />
                  <Quantity>19L</Quantity>
                  <Input type="text" defaultValue="0" />
                </Size>
              </TdSize>

              <TdSize>
                <Size>
                  <ImageQuantity4L
                    src={
                      "https://res.cloudinary.com/marcos020499/image/upload/v1629305104/BOTES_PINTURA-02_wvzqnb.svg"
                    }
                  />
                  <Quantity>4L</Quantity>
                  <Input type="text" defaultValue="0" />
                </Size>
              </TdSize>

              <TdSize>
                <Size>
                  <ImageQuantity
                    src={
                      "https://res.cloudinary.com/marcos020499/image/upload/v1629305104/BOTES_PINTURA-02_wvzqnb.svg"
                    }
                  />
                  <Quantity>1L</Quantity>
                  <Input type="text" defaultValue="0" />
                </Size>
              </TdSize>
            </RowRecipients>
          </ContainerItems>
        </Items>
      </Table>
  );
};
export default Liters;
