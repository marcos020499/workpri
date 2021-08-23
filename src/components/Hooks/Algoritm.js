import useItems from "./Hooks";
import React, { useEffect, useState } from "react";
const useAlgorim = () => {
  var { liters, number } = useItems();
  const [one, setOne] = useState();
  const [four, setFour] = useState();
  const [twenty, setTwenty] = useState();
  useEffect(() => {
    var countCurrency = () => {
      var four = 0;
      var one = 0;
      var teny = 0;
      var Oneliter = 1;
      var Fourliters = 4;
      var Twentyliter = 19;
      var notes = [Twentyliter, Fourliters, Oneliter];
      var noteCounter = [0, 0, 0];
      for (var i = 0; i < 3; i++) {
        if (liters >= notes[i]) {
          noteCounter[i] = Math.floor(liters / notes[i]);
          liters = liters - noteCounter[i] * notes[i];
        }
      }
      for (var j = 0; j < 3; j++) {
        teny = noteCounter[0];
        four = noteCounter[1];
        one = noteCounter[2];
      }
      var x = teny;
      var y = four;
      var z = one;
      return { x, y, z };
    };
    let { x, y, z } = countCurrency();
    setTwenty(x);
    setFour(y);
    setOne(z);
  });
  return { twenty, four, one };
};
export default useAlgorim;
