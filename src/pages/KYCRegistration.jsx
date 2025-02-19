import { useState } from "react";
import KYCStepOne from "../components/kyc/step1";
import KYCStepTwo from "../components/kyc/step2";
import KYCStepThree from "../components/kyc/step3";
import KYCConfirmation from "../components/kyc/confirmation";
import StepIndicator from "../components/kyc/indicator";
import logo from '/Theme=dark.png';


const KYCRegistration = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        BAM: "",
        firstName: "",
        lastName: "",
        mobileNumber: "",
        DOB: "",
        gender: "",
        country: "",
        state: "",
        address: "",
        graduate: "",
        institution: "",
        gradYear: "",
        eduLevel: "",
        profession: "",
        telegram: "",
        referral: "",
        vouchname: "",
        vouchusername: "",
        idSelection: "",
        document: null,
    });


    // step indicator
    const stepTitles = [
      "Step 1: Create an account",
      "Step 2: Basic Information",
      "Step 3: Upload Documents",
    ];


//   -------------===================-------------
// page design starts here
  return (
    <main className='w-full flex flex-col justify-start items-center min-h-screen px-[15px] py-[50px] gap-[10px] md:gap-[50px] md:px-[30px] lg:p-[60px] lg:gap-[10px]'>
        <img src={logo} alt='ATL logo' className='w-[100px] h-[80px] md:w-[120px] md:h-[100px] object-contain'  onClick={() => window.location.href = '/'}/>
        <StepIndicator step={step} />
        <div className="flex flex-col justify-center items-center w-full max-w-2xl md:w-[80%] lg:w-[full]">
          {step === 1 && <KYCStepOne formData={formData} setFormData={setFormData} nextStep={() => setStep(2)} />}
          {step === 2 && <KYCStepTwo formData={formData} setFormData={setFormData} nextStep={() => setStep(3)} prevStep={() => setStep(1)} />}
          {step === 3 && <KYCStepThree formData={formData} setFormData={setFormData} nextStep={() => setStep(4)} prevStep={() => setStep(2)} />}
          {step === 4 && <KYCConfirmation />}
        </div>
    </main>
  );
};



export default KYCRegistration;