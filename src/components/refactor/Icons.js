import React from "react";
import styled from "styled-components";

export function Icons({ name, size }) {
  const icon = {
    colors:
      "https://res.cloudinary.com/marcos020499/image/upload/v1629305105/ICO%CC%81NOS-01_s3i78l.svg",
    vertical:
      "https://res.cloudinary.com/marcos020499/image/upload/v1629305107/ICO%CC%81NOS-06_knbij5.svg",
    horizontal:
      "https://res.cloudinary.com/marcos020499/image/upload/v1629305107/ICO%CC%81NOS-07_jzke1w.svg",
    door: "https://res.cloudinary.com/marcos020499/image/upload/v1629305105/ICO%CC%81NOS-02_xhsnm8.svg",
    domo: "https://res.cloudinary.com/marcos020499/image/upload/v1629305106/ICO%CC%81NOS-04_j8euvm.svg",
    tragaluz:"https://res.cloudinary.com/marcos020499/image/upload/v1629305107/ICO%CC%81NOS-05_xqp9kd.svg",
    window:
      "https://res.cloudinary.com/marcos020499/image/upload/v1629305106/ICO%CC%81NOS-03_p6l5gd.svg",
  }[name];

  return <ImageLoader src={icon} size={size} />;
}

const ImageLoader = styled.img`
  margin: none;
  padding: none;
  ${({ size }) => `width: ${size}px; height: ${size}px;`}
`;
