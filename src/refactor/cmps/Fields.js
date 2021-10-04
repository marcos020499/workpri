import React, { useMemo, useState, useReducer, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import ThDoor from '../../components/impermeabilizante/indexBooleanDoor'
import ThWindow from '../../components/impermeabilizante/indexBooleanWindow'
import useBoolean from '../../components/impermeabilizante/useBoolean'
import {
  ColorsItem,
  InputDiv,
  InputItem,
  Title,
  Final,
  ButtonRed,
  Warning,
  Button,
} from "../../components/FirstContent/style";

import {
  TitleHead,
  FirstCol,
  ExpandableInput,
  SimpleInputOwnState,
  SimpleInputOwnStateResponsive,
} from "../../components/refactor/Components";
export function Fields({
  wall1,
  wall2,
  wall3,
  wall4,
  wall5,
  wall6,
  onSubmit,
  onClear,
  update,
  valueWall,
}) {
  const { colors1 } = useSelector((state) => state);
  const linea_producto = colors1;
  const stateColors = useSelector((state) => state.colors);
  const colors = stateColors.colores || [];
  const {x} = useBoolean()
  return (
    <Container>
      <Title>COLORES SELECCIONADOS</Title>
      <InputDiv>
        <div>
          {colors.map((el, i) => (
            <ColorsItem key={i + "colores"}>
              <InputItem
                disabled="disabled"
                style={{
                  backgroundColor: el.rgb,
                }}
              />
            </ColorsItem>
          ))}
        </div>
        <Button
          onClick={() => {
            window.location.reload();
          }}
        >
          Borrar todo
        </Button>
      </InputDiv>
      <Conta>
        {colors.map((el, i) => {
          return i === 0 ? (
            <TableHorizontal>
              <THead>
                <TH>
                  <TitleHead title="Colores" icon="colors" end />
                </TH>
                <TH>
                  <TitleHead title="Largo" icon="vertical" size />
                </TH>
                <TH>
                  <TitleHead title="Ancho" icon="horizontal" size />
                </TH>
                <ThDoor/>
                <ThWindow/>
              </THead>
              {x === false?(
                
                <>
              <Wall
                index={1}
                wall={wall1}
                update={update}
                Length={colors.length}
              />
              <Wall
                index={2}
                wall={wall2}
                update={update}
                Length={colors.length}
              />
              <Wall
                index={3}
                wall={wall3}
                update={update}
                Length={colors.length}
              />
              <Wall
                index={4}
                wall={wall4}
                update={update}
                Length={colors.length}
              />
              <Wall
                index={5}
                wall={wall5}
                update={update}
                Length={colors.length}
              />
            </>):(
              <Wall
              index={6}
              wall={wall6}
              update={update}
              Length={colors.length}
            />
            )}
            </TableHorizontal>
          ) : (
            ""
          );
        })}
      </Conta>
      <Final>
        <Warning>*Tienes que llenar todos los campos</Warning>
        <ButtonRed
          onClick={() => {
            onSubmit();
            setTimeout(() => {
              onSubmit();
            }, 500);
          }}
        >
          Calcular
        </ButtonRed>
      </Final>
    </Container>
  );
}

const getColorByHex = (array, c) => {
  return array.find(({ rgb }) => {
    return rgb === c;
  });
};

function Wall({ index, wall, update, Length }) {
  const stateColors = useSelector((state) => state.colors);
  const colors = stateColors.colores || [];

  const [select, setSelect] = useState(
    Length === 1 && index === 1
      ? !null
      : Length === 2 && index === 1
      ? !null
      : Length === 2 && index === 2
      ? !null
      : Length === 3 && index === 1
      ? !null
      : Length === 3 && index === 2
      ? !null
      : Length === 3 && index === 3
      ? !null:
      Length === 1 && index === 6?
      !null
      : null
  );

  const onColor = (value) => {
    const _color = getColorByHex(colors, value);
    if (_color) {
      update(index - 1, "color_id", _color.id);
    }
  };

  const onEdit = (identifier, value) => {
    update(index - 1, identifier, value);
  };

  const Content = ({ children }) => {
    return <Hidding hidden={!select}>{children}</Hidding>;
  };

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
  return useMemo(
    () => (
      <TBody key="table">
        <TD key="first">
          <FirstCol
            index={index}
            selectControl={select}
            onSelectControl={setSelect}
            id="color"
            onSubmit={onColor}
          />
        </TD>
        <TD key="second">
          <Content>
            {width > 768 ? (
              <SimpleInputOwnState
                id="largo"
                onSubmit={onEdit}
                defaultValue={3}
              />
            ) : (
              <SimpleInputOwnStateResponsive defaultValue={3}  id="largo" onSubmit={onEdit}  />
            )}
          </Content>
        </TD>
        <TD key="three">
          <Content>
            {width > 768 ? (
              <SimpleInputOwnState
                id="ancho"
                onSubmit={onEdit}
                defaultValue={2.5}
              />
            ) : (
              <SimpleInputOwnStateResponsive defaultValue={2.5}  id="ancho" onSubmit={onEdit} />
            )}
          </Content>
        </TD>
        <TD key="four">
          <Content>
            <ExpandableInput id="puertas" onSubmit={onEdit} />
          </Content>
        </TD>
        <TD key="five" end>
          <Content>
            <ExpandableInput id="ventanas" onSubmit={onEdit} />
          </Content>
        </TD>
      </TBody>
    ),
    [select]
  );
}

const Conta = styled.div`
  max-width: 768;
  overflow-x: auto;
  overflow-y: auto;
  @media screen and (max-width: 768px) {
    margin: 5vw 0 0 0;
  }
`;
const Container = styled.div`
  max-width: 768;
  @media screen and (max-width: 768px) {
    margin: 5vw 0 0 0;
  }
`;
const TChild = styled.tr`
  margin: 0;
  padding: 0;
`;

const TableHorizontal = styled(TChild)`
  text-align: center;
  justify-content: center;
  margin: auto;
`;
const THead = styled(TChild)`
  min-width: 1024px;
`;
const TBody = styled(TChild)`
  min-width: 1024px;
  max-width: 1600px;
  min-heigth: 1067px;
  max-heigth: 1067px;
`;
const TD = styled.td`
  margin: 0;
  ${({ end }) => (!end ? `border-right: 1px solid #003366;` : ``)}
`;

const Hidding = styled.div`
  display: flex;
  flex: 1;
  visibility: ${({ hidden }) => `${hidden ? "hidden" : "visible"}`};
`;

const TH = styled.th`
  padding: 0px 1vw;
  @media screen and (max-width: 1367px) {
    padding: 0px 0.7vw;
  }
  @media screen and (max-width: 1200px) {
    padding: 0px 1.5vw;
  }
  @media screen and (max-width: 768px) {
    padding: 0 0.2vw;
  }
`;
