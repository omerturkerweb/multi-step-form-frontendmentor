import { useContext } from "react";
import { FormContext } from "../../../context/FormContext";

export default function Step4() {
  const { planTime, planType, setStep, user, setUser } =
    useContext(FormContext);
  return (
    <div className="step-4-main p-10 flex flex-col gap-y-5">
      <div className="step-4-title">
        <h3 className="text-[var(--marine-blue)] text-2xl font-[700]">
          Finishing Up
        </h3>
        <span className="text-sm text-[var(--cool-gray)]">
          Double-check everything looks OK before confirming
        </span>
      </div>
      <div className="step-4-details w-[90%] p-3 rounded-md bg-[var(--magnolia)]">
        <div className="details-head flex flex-row items-center justify-between">
          <div className="plan-details">
            <h3 className="text-[var(--marine-blue)] text-base font-[700]">{`${
              planType.charAt(0).toUpperCase() + planType.slice(1)
            } (${planTime.charAt(0).toUpperCase() + planTime.slice(1)})`}</h3>
            <span
              onClick={() => {
                setStep((step) => step - 2);
              }}
              className="text-[var(--purplish-blue)] text-[15px] underline cursor-pointer"
            >
              Change
            </span>
          </div>
          <div className="plan-price text-[var(--marine-blue)] font-semibold">
            {`$${user.planCost}/${planTime === "monthly" ? "mo" : "yr"}`}
          </div>
        </div>
        <div className="hr h-[0.5px] w-[95%] bg-[var(--light-gray)] rounded-xl mx-auto my-4"></div>
        <div className="plan-add-ons">
          {user.addOns.addon1 ? (
            <div className="add-on-online-service flex flex-row items-center justify-between my-3">
              <span className="text-sm text-[var(--cool-gray)]">
                Online Service
              </span>
              <span className="text-sm text-[var(--cool-gray)]">
                {planTime === "monthly" ? <>$1/mo</> : <>$10/yr</>}
              </span>
            </div>
          ) : null}
          {user.addOns.addon2 ? (
            <div className="add-on-larger-storage flex flex-row items-center justify-between my-3">
              <span className="text-sm text-[var(--cool-gray)]">
                Larger Storage
              </span>
              <span className="text-sm text-[var(--cool-gray)]">
                {" "}
                {planTime === "monthly" ? <>$2/mo</> : <>$20/yr</>}
              </span>
            </div>
          ) : null}
          {user.addOns.addon3 ? (
            <div className="add-on-customizable-profile flex flex-row items-center justify-between my-3">
              <span className="text-sm text-[var(--cool-gray)]">
                Customizable Profile
              </span>
              <span className="text-sm text-[var(--cool-gray)]">
                {" "}
                {planTime === "monthly" ? <>$2/mo</> : <>$20/yr</>}
              </span>
            </div>
          ) : null}
        </div>
      </div>
      <div className="total-basket flex flex-row items-center justify-between w-[85%]">
        <span className="text-[var(--cool-gray)]">{`Total (per ${
          planTime == "monthly" ? "month" : "year"
        })`}</span>
        <span className="text-[var(--purplish-blue)] font-semibold">{`+$${
          user.planCost + user.addOnCost
        }/mo`}</span>
      </div>
      <div className="step-3-actions mt-10 flex flex-row items-center justify-between w-[90%]">
        <button
          onClick={() => {
            setStep((step) => {
              return step - 1;
            });
          }}
          className="text-[var(--marine-blue)] transition-all duration-500 p-3 rounded-xl hover:bg-[var(--magnolia)] "
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
          Confirm
        </button>
      </div>
    </div>
  );
}
