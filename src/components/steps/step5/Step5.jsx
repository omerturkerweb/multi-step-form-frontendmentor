export default function Step5() {
  return (
    <div className="step-5-main flex flex-row items-center justify-center h-full p-16">
      <div className="step-thank-you-content flex flex-col items-center justify-center gap-y-4">
        <img src={require("../../../images/icon-thank-you.svg").default}></img>
        <h3 className="text-[var(--marine-blue)] text-2xl font-[700]">
          Thank you!
        </h3>
        <span className="text-sm text-[var(--cool-gray)] text-center">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </span>
      </div>
    </div>
  );
}
