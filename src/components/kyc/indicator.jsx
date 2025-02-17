import React from "react";


const StepIndicator = ({ step }) => {
    const steps = ["Create Access", "Basic Information", "Upload Documents", "Confirmation"];
  
    return (
      <div className="flex items-center justify-between w-full max-w-lg mb-8">
        {steps.map((label, index) => (
          <div key={index} className="flex flex-col items-center w-full">
            {/* Step Number */}
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full font-bold 
                ${step === index + 1 ? "bg-primary text-white" : step > index + 1 ? "bg-green-500 text-white" : "bg-gray-300 text-gray-700"}
              `}
            >
              {index + 1}
            </div>
            
            {/* Step Label */}
            <p className={`text-[12px] ${step === index + 1 ? "text-primary font-bold" : "text-gray-500"}`}>
              {label}
            </p>
            
            {/* Connecting Line (except last step) */}
            {index !== steps.length - 1 && (
              <div className={`h-1 w-full bg-gray-300 relative top-[-32px] z-[-1] ${step > index + 1 ? "bg-green-500" : ""}`}></div>
            )}
          </div>
        ))}
      </div>
    );
  };


export default StepIndicator;
  