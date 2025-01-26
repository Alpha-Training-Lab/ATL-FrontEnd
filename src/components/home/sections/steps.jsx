import Icon1 from '../../../assets/icon/tick.png'
import Icon2 from '../../../assets/icon/edit.png'
import Icon3 from '../../../assets/icon/lock.png' 

const Steps = () => {
  const steps = [
    {
      icon: <img src={Icon1} alt="icon" className="w-12 h-12 rounded-full object-cover" />,
      // icon: "../../../assets/icon/tick.png",
      title: "complete induction group process",
      description: "Join the induction group on telegram. complete the reading and drop a summary of what you understand about the group content"
    },
    {
      icon: <img src={Icon2} alt="icon" className="w-12 h-12 rounded-full object-cover" />,
      title: "get a bamcode and submit your kyc on the website",
      description: "You will be contacted by the group admin for a BAM Code. Use your BAM Code to submit your KYC on the website and wait for a verification mail."
    },
    {
      icon: <img src={Icon3} alt="icon" className="w-12 h-12 rounded-full object-cover" />,
      title: "get verified and gain access",
      description: "Once you have been approved, You gain full access to ATL groups, contents, events and all that the community has to offer, Unrestricted."
    }
  ];

  return (
    <section className="px-[15px] md:px-[30px] lg:px-[60px] py-[100px] bg-secondary text-white">
      <div className="text-center mb-12">
        <p className="text-sm text-white">It's not difficult to join us</p>
        <h2 className="text-[32px] md:text-[40px] lg:text-[48px] leading-none">Start with a few simple steps</h2>
      </div>
      
      <div className="flex flex-col w-full lg:flex-row gap-8 md:px-[100px] lg:px-[0px]">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-left gap-5 px-[20px] py-[30px] bg-stepsBgColor rounded-[20px]">
            <div>{step.icon}</div>
            <div className="text-left">
              <h5 className="text-xl md:text-[24px] md:pr-[100px] md:leading-snug font-coolvetica capitalize mb-2">{step.title}</h5>
              <p className="text-white">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Steps;
