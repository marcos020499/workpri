import PropType from "prop-types";
import React, { useState } from "react";
import useItems from "./Hooks";
import Tooltip from "../Tooltip/Tooltip";
import {
  ColorsItem,
  InputColorTooltip,
  InputColor,
} from "../FirstContent/style";
const InputColor1 = (props) => {
  const colors = ["red", "blue", "yellow", "green"];
  const [color, setColor] = useState(null);
  const { item } = useItems();
  return (
    <>
      <Tooltip
        content={
          <div>
            <small>Colores a elegir</small>

            <select value={color} onChange={(e) => setColor(e.target.value)}>
              {item.map((color, index) => (
                <option
                  value={color.color}
                  style={{ backgroundColor: `${color.color}` }}
                ></option>
              ))}
            </select>
          </div>
        }
        direction="right"
      >
        <InputColor
          onChange={(e) => setColor(e.target.value)}
          value={color}
          style={{ backgroundColor: `${color}` }}
        />
      </Tooltip>

      <select value={color} onChange={(e) => setColor(e.target.value)}>
        {item.map((color, index) => (
          <option
            value={color.color}
            style={{ backgroundColor: "blue", color: "blue" }}
          ></option>
        ))}
      </select>
    </>
  );
};
export default InputColor1;
