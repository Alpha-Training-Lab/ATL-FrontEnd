// import Icon1 from '../../../assets/icon/tick.png'
// import Icon2 from '../../../assets/icon/edit.png'
// import Icon3 from '../../../assets/icon/lock.png' 

const Steps = () => {
  const steps = [
    {
      icon: "../../../assets/icon/tick.png",
      title: "complete induction group process",
      description: "Join the induction group on telegram. complete the reading and drop a summary of what you understand about the group content"
    },
    {
      icon: "../../../assets/icon/edit.png",
      title: "get a bamcode and submit your kyc on the website",
      description: "You will be contacted by the group admin for a BAM Code. Use your BAM Code to submit your KYC on the website and wait for a verification mail."
    },
    {
      icon: "../../../assets/icon/lock.png",
      title: "get verified and gain access",
      description: "Once you have been approved, You gain full access to ATL groups, contents, events and all that the community has to offer, Unrestricted."
    }
  ];

  return (
    <section className="px-[15px] md:px-[30px] lg:px-[60px] py-[100px] bg-secondary text-white">
      <div className="text-center mb-12">
        <p className="text-sm text-white">It's not difficult to join us</p>
        <h2 className="text-[32px] ">Start with a few simple steps</h2>
      </div>
      
      <div className="flex flex-col w-full md:flex-row gap-8 md:px-0">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-left gap-5 px-[20px] py-[30px] bg-stepsBgColor rounded-[20px]">
            <img src={step.icon} alt="step icon" className="w-10 h-10" />
            <div className="text-left">
              <h5 className="text-xl font-coolvetica capitalize mb-2">{step.title}</h5>
              <p className="text-white">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Steps;
