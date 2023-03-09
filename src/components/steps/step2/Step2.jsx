import { useContext, useEffect } from "react";
import { FormContext } from "../../../context/FormContext";
import Switch from "../../switch/Switch";

export default function Step2() {
  const { planType, setPlanType, planTime, setPlanTime, setStep, setUser } =
    useContext(FormContext);
  useEffect(() => {
    switch (planType) {
      case "arcade":
        clickArcadeHandle();
        break;
      case "advanced":
        clickAdvancedHandle();
        break;
      case "pro":
        clickProHandle();
        break;
      default:
    }
  }, [planTime]);
  const clickArcadeHandle = () => {
    setPlanType("arcade");
    if (planTime === "monthly") {
      setUser((user) => {
        return { ...user, planCost: 9 };
      });
    } else {
      setUser((user) => {
        return { ...user, planCost: 90 };
      });
    }
  };
  const clickAdvancedHandle = () => {
    setPlanType("advanced");
    if (planTime === "monthly") {
      setUser((user) => {
        return { ...user, planCost: 9 };
      });
    } else {
      setUser((user) => {
        return { ...user, planCost: 120 };
      });
    }
  };
  const clickProHandle = () => {
    setPlanType("pro");
    if (planTime === "monthly") {
      setUser((user) => {
        return { ...user, planCost: 9 };
      });
    } else {
      setUser((user) => {
        return { ...user, planCost: 150 };
      });
    }
  };
  return (
    <div className="step-2-main flex flex-col p-10 gap-y-8 relative">
      <div className="step-2-titles">
        <h3 className="text-[var(--marine-blue)] text-2xl font-[700]">
          Select Your Plan
        </h3>
        <span className="text-sm text-[var(--cool-gray)]">
          You have the option of monthly or yearly billing.
        </span>
      </div>
      <div className="step-2-options  w-full flex flex-row gap-x-3 transition-all duration-500">
        <div
          onClick={clickArcadeHandle}
          className={
            planType === "arcade"
              ? "option-arcade cursor-pointer w-[30%] border-cool-gray rounded-xl p-4 flex flex-col justify-between gap-y-7 bg-[var(--magnolia)] border-purplish"
              : "option-arcade cursor-pointer w-[30%] border-cool-gray rounded-xl p-4 flex flex-col justify-between gap-y-7"
          }
        >
          <div className="arcade-image">
            <img src={require("../../../images/icon-arcade.svg").default}></img>
          </div>
          <div className="arcade-description flex flex-col ">
            <h3 className="text-[var(--marine-blue)] text-base font-[700]">
              Arcade
            </h3>
            {planTime === "monthly" ? (
              <span className="text-[var(--cool-gray)] text-sm">$9/mo</span>
            ) : (
              <span className="text-[var(--cool-gray)] text-sm">$90/yr</span>
            )}
            {planTime === "yearly" ? (
              <span className=" description-off   text-xs text-[var(--marine-blue)] mt-2 font-[500]">
                2 months free
              </span>
            ) : null}
          </div>
        </div>
        <div
          onClick={clickAdvancedHandle}
          className={
            planType === "advanced"
              ? "option-advanced cursor-pointer w-[30%] border-cool-gray rounded-xl p-4 flex flex-col justify-between gap-y-7 bg-[var(--magnolia)] border-purplish"
              : "option-advanced cursor-pointer w-[30%] border-cool-gray rounded-xl p-4 flex flex-col justify-between gap-y-7"
          }
        >
          <div className="advanced-image">
            <img
              src={require("../../../images/icon-advanced.svg").default}
            ></img>
          </div>
          <div className="advanced-description flex flex-col">
            <h3 className="text-[var(--marine-blue)] text-base font-[700]">
              Advanced
            </h3>
            {planTime === "monthly" ? (
              <span className="text-[var(--cool-gray)] text-sm">$9/mo</span>
            ) : (
              <span className="text-[var(--cool-gray)] text-sm">$120/yr</span>
            )}
            {planTime === "yearly" ? (
              <span className=" description-off text-xs text-[var(--marine-blue)] mt-2 font-[500]">
                2 months free
              </span>
            ) : null}
          </div>
        </div>
        <div
          onClick={clickProHandle}
          className={
            planType === "pro"
              ? "option-pro cursor-pointer w-[30%] border-cool-gray rounded-xl p-4 flex flex-col justify-between gap-y-7 bg-[var(--magnolia)] border-purplish"
              : "option-pro cursor-pointer w-[30%] border-cool-gray rounded-xl p-4 flex flex-col justify-between gap-y-7"
          }
        >
          <div className="pro-image">
            <img src={require("../../../images/icon-pro.svg").default}></img>
          </div>
          <div className="pro-description flex flex-col">
            <h3 className="text-[var(--marine-blue)] text-base font-[700]">
              Pro{" "}
            </h3>
            {planTime === "monthly" ? (
              <span className="text-[var(--cool-gray)] text-sm">$9/mo</span>
            ) : (
              <span className="text-[var(--cool-gray)] text-sm">$150/yr</span>
            )}
            {planTime === "yearly" ? (
              <span className="description-off text-xs text-[var(--marine-blue)] mt-2 font-[500]">
                2 months free
              </span>
            ) : null}
          </div>
        </div>
      </div>
      <div className="plan-time-section select-none rounded-md flex flex-row items-center justify-center gap-x-5 bg-[var(--magnolia)] py-3">
        <span
          onClick={() => {
            setPlanTime("monthly");
          }}
          className={
            planTime === "monthly"
              ? "text-[var(--marine-blue)] cursor-pointer transition-all duration-700"
              : "text-[var(--cool-gray)] cursor-pointer transition-all duration-700"
          }
        >
          Monthly
        </span>
        <span
          onClick={() => {
            setPlanTime((planTime) => {
              return planTime === "monthly" ? "yearly" : "monthly";
            });
          }}
        >
          {" "}
          <Switch />
        </span>

        <span
          onClick={() => {
            setPlanTime("yearly");
          }}
          className={
            planTime === "yearly"
              ? "text-[var(--marine-blue)] cursor-pointer transition-all duration-700"
              : "text-[var(--cool-gray)] cursor-pointer transition-all duration-700"
          }
        >
          Yearly
        </span>
      </div>
      <div className="step-2-actions mt-10 absolute -bottom-16 right-0 flex flex-row items-center justify-between w-full px-10">
        <button
          onClick={() => {
            setStep((step) => {
              return step - 1;
            });
          }}
          className="text-[var(--marine-blue)] transition-all duration-500 p-3 rounded-xl hover:bg-[var(--magnolia)]"
        >
          Go Back
        </button>
        <button
          onClick={() => {
            setStep((step) => {
              return step + 1;
            });
          }}
          className="form-button"
        >
          Next Step
        </button>
      </div>
    </div>
  );
}
