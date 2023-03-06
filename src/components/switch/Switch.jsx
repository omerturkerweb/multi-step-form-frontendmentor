import { useContext } from "react";
import { FormContext } from "../../context/FormContext";

export default function Switch() {
  const { planTime, setPlanTime } = useContext(FormContext);

  return (
    <div
      onClick={() => {
        setPlanTime((planTime) => {
          return planTime === "monthly" ? "yearly" : "monthly";
        });
      }}
      className="switch bg-[var(--marine-blue)] h-[24px] rounded-xl w-[50px] relative cursor-pointer transition-all duration-500"
    >
      <div
        className={
          planTime === "monthly"
            ? "switch-ball h-[15px] w-[15px] rounded-full bg-[var(--white)] transition-all duration-300 absolute top-1 left-1"
            : "switch-ball h-[15px] w-[15px] rounded-full bg-[var(--white)] transition-all duration-300 absolute top-1 translate-x-[29px]"
        }
      ></div>
    </div>
  );
}
