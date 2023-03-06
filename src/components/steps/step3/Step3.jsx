import { Checkbox } from "@mui/material";
import { useContext } from "react";
import { FormContext } from "../../../context/FormContext";

export default function Step3() {
  const { user, setUser, setStep } = useContext(FormContext);
  return (
    <div className="step-3-main p-10 flex flex-col gap-y-6">
      <div className="step-3-title">
        <h3 className="text-[var(--marine-blue)] text-2xl font-[700]">
          Pick add-ons
        </h3>
        <span className="text-sm text-[var(--cool-gray)]">
          Add-ons help enchance your gaming experience.
        </span>
      </div>
      <div className="step-3-add-ons flex flex-col gap-y-3">
        <div
          onClick={() => {
            setUser((user) => {
              return {
                ...user,
                addOns: {
                  ...user.addOns,
                  addon1: !user.addOns.addon1,
                },
              };
            });
          }}
          className={
            user.addOns.addon1
              ? "add-on-online-service select-none flex flex-row items-center justify-start gap-x-5 p-3 cursor-pointer transition-all duration-500 hover:bg-[var(--magnolia)] rounded-xl  border-marine bg-[var(--magnolia)]"
              : "add-on-online-service select-none flex flex-row items-center justify-start gap-x-5 p-3 cursor-pointer transition-all duration-500 hover:bg-[var(--magnolia)] rounded-xl bg-[var(--white)] border-marine"
          }
        >
          <Checkbox
            onClick={(e) => {
              e.stopPropagation();
              setUser((user) => {
                return {
                  ...user,
                  addOns: {
                    ...user.addOns,
                    addon1: !user.addOns.addon1,
                  },
                };
              });
            }}
            checked={user.addOns.addon1}
          />
          <div className="online-service-description">
            <h3 className="text-[var(--marine-blue)] text-base font-[700]">
              Online service
            </h3>
            <span className="text-sm text-[var(--cool-gray)]">
              Access to multiplayer games
            </span>
          </div>
          <div className="online-service-price ml-auto  text-[var(--purplish-blue)] text-[14px]">
            <span>+1$/mo</span>
          </div>
        </div>

        <div
          onClick={() => {
            setUser((user) => {
              return {
                ...user,
                addOns: {
                  ...user.addOns,
                  addon2: !user.addOns.addon2,
                },
              };
            });
          }}
          className={
            user.addOns.addon2
              ? "add-on-online-service select-none flex flex-row items-center justify-start gap-x-5 p-3 cursor-pointer transition-all duration-500 hover:bg-[var(--magnolia)] rounded-xl  border-marine bg-[var(--magnolia)]"
              : "add-on-online-service select-none flex flex-row items-center justify-start gap-x-5 p-3 cursor-pointer transition-all duration-500 hover:bg-[var(--magnolia)] rounded-xl bg-[var(--white)] border-marine"
          }
        >
          <Checkbox
            onClick={(e) => {
              e.stopPropagation();
              setUser((user) => {
                return {
                  ...user,
                  addOns: {
                    ...user.addOns,
                    addon2: !user.addOns.addon2,
                  },
                };
              });
            }}
            checked={user.addOns.addon2}
          />
          <div className="larger-storage-description">
            <h3 className="text-[var(--marine-blue)] text-base font-[700]">
              Larger-storage
            </h3>
            <span className="text-sm text-[var(--cool-gray)]">
              Extra 1TB of cloud save
            </span>
          </div>
          <div className="larger-storage-price ml-auto text-[var(--purplish-blue)] text-[14px]">
            <span>+1$/mo</span>
          </div>
        </div>

        <div
          onClick={() => {
            setUser((user) => {
              return {
                ...user,
                addOns: {
                  ...user.addOns,
                  addon3: !user.addOns.addon3,
                },
              };
            });
          }}
          className={
            user.addOns.addon3
              ? "add-on-online-service select-none flex flex-row items-center justify-start gap-x-5 p-3 cursor-pointer transition-all duration-500 hover:bg-[var(--magnolia)] rounded-xl  border-marine bg-[var(--magnolia)]"
              : "add-on-online-service select-none flex flex-row items-center justify-start gap-x-5 p-3 cursor-pointer transition-all duration-500 hover:bg-[var(--magnolia)] rounded-xl bg-[var(--white)] border-marine"
          }
        >
          <Checkbox
            onClick={(e) => {
              e.stopPropagation();
              setUser((user) => {
                return {
                  ...user,
                  addOns: {
                    ...user.addOns,
                    addon3: !user.addOns.addon3,
                  },
                };
              });
            }}
            checked={user.addOns.addon3}
          />
          <div className="customizable-profile-description">
            <h3 className="text-[var(--marine-blue)] text-base font-[700]">
              Customizable-profile
            </h3>
            <span className="text-sm text-[var(--cool-gray)]">
              Custom theme on your profile
            </span>
          </div>
          <div className="customizable-profile-price ml-auto text-[var(--purplish-blue)] text-[14px]">
            <span>+2$/mo</span>
          </div>
        </div>
      </div>

      <div className="step-3-actions mt-10 flex flex-row items-center justify-between w-full">
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
            let total = 9;
            if (user.addOns.addon1 === true) total += 1;
            if (user.addOns.addon2 === true) total += 2;
            if (user.addOns.addon3 === true) total += 2;

            setUser((user) => {
              return { ...user, cost: total };
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
