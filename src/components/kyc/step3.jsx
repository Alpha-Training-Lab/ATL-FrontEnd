import { LinkButton, PrimaryButton, SecondaryButton } from "../buttons";


const KYCStepThree = ({ formData, setFormData, nextStep, prevStep }) => {
    return (
        <div className="w-full flex flex-col justify-center items-center gap-[50px] p-[20px] pt-[40px] border border-greyColor rounded-[20px] lg:w-[1000px]">
            <form className="flex flex-col lg:grid lg:grid-cols-2 gap-[20px] w-full">
                <div className="w-full flex flex-col gap-[5px]">
                    <label htmlFor='telegram' className="text-[15px] pl-[10px]">Your telegram username</label>
                    <input type="text" id="telegram" name="telegram" placeholder="Enter your telegram's username" className="w-full p-[10px] bg-inherit text-[12px] border border-greyColor rounded-[100px]"/>
                </div>
                <div className="w-full flex flex-col gap-[5px]">
                    <label htmlFor="referral" className="text-[15px] pl-[10px]">Where did you hear about us?</label>
                    <div className="grid grid-cols-3 gap-[5px] w-full">
                        <div className="flex justify-start gap-[5px] items-center">
                            <input type="radio" id="facebook" name="referral" value="facebook" />
                            <label htmlFor='facebook' className="text-[12px] text-greyColorII mt-[1.5px]">Facebook</label>
                        </div>
                        <div className="flex justify-start gap-[5px] items-center">
                            <input type="radio" id="X" name="referral" value="X" />
                            <label htmlFor='X' className="text-[12px] text-greyColorII mt-[1.5px]">X(Twitter)</label>
                        </div>
                        <div className="flex justify-start gap-[5px] items-center">
                            <input type="radio" id="clubhouse" name="referral" value="clubhouse" />
                            <label htmlFor='clubhouse' className="text-[12px] text-greyColorII mt-[1.5px]">Clubhouse</label>
                        </div>
                        <div className="flex justify-start gap-[5px] items-center">
                            <input type="radio" id="linkedin" name="referral" value="linkedin" />
                            <label htmlFor='linkedin' className="text-[12px] text-greyColorII mt-[1.5px]">Linkedin</label>
                        </div>
                        <div className="flex justify-start gap-[5px] items-center">
                            <input type="radio" id="instagram" name="referral" value="instagram" />
                            <label htmlFor='instagram' className="text-[12px] text-greyColorII mt-[1.5px]">Instagram</label>
                        </div>
                        <div className="flex justify-start gap-[5px] items-center">
                            <input type="radio" id="member" name="referral" value="member" />
                            <label htmlFor='member' className="text-[12px] text-greyColorII mt-[1.5px]">ATL Member</label>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-[5px]">
                    <label htmlFor="vouchname" className="text-[15px] pl-[10px]">Vouch Full name</label>
                    <input type='text' id="vouchname" name="vouchname" placeholder="Enter the full name of the person who invited you" className="w-full p-[10px] bg-inherit text-[12px] border border-greyColor rounded-[100px]" />
                </div>
                <div className="w-full flex flex-col gap-[5px]">
                    <label htmlFor='vouchusername' className="text-[15px] pl-[10px]">Vouch telegram username?</label>
                    <input type="text" id="vouchusername" name="vouchusername" placeholder="Enter your vouch's telegram username" className="w-full p-[10px] bg-inherit text-[12px] border border-greyColor rounded-[100px]"/>
                </div>
                <div className="w-full flex flex-col gap-[5px]">
                    <label htmlFor='idSelection' className="text-[15px] pl-[10px]">Which ID you have?</label>
                    <select name='idselection' id='idSelection' className="w-full p-[10px] bg-inherit text-[12px] border border-greyColor rounded-[100px] px-[10px]">
                        <option value='Nin'>NIN</option>
                        <option value='voter'>Voter's Card</option>
                        <option value='Passport'>International Passport</option>
                    </select>
                </div>
                <div className="w-full flex flex-col gap-[5px]">
                    <label htmlFor='evidence' className="text-[15px] pl-[10px]">Upload selected ID</label>
                    <input type="file" className="w-full p-[10px] bg-inherit text-[12px]"/>
                </div>
                <div className="w-full flex flex-col gap-[5px]">
                    <label htmlFor='evidence' className="text-[15px] pl-[10px]">Upload evidence</label>
                    <input type="file" className="w-full p-[10px] bg-inherit text-[12px]"/>
                </div>
            </form>
            <div className="w-full flex flex-col gap-[20px] ">
                <div className="w-full flex gap-[5px] items-center">
                  <input type="checkbox" className="mt-[2px] bg-greyColor border border-greyColor rounded-[5px]"/>
                  <p className="text-[12px] leading-tight">Submitting your kyc means you have read, understoood and agree with <LinkButton>Privacy Policy</LinkButton> and <LinkButton>Terms of service.</LinkButton></p>
                </div>
                <div className="flex flex-col-reverse gap-[10px] justify-between w-full lg:flex-row">
                  <SecondaryButton onClick={prevStep} className="w-[full] lg:w-[350px]">
                    Back
                  </SecondaryButton>
                  <PrimaryButton onClick={nextStep} className="w-[full] lg:w-[350px]">
                    Submit
                  </PrimaryButton>
                </div>
            </div>
        </div>
    );
  };
  

export default KYCStepThree;
  