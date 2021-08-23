import React, { useState, useReducer, useEffect } from "react";

function useInput() {
  const initialState = { input1: 3, input2: 2 };

  const reducer = (s, a) => ({ ...s, ...a });
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInput = (e) => {
    dispatch({ [e.target.name]: parseInt(e.target.value) || 0 });
    console.log(e.target.name);
  };
  const [total, setTotal] = useState(0);

  const calculateTotal = () => {
    const values = Object.values(state)
    setTotal(values.reduce((curr, next) => curr + next));
  };

  return { total, calculateTotal, handleInput, state };
}
export default useInput;
