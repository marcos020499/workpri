import React, { useState, useReducer, useEffect } from "react";

function useInput() {
  const initialState = {
    input10: 0,
    input20: 0,
    input11: 0,
    input21: 0,
    input12: 0,
    input22: 0,
    int62: 0,
    int7: 0,
    int63: 0,
    int8: 0,
    int64: 0,
    int9: 0,
    int65: 0,
    int10: 0,
    int3: 0,
    int101: 0,
  };

  const reducer = (s, a) => ({ ...s, ...a });
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInput = (e) => {
    dispatch({ [e.target.name]: parseInt(e.target.value) || 0 });
    console.log(e.target.name);
  };
  const [total0, setTotal0] = useState(0);
  const [total1, setTotal1] = useState(0);
  const [total2, setTotal2] = useState(0);
  const [total3, setTotal3] = useState(0);
  const [total, setTotal] = useState(0);

  const calculateTotal = () => {
    setTotal0(
      state.input10 * state.input20 -
        (state.int62 * state.int7 +
          state.int63 * state.int8 +
          state.int64 * state.int9 +
          state.int65 * state.int10)
    );
    setTotal1(state.input11 * state.input21);
    setTotal2(state.input12 * state.input22);
    setTotal3(state.input13 * state.input23);
  };

  return {
    total0,
    total1,
    total2,
    total3,
    calculateTotal,
    handleInput,
    state,
    total,
  };
}
export default useInput;
