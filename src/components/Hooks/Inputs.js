import React, { useState, useReducer, useEffect } from "react";

function useInput() {

  const initialState = {
		cantidad1L: 0,
		cantidad4L: 0,
		cantidad19L: 0,
	  };
	const reducer = (s, a) => ({ ...s, ...a });
  	const [state, dispatch] = useReducer(reducer, initialState);

  	const handleInput = (e) => {
    	dispatch({ [e.target.name]: e.target.value});
    	console.log(e.target.name +' '+ e.target.value);
  	};

  return {
    state,
    handleInput
  };
}
export default useInput;
