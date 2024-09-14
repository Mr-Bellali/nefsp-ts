import { useState } from "react";
import Buisinessform from "./Buisinessform";
import Storedetailsform from "./Storedetailsform";
import StepThree from "./StepThree";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    setCurrentStep((prev) => prev - 1);
  };

  return (
    <div className="relative max-w-4xl mx-auto mt-10">
      {currentStep === 1 && <Buisinessform onNext={handleNext} />}
      {currentStep === 2 && <Storedetailsform onNext={handleNext} onPrev={handlePrev} />}
      {currentStep === 3 && <StepThree onPrev={handlePrev} />}
    </div>
  );
};

export default MultiStepForm;
