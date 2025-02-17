import { PrimaryButton } from "../Buttons";

const KYCConfirmation = () => {
    return (
      <div className="flex flex-col gap-4 items-center">
        <h3 className="text-xl font-bold text-green-500">KYC Submitted Successfully!</h3>
        <p>Your KYC details have been submitted. Please wait for approval.</p>
        <PrimaryButton onClick={() => window.location.href = '/'}>
            Go to Home
        </PrimaryButton>
      </div>
    );
  };
  

  export default KYCConfirmation;
  