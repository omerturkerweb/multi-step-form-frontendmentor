import { useContext } from "react";
import { FormContext } from "../../context/FormContext";

export default function Layout() {
  const { stepTitles, step, setStep, content } = useContext(FormContext);
  return (
    <div className="multi-step-main w-[800px] h-[510px] shadow-xl p-3 bg-[var(--white)] rounded-xl flex flex-row">
      <div className="steps w-[30%] h-[100%] p-6 flex flex-col">
        {stepTitles.map((stepTitle) => {
          return (
            <>
              <div
                onClick={() => {
                  setStep(stepTitle.number);
                }}
                className={
                  stepTitle.number === step
                    ? `step step-${stepTitle.number} flex flex-row items-center gap-x-5 p-3 active-step`
                    : `step step-${stepTitle.number} flex flex-row items-center gap-x-5 p-3`
                }
              >
                {stepTitle.number === step ? (
                  <div className="step-number text-sm font-bold w-9 h-9 flex flex-row items-center justify-center rounded-full step-border bg-[var(--light-blue)] text-[var(--marine-blue)] ">
                    {stepTitle.number}
                  </div>
                ) : (
                  <div className="step-number text-sm font-bold w-9 h-9 flex flex-row items-center justify-center rounded-full step-border text-[var(--white)] ">
                    {stepTitle.number}
                  </div>
                )}

                <div className="step-description flex flex-col items-start justify-center">
                  <span className="step-title text-sm text-[var(--pastel-blue)] tracking-tight">
                    {stepTitle.title}
                  </span>
                  <h3 className="step-description text-[var(--white)]">
                    {stepTitle.description}
                  </h3>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="content w-[70%] h-[full]">
        {content.map((c) => {
          if (c.number === step) {
            return c.component;
          }
        })}
      </div>
    </div>
  );
}
