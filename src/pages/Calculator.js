import React from "react";
import FirstContent from "../components/FirstContent/index";
import SecondContent from "../components/SecondContent/index";
import { CalculatorPage, First, Second, Banner } from "./style";
import useInput from "../components/Hooks/Inputs";

const Index = () => {
  const props = useInput()
  return (
    <CalculatorPage>
      <Banner
        src={
          "https://res.cloudinary.com/marcos020499/image/upload/v1629305103/BANNER_SUPERIOR-01-01_qc1rs2.png"
        }
      />
      <First>
        <FirstContent {...props} />
      </First>
      <Second>
        <SecondContent total={props.total} />
      </Second>
    </CalculatorPage>
  );
};
export default Index;
