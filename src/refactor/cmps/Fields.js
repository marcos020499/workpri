import React, { useMemo, useState, useReducer, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
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
} from "../../components/refactor/Components";
import { initCalculatorAction } from "../../store/gestionReducer";

export function Fields({
  wall1,
  wall2,
  wall3,
  wall4,
  wall5,
  onSubmit,
  onClear,
  update,
}) {
  const {
    colors1,
    colors: { colores },
  } = useSelector((state) => state);

  const linea_producto = colors1;
  const colors = colores || [];
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
            <TH>
              {!!linea_producto?.impermeabilizante === false ? (
                <TitleHead title="Puertas" icon="door" />
              ) : (
                <TitleHead title="Domo" icon="domo" />
              )}
            </TH>
            <TH>
              {!!linea_producto?.impermeabilizante === false ? (
                <TitleHead title="Ventanas" icon="window" />
              ) : (
                <TitleHead title="Tragaluz" icon="tragaluz" />
              )}
            </TH>
          </THead>
          <div>
            <Wall index={0} wall={wall1} update={update} />
            <Wall index={1} wall={wall2} update={update} />
            <Wall index={2} wall={wall3} update={update} />
            <Wall index={3} wall={wall4} update={update} />
          </div>
        </TableHorizontal>
      </Conta>
      <Final>
        <Warning>*Tienes que llenar todos los campos</Warning>
        <ButtonRed onClick={() => {}}>Calcular</ButtonRed>
      </Final>
    </Container>
  );
}

// ROW
function Wall({ index, wall, identifier, Length, update }) {
  const { isReadyToCompute, finishRecopilation } = useSelector(
    (state) => state.gestion
  );
  const stateColors = useSelector((state) => state.colors);
  const colors = stateColors.colores || [];

  const getColorByHex = (array, c) => {
    return array.find(({ rgb }) => {
      console.log("compare ", rgb, c);
      return rgb === c;
    });
  };
  const storeDistpach = useDispatch();
  const [color, setColor] = useState(null);
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
      ? !null
      : null
  );
  console.log("l", Length);
  const initialState = {
    edit: false,
    id: index + identifier,
    color_id: null,
    nombre: null,
    largo: 0,
    ancho: 0,
    puertas: [],
    ventanas: [],
  };
  const [inf, dispatch] = useReducer((s, a) => ({ ...s, ...a }), initialState);

  useEffect(() => {
    /*
			case
			-- select/deselect [reset] -> remove
			-- append
			-- submit

			-- press calculate
		*/
    //select/deselect
    /*
		if (!select) {
			// deselect
			setColor(null);
			if (inf.edit) {
				console.log("calculator remove");
				storeDistpach(removeWallAction(inf.id));
			}
			dispatch(initialState);
		}
		// append
		
		if (select && color && inf.edit) {
			dispatch({ edit: false });
			storeDistpach(appendWallAction(inf));
		}
		// onCalculate
		if (index === walles.length && !finishRecopilation) {
			storeDistpach(endCalculatorAction());
		}*/
  }, [select, color, isReadyToCompute, finishRecopilation]);

  function onColor(value) {
    const _color = getColorByHex(colors, value);
    if (_color) {
      setColor(value);
      dispatch({ color_id: _color.id, nombre: _color.nombre, edit: true });
    }
  }

  function onEdit(identifier, value) {
    //update(index, [identifier], value)
    dispatch({ [identifier]: value, edit: true });
  }

  const Content = ({ children }) => {
    return <Hidding hidden={!select}>{children}</Hidding>;
  };

  return useMemo(
    () => (
      <TBody key="table">
        <TD key="first">
          <FirstCol
            index={index}
            selectControl={select}
            onSelectControl={setSelect}
            id="color"
            identifier={identifier}
            onSubmit={onColor}
          />
        </TD>
        <TD key="second">
          <Content>
            <SimpleInputOwnState
              id="largo"
              onSubmit={onEdit}
              defaultValue={3}
            />
          </Content>
        </TD>
        <TD key="three">
          <Content>
            <SimpleInputOwnState
              id="ancho"
              onSubmit={onEdit}
              defaultValue={2.5}
            />
          </Content>
        </TD>
        <TD key="four">
          <Content>
            <ExpandableInput
              id="puertas"
              identifier={identifier}
              onSubmit={onEdit}
            />
          </Content>
        </TD>
        <TD key="five" end>
          <Content>
            <ExpandableInput
              id="ventanas"
              identifier={identifier}
              onSubmit={onEdit}
            />
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