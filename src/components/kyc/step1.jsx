import { Link } from "react-router-dom";
import { PrimaryButton, LinkButton } from "../buttons";


const KYCStepOne = ({ formData, setFormData, nextStep }) => {
    return (
      <div className="flex flex-col gap-[20px] border p-[20px] border-greyColor rounded-[20px]">
        {/* <h3 className="text-[20px] font-medium">Step 1: Create Access Details</h3> */}
        <form className="w-full flex flex-col gap-[20px] w-[450px] rounded-[20px]">
            <div className="w-full flex flex-col gap-[5px]">
                <label htmlFor="email" className="text-[15px] pl-[10px]">Email Address</label>
                <input type="email" id="email" name="email" placeholder="Enter your email address" className="w-full p-[10px] bg-inherit text-[12px] border border-greyColor rounded-[100px]"/>
            </div>
            <div className="w-full flex flex-col gap-[5px]"> 
                <label htmlFor="password" className="text-[15px] pl-[10px]">Password</label>
                <input type="password" id="password" name="password" placeholder="Create a password" className="w-full p-[10px] bg-inherit text-[12px] border border-greyColor rounded-[100px]"/>
            </div>
            <div className="w-full flex flex-col gap-[5px]">
                <div className="flex justify-between items-end">
                  <label htmlFor="bamcode" className="text-[15px] pl-[10px]">Bam code</label>
                  <LinkButton className="text-[12px]">
                    I don't have a Bamcode
                  </LinkButton>
                </div>
                <input type="text" id="BAM" name="bamcode" placeholder="Enter your Bam Code" className="w-full p-[10px] bg-inherit text-[12px] border border-greyColor rounded-[100px]"/>
            </div>
        </form>
        <div className="w-full flex gap-[5px] items-start">
          <input type="checkbox" className="mt-[4px] bg-greyColor border border-greyColor rounded-[5px]"/>
          <p className="text-[12px] leading-tight">Clicking on 'create an account' means you have read and accepted alpha training lab <LinkButton>Terms of use</LinkButton> and <LinkButton>Terms of service</LinkButton>. Proceeding also means you have read and understood Alpha Training lab <LinkButton>Privacy Policy</LinkButton></p>
        </div>
        <div className="flex flex-col items-center gap-[5px] w-full">
          <PrimaryButton onClick={nextStep} className="mt-[20px] w-full">
            Create an account
          </PrimaryButton>
          <div className="flex gap-[5px] text-[14px]">
            <p>Already a member?</p>
            <LinkButton to='/login'>
              Log in
            </LinkButton>
          </div>
        </div>
      </div>
    );
  };
  

  export default KYCStepOne;  