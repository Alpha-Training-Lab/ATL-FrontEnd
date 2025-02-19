import React from "react";


const StepIndicator = ({ step }) => {
    const steps = ["Create access", "Basic info", "Identification", "Confirmation"];
  
    return (
      <div className="flex items-start justify-between w-full max-w-lg my-[10px] lg:my-[0px]">
        {steps.map((label, index) => (
          <div key={index} className="flex flex-col items-center gap-[10px] w-full">
            {/* Step Number */}
            <div
              className={`w-[20px] h-[20px] flex items-center justify-center rounded-full font-bold text-[10px] lg:text-[12px] lg:w-[30px] lg:h-[30px] 
                ${step === index + 1 ? "bg-primary text-white" : step > index + 1 ? "bg-green-500 text-white" : "bg-gray-300 text-gray-700"}
              `}
            >
              {index + 1}
            </div>
            
            {/* Step Label */}
            <p className={`text-[10px] text-center leading-none lg:text-[12px] ${step === index + 1 ? "text-primary font-bold" : "text-gray-500"}`}>
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
  