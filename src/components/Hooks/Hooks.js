import React, { useEffect, useReducer, useState } from "react";
import ReactTooltip from "react-tooltip";
import firebase from "../firebase/firebase";

const useItems = () => {
  const [item, setItem] = useState([]);
  const [imper, setImper] = useState(false);
  const [number, setNumber] = useState({ input1: 34, input2: 2 });
  const [suma, setSuma] = useState();
  var [liters, setLiters] = useState();
  const [quantity, setQuantity] = useState();

  useEffect(() => {
    console.log("useItems");
    const { input1, input2 } = number;
    Math.floor(setLiters((Number(input1) * Number(input2)) / 3));
  }, [number]);
  const handleInput = (e) => {
    dispatch(setNumber({ [e.target.name]: e.target.value }));
    console.log(e.target.name);
  };
  const message1 = () => {
    "s";
  };
  const initialState = { input1: "", input2: "" };
  const reducer = (s, a) => ({ ...s, ...a });
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    firebase
      .firestore()
      .collection("colors")
      .onSnapshot((snapshot) => {
        const listItem = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setItem(listItem);
      });
  }, []);

  useEffect(() => {
    if (item.length) {
      setImper(item[0].hyper);
    }
  });

  return { item, imper, number, suma, handleInput, liters, message1 };
};
export default useItems;
