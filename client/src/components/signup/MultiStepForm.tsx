import { useState } from "react";
import Buisinessform from "./Buisinessform";
import Storedetailsform from "./Storedetailsform";
import StepThree from "./StepThree";
import SendEmail from "./SendEmail";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    storename: '',
    storeaddress: '',
    storeType: '',
    email: ''
  });
  const [isEmailSent, setIsEmailSent] = useState(false); // Add state for email sent

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const updateFormData = (newData: object) => {
    setFormData((prev) => ({
      ...prev,
      ...newData
    }));
  };

  return (
    <div className="relative max-w-4xl mx-auto mt-10">
      {isEmailSent ? (
        <SendEmail /> // Conditionally render SendEmail component
      ) : (
        <>
          {currentStep === 1 && (
            <Buisinessform 
              formData={formData} 
              updateFormData={updateFormData} 
              onNext={handleNext} 
            />
          )}
          {currentStep === 2 && (
            <Storedetailsform 
              formData={formData} 
              updateFormData={updateFormData} 
              onNext={handleNext} 
              onPrev={handlePrev} 
            />
          )}
          {currentStep === 3 && (
            <StepThree 
              formData={formData} 
              updateFormData={updateFormData} 
              onPrev={handlePrev} 
              setIsEmailSent={setIsEmailSent} // Pass setIsEmailSent function
            />
          )}
        </>
      )}
    </div>
  );
};

export default MultiStepForm;
