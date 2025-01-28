import Image from '../../../assets/images/homeimgs/secimg.jpg'

const Community = () => {
  const communityFeatures = [
    {
      title: "Community Building",
      description: "ATL fosters a supportive and engaging community where members connect, collaborate, and grow together. It provides a platform for like-minded individuals to come together, share ideas, and build relationships."
    },
    {
      title: "Knowledge Sharing",
      description: "ATL offers a range of resources, training, and mentorship opportunities to help members enhance their skills, knowledge, and career prospects. It focuses on individual growth and provides the tools and support needed for personal and professional advancement."
    },
    {
      title: "Finances",
      description: "We understand the importance of financial well-being in your life. Whether you're looking to improve your financial literacy, make informed investment decisions, or manage your personal finances more effectively, we provide valuable insights, workshops, and resources to help you achieve your financial goals."
    },
    {
      title: "Building Valuable relationships",
      description: "ATL provides a diverse network of professionals that members can tap into for guidance, mentorship, and potential partnerships. It creates opportunities for members to expand their professional connections and increase their visibility within their industry or field."
    }
  ];


// ---------===========================-----------
// Actual code page elements
  return (
    <section className="flex flex-col px-[15px] md:px-[30px] lg:px-[60px] py-[100px] gap-[30px] lg:gap-[50px]">
      <h2 className=" text-[32px] leading-tight md:text-[40px] md:px-[50px] md:text-center lg:text-[48px] text-left lg:px-[200px]">
        Become part of a <span className="text-primary">community</span> that <span className="text-primary">works</span>
      </h2>
      
      <div className="flex flex-col lg:flex-row lg:items-center gap-12">
        <div className="lg:w-1/2 flex flex-col gap-[20px]">
          {communityFeatures.map((feature, index) => (
            <div key={index} className="flex flex-col gap-[5px]">
              <h5 className="text-2xl md:text-[24px] font-coolvetica">{feature.title}</h5>
              <p className="md:text-[16px] text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
        <img 
          src={Image} 
          alt="howp6" 
          className="w-full lg:w-1/2 rounded-[20px]"
        />
      </div>
    </section>
  );
};

export default Community;
