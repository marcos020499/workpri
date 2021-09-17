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
    	dispatch({ [e.target.name]: parseInt(e.target.value) || 0 });
    	console.log(e.target.name);
  	};

  return {
    state,
    handleInput
  };
}
export default useInput;
