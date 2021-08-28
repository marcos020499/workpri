import React from "react";
import FirstContent from "../components/FirstContent/index";
import SecondContent from "../components/SecondContent/index";
import { CalculatorPage, First, Second, Banner } from "./style";
import useInput from "../components/Hooks/Inputs";

const Index = () => {
  const props = useInput();
  return (
    <CalculatorPage>
      <Banner
        src={
          "https://res.cloudinary.com/marcos020499/image/upload/v1629305103/BANNER_SUPERIOR-01-01_qc1rs2.png"
        }
      />
      <First>
        <FirstContent {...props} state1={props.state1}/>
      </First>
      <Second>
        <SecondContent
          total={props.total}
          total0={props.total0}
          total1={props.total1}
          total2={props.total2}
          total3={props.total3}
        />
      </Second>
    </CalculatorPage>
  );
};
export default Index;
