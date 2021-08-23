import React, { useEffect, useState, memo } from "react";
import useItems from "../Hooks/Hooks";
import useAlgorim from "../Hooks/Algoritm";
import useInput from "../Hooks/Inputs";
import {
  ContainerSecondSection,
  Image,
  InputArea,
  H1,
  H2,
  Description,
  Quantity,
  Input,
  PaintSize,
  Size,
  ButtonReed,
  ContainerButton,
  Banner,
  ImagePaint,
  ImageQuantity,
  Recipients,
  H,
  InputAreaLiters,
  ImageQuantity19L,
  ImageQuantity4L,
  ContainerItems,
  InputColorName,
  DescriptionText,
  Items,
  TrDes,
  TdSize,
  ThDescription,
} from "./style";
const SecondPart = ({ total }) => {
  const { item, imper, liters } = useItems();
  const { four, twenty, one } = useAlgorim();
  return (
    <ContainerSecondSection>
      <Banner
        src={
          "https://res.cloudinary.com/marcos020499/image/upload/v1629305103/BANNER_SUPERIOR-01-01_qc1rs2.png"
        }
      />
      <H1>RESULTADO</H1>
      <H2>PRISA TE RECOMIENDA</H2>
      <ImagePaint
        src={
          imper
            ? "https://res.cloudinary.com/marcos020499/image/upload/v1629305104/BANNER_SUPERIOR-02_okd6me.png"
            : "https://res.cloudinary.com/marcos020499/image/upload/v1629305104/BANNER_SUPERIOR-01_tlx0kg.png"
        }
      />
      <H>Elige la presentación </H>
      <PaintSize>
        <Items>
          {item.map((item, index) => (
            <ContainerItems key={index}>
              <tr>
                <ThDescription>
                  <DescriptionText>
                    <InputColorName
                      style={{ backgroundColor: `${item.color}` }}
                    />
                    {item.nombre}
                  </DescriptionText>
                </ThDescription>
              </tr>
              <TrDes>
                <ThDescription>
                  <Description>Area {total}</Description>
                  <InputArea type="text" value={total} />
                </ThDescription>

                <ThDescription>
                  <Description>Litros</Description>
                  <InputAreaLiters type="text" value={liters} />
                </ThDescription>
              </TrDes>

              <Recipients>
                <TdSize>
                  <Size>
                    <ImageQuantity19L
                      src={
                        "https://res.cloudinary.com/marcos020499/image/upload/v1629305104/BOTES_PINTURA-01_dae6zr.svg"
                      }
                    />
                    <Quantity>19L</Quantity>
                    <Input type="text" value={twenty} />
                  </Size>
                </TdSize>

                <TdSize>
                  <Size>
                    <ImageQuantity4L
                      src={
                        "https://res.cloudinary.com/marcos020499/image/upload/v1629305104/BOTES_PINTURA-01_dae6zr.svg"
                      }
                    />
                    <Quantity>4L</Quantity>
                    <Input type="number" value={four} />
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
                    <Input type="number" value={one} />
                  </Size>
                </TdSize>
              </Recipients>
            </ContainerItems>
          ))}
        </Items>
      </PaintSize>
      <ContainerButton>
        <ButtonReed>Comprar</ButtonReed>
      </ContainerButton>
    </ContainerSecondSection>
  );
};
export default memo(SecondPart);
