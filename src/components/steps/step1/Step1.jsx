import { Form, Formik } from "formik";
import { useContext } from "react";
import * as Yup from "yup";
import { FormContext } from "../../../context/FormContext";

export default function Step1() {
  const { step, setStep, user, setUser } = useContext(FormContext);

  return (
    <div className="step1-main h-full p-10 ">
      <div className="step-1-title">
        <h3 className="text-[var(--marine-blue)] text-2xl font-[700]">
          Personel info
        </h3>
        <span className="text-sm text-[var(--cool-gray)]">
          Please provide your name, email address, and phone number.
        </span>
      </div>
      <div className="step-1-form mt-5">
        <Formik
          initialValues={{
            name: "",
            mail: "",
            phone: 0,
          }}
          validationSchema={Yup.object({
            name: Yup.string().required("This field is required"),
            mail: Yup.string().required("This field is required"),
            phone: Yup.number().required("This field is required"),
          })}
          onSubmit={(values) => {
            setUser((user) => ({ ...user, ...values }));
            setStep((step) => step + 1);
          }}
        >
          {({ handleChange, handleSubmit, errors }) => {
            return (
              <Form
                className="step-1-form flex flex-col gap-y-4"
                onSubmit={handleSubmit}
              >
                <div className="form-name">
                  <div className="input-informations w-[85%] flex flex-row items-center justify-between">
                    <span className="text-sm text-[var(--marine-blue)] font-[500]">
                      Name
                    </span>
                    {errors.name ? (
                      <span className="text-xs text-[var(--strawberry-red)] font-semibold tracking-wide">
                        {errors.name}
                      </span>
                    ) : null}
                  </div>

                  <input
                    onChange={handleChange}
                    id="name"
                    className={errors.name ? "input-invalid" : "input-default"}
                    placeholder="Please type your name .."
                    type="text"
                  />
                </div>
                <div className="form-email">
                  <div className="input-informations w-[85%] flex flex-row items-center justify-between">
                    <span className="text-sm text-[var(--marine-blue)] font-[500]">
                      Email Address
                    </span>
                    {errors.mail ? (
                      <span className="text-xs text-[var(--strawberry-red)] font-semibold tracking-wide">
                        This field is required
                      </span>
                    ) : null}
                  </div>

                  <input
                    onChange={handleChange}
                    id="mail"
                    className={errors.mail ? "input-invalid" : "input-default"}
                    placeholder="Please type your e-mail address .."
                    type="text"
                  />
                </div>
                <div className="form-phone">
                  <div className="input-informations w-[85%] flex flex-row items-center justify-between">
                    <span className="text-sm text-[var(--marine-blue)] font-[500]">
                      Phone Number
                    </span>
                    {errors.phone ? (
                      <span className="text-xs text-[var(--strawberry-red)] font-semibold tracking-wide">
                        This field is required
                      </span>
                    ) : null}
                  </div>

                  <input
                    required
                    onChange={handleChange}
                    id="phone"
                    className={errors.phone ? "input-invalid" : "input-default"}
                    placeholder="e.g. +1 234 567 890"
                    type="number"
                  />
                </div>
                <div className="form-actions">
                  <button
                    type="submit"
                    onSubmit={handleSubmit}
                    className="form-button mt-20 ml-72"
                  >
                    Next Step
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}
