import { PrimaryButton, SecondaryButton } from "../Buttons";


const KYCStepThree = ({ formData, setFormData, nextStep, prevStep }) => {
    return (
      <div>
        {/* <h2 className="text-xl font-bold">Step 3: Referral and Upload Documents</h2> */}
        <div className="flex flex-col justify-center items-center gap-[50px] p-[20px] pt-[40px] w-[1000px] border border-greyColor rounded-[20px]">
            <form className="grid grid-cols-2 gap-[20px] w-full">
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
                    <label htmlFor='vouch' className="text-[15px] pl-[10px]">Who is your Vouch?</label>
                    <input type="text" id="vouch" name="vouch" placeholder="Enter your vouch's telegram username" className="w-full p-[10px] bg-inherit text-[12px] border border-greyColor rounded-[100px]"/>
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
            <div className="flex justify-between w-full">
              <SecondaryButton onClick={prevStep} className="w-[250px]">
                Back
              </SecondaryButton>
              <PrimaryButton onClick={nextStep} className="w-[250px]">
                Submit
              </PrimaryButton>
            </div>
        </div>
      </div>
    );
  };
  

export default KYCStepThree;
  