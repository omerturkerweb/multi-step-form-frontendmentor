import { createContext, useState } from "react";
import Step1 from "../components/steps/step1/Step1";
import Step2 from "../components/steps/step2/Step2";
import Step3 from "../components/steps/step3/Step3";
import Step4 from "../components/steps/step4/Step4";
import Step5 from "../components/steps/step5/Step5";

export const FormContext = createContext();

export const Provider = ({ children }) => {
  const [planType, setPlanType] = useState("arcade");
  const [planTime, setPlanTime] = useState("monthly");
  const [user, setUser] = useState({
    name: "",
    mail: "",
    phone: 0,
    plan: "",
    planType: "",
    addOns: { addon1: false, addon2: false, addon3: false },
    confirmed: false,
    planCost: 0,
    addOnCost: 0,
    cost: 0,
  });
  const [step, setStep] = useState(1);
  const [stepTitles, setStepTitles] = useState([
    {
      number: 1,
      title: "STEP 1",
      description: "YOUR INFO",
    },
    {
      number: 2,
      title: "STEP 2",
      description: "SELECT PLAN",
    },
    {
      number: 3,
      title: "STEP 3",
      description: "ADD-ONS",
    },
    {
      number: 4,
      title: "STEP 4",
      description: "SUMMARY",
    },
  ]);
  const [content, setContent] = useState([
    {
      number: 1,
      component: <Step1 />,
    },
    {
      number: 2,
      component: <Step2 />,
    },
    {
      number: 3,
      component: <Step3 />,
    },
    {
      number: 4,
      component: <Step4 />,
    },
    {
      number: 5,
      component: <Step5 />,
    },
  ]);
  const data = {
    step,
    setStep,
    stepTitles,
    setStepTitles,
    content,
    setContent,
    user,
    setUser,
    planType,
    setPlanType,
    planTime,
    setPlanTime,
  };
  return <FormContext.Provider value={data}>{children}</FormContext.Provider>;
};
