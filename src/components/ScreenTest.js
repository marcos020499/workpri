import React, { useReducer, useState } from 'react'
import {
    H2,
    Td,
    WallText,
    InputNumber,
    InputColor,
    Icon,
    Image,
    Wall,
    Selectors,
    Table,
    ColorsItem,
    Mts,
    Radio,
    IconColor,
    Small,
    ImageM,
    Meters,
    InputColorTooltip,
    PaintContainer,
    TdFirst,
    ButtonDecrement,
    ButtonIncrement,
    ImageTable,
    Buttons,
    Options
  } from "../components/FirstContent/style";
  import Tooltip from "./Tooltip/Tooltip";
/*
[
  { pared1: {
    width: 0,
    height: 0,
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

const useInput = () => {
    const [inputs, dispatch] = useReducer((s, a) => ({ ...s, ...a }), {})
    const [inputKeys, setKeys] = useState([])

    const handleInput = ({ target }) => {
        dispatch({ [target.name]: parseInt(target.value) || 0 })
    }

    const appendInput = (key) => {
        setKeys(s => [...s, key])
    }

    const popInput = () => {
        setKeys(s => s.slide(1))
    }

    return { inputs, inputKeys, handleInput, appendInput, popInput }
}

export default function ScreenTest({ state, handleInput, appendInput, popInput, total }) {
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
        <div>
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
                   "https://res.cloudinary.com/marcos020499/image/upload/v1629305105/ICO%CC%81NOS-02_xhsnm8.svg"
                }
              />
              <H2>"Puertas"</H2>
            </Icon>
          </th>
          <th>
            <Icon>
              <Image
                src={
                   "https://res.cloudinary.com/marcos020499/image/upload/v1629305106/ICO%CC%81NOS-03_p6l5gd.svg"
                }
              />
              <H2>"Ventanas"</H2>
            </Icon>
          </th>
        </tr>

          <PaintContainer>
            <TdFirst>
              <Wall>
                <Radio type="radio" checked></Radio>
                <WallText>Pared 1</WallText>

                <Tooltip
                  content={
                    <div>
                      <small>Colores a elegir</small>
                      <div>

                          <ColorsItem >
                            <InputColorTooltip
                              style={{ backgroundColor: 'blue' }}
                            />
                          </ColorsItem>

                      </div>
                    </div>
                  }
                  direction="right"
                >
                  <InputColor backgroundColor={"black"} />
                </Tooltip>
              </Wall>
            </TdFirst>

            <Td>
              <Mts>
                <InputNumber/>
                mts
              </Mts>
            </Td>

            <Td>
              <Mts>
                <InputNumber/>
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
      </Table>
        </div>
    )
}
/*
<tr>
                        <td>{[1, 2, 3, 4].map((_, i) => <Input key={i} />)}</td>
                    </tr>
                    <tr>
                        <td>{[1, 2, 3, 4].map((_, i) => <Input key={i} />)}</td>
                    </tr>*/
function Input() {
    return <input type="input" />
}
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
  