import { PrimaryButton, SecondaryButton } from "../buttons";


const KYCStepTwo = ({ formData, setFormData, nextStep, prevStep }) => {
    return (
      <div className="w-full flex flex-col justify-center items-center gap-[50px] p-[20px] py-[40px] border border-greyColor rounded-[20px] lg:gap-[100px] lg:w-[1100px]">
        {/* <h2 className="text-xl font-bold">Step 2: Basic Information</h2> */}
        <form className="flex flex-col lg:grid lg:grid-cols-3 gap-[20px] w-full">
            <div className="w-full flex flex-col gap-[5px]">
                <label htmlFor="firstname" className="text-[15px] pl-[10px]">First Name</label>
                <input type="text" id="firstname" name="password" placeholder="Enter your first name" className="w-full p-[10px] bg-inherit text-[12px] border border-greyColor rounded-[100px]"/>
            </div>
            <div className="w-full flex flex-col gap-[5px]">
                <label htmlFor="lastname" className="text-[15px] pl-[10px]">Last Name</label>
                <input type="text" id="lastname" name="lastname" placeholder="Enter your last name" className="w-full p-[10px] bg-inherit text-[12px] border border-greyColor rounded-[100px]"/>
            </div>
            <div className="w-full flex flex-col gap-[5px]">
                <label htmlFor="mobilenumber" className="text-[15px] pl-[10px]">Mobile Number</label>
                <input type="tel" id="mobilenumber" name="mobilenumber" placeholder="814XXXXX" className="w-full p-[10px] bg-inherit text-[12px] border border-greyColor rounded-[100px]"/>
            </div>
            <div className="w-full flex flex-col gap-[5px]">
                <label htmlFor="Dateofbirth" className="text-[15px] pl-[10px]">Date of birth</label>
                <input type="date" id="date" name="Dateofbirth" className="w-full p-[10px] bg-inherit text-[12px] border border-greyColor rounded-[100px]" />
            </div>
            <div className="w-full flex flex-col gap-[5px]">
                <label htmlFor="gender" className="text-[15px] pl-[10px]">Gender</label>
                <div>
                    <div className="flex justify-start gap-[5px] items-center">
                        <input type="radio" id="male" name="gender" value='male'/>
                        <label htmlFor='male' className="text-[12px] text-greyColorII mt-[1.5px]">Male</label>
                    </div>
                    <div className="flex justify-start gap-[5px] items-center">
                        <input type="radio" id="female" name="gender" value='female'/>
                        <label htmlFor='female' className="text-[12px] text-greyColorII mt-[1.5px]">Female</label>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col gap-[5px]">
                <label htmlFor="country" className="text-[15px] pl-[10px]">Country of residence</label>
                <input type="text" id="country" name="country" placeholder="Which country do you currently reside?" className="w-full p-[10px] bg-inherit text-[12px] border border-greyColor rounded-[100px]"/>
            </div>
            <div className="w-full flex flex-col gap-[5px]">
                <label htmlFor="state" className="text-[15px] pl-[10px]">What state?</label>
                <input type="text" id="state" name="state" placeholder="state" className="w-full p-[10px] bg-inherit text-[12px] border border-greyColor rounded-[100px]"/>
            </div>
            <div className="w-full flex flex-col gap-[5px]">
                <label htmlFor="homeAddress" className="text-[15px] pl-[10px]">What is your house address?</label>
                <input type="text" id="homeAddress" name="home" placeholder="Enter you house address" className="w-full p-[10px] bg-inherit text-[12px] border border-greyColor rounded-[100px]"/>
            </div>
            <div className="w-full flex flex-col gap-[5px]">
                <label htmlFor="graduate" className="text-[15px] pl-[10px]">Are you a graduate?</label>
                <div>
                    <div className="flex justify-start gap-[5px] items-center">
                        <input type="radio" id="yes" name="graduate" value='yes'/>
                        <label htmlFor='yes' className="text-[12px] text-greyColorII mt-[1.5px]">Yes</label>
                    </div>
                    <div className="flex justify-start gap-[5px] items-center">
                        <input type="radio" id="no" name="graduate" value='no'/>
                        <label htmlFor='no' className="text-[12px] text-greyColorII mt-[1.5px]">No</label>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col gap-[5px]">
                <label htmlFor="institution" className="text-[15px] pl-[10px]">What institution did you graduate?</label>
                <input type="text" id="institution" name="institution" placeholder="Kindly enter the university or institution you graduated" className="w-full p-[10px] bg-inherit text-[12px] border border-greyColor rounded-[100px]"/>
            </div>
            <div className="w-full flex flex-col gap-[5px]">
                <label htmlFor="gradyear" className="text-[15px] pl-[10px]">What year did you graduate?</label>
                <input type="month" id="gradYear" name="gradYear" placeholder="MM/YYYY" className="w-full p-[10px] bg-inherit text-[12px] border border-greyColor rounded-[100px]"/>
            </div>
            <div className="w-full flex flex-col gap-[5px]">
                <label htmlFor="eduLevel" className="text-[15px] pl-[10px]">What is your highest academic level?</label>
                <div className="w-full flex flex-col gap-[5px]">
                    <div className="flex justify-start gap-[5px] items-center">
                        <input type="radio" id="Degree" name="eduLevel" value='degree'/>
                        <label htmlFor='degree' className="text-[12px] text-greyColorII mt-[1.5px] ">ND/OND/HND/Diploma</label>
                    </div>
                    <div className="flex justify-start gap-[5px] items-center">
                        <input type="radio" id="BSc" name="eduLevel" value="BSc" />
                        <label htmlFor='BSc' className="text-[12px] text-greyColorII mt-[1.5px] ">Bachelor's Degree</label>
                    </div>
                    <div className="flex justify-start gap-[5px] items-center">
                        <input type="radio" id="MSc" name="eduLevel" value='MSc' />
                        <label htmlFor='MSc' className="text-[12px] text-greyColorII mt-[1.5px] ">Master's Degree</label>
                    </div>
                    <div className="flex justify-start gap-[5px] items-center">
                        <input type="radio" id="PHd" name="eduLevel" value="PHd" />
                        <label htmlFor='PHd' className="text-[12px] text-greyColorII mt-[1.5px] ">Doctorate Degree</label>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col gap-[5px]">
                <label htmlFor="profession" className="text-[15px] pl-[10px]">What is your current profession?</label>
                <input type="text" id="profession" name="profession" placeholder="Kindly enter the university or institution you graduated" className="w-full p-[10px] bg-inherit text-[12px] border border-greyColor rounded-[100px]"/>
            </div>
        </form>
        <div className="flex flex-col-reverse justify-between w-full gap-[10px] lg:flex-row">
          <SecondaryButton onClick={prevStep} className="w-full lg:w-[350px]">
            Back
          </SecondaryButton>
          <PrimaryButton onClick={nextStep} className="w-full lg:w-[350px]">
            Next
          </PrimaryButton>
        </div>
      </div>
    );
  };
  
  export default KYCStepTwo;
  