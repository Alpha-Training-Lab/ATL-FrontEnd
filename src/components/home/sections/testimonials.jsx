import OnyekaDP from '../../../assets/images/homeimgs/testi/DPo.jpeg'
import IreneDP from '../../../assets/images/homeimgs/testi/DPi.jpeg'
import FestusDP from '../../../assets/images/homeimgs/testi/DPf.jpeg'
import DamilolaDP from '../../../assets/images/homeimgs/testi/DPd.jpeg'


const Testimonials = () => {
  const testimonials = [
    {
      // DP: {OnyekaDP},
      name: "Onyeka O",
      content: "ATL (Alpha Training Lab) Is not just an institution for learning how to trade digital currencies, but it is home. It has shaped me and it has been a blessing to my life."
    },
    {
      // DP: {IreneDP},
      name: "Irene Nwachukwu",
      content: "Alpha Training Lab (ATL) is the place to be. Joining the family has not only improved my knowledge, I have also adopted a healthier lifestyle especially where money is concerned."
    },
    {
      // DP: {FestusDP},
      name: "Festus Damilola",
      content: "ATL is a place where a visionless person becomes one that has a wonderful vision, a home for goal setters and achievers, a place where what people pay thousands of naira or whatever currency to get are gotten for free. ATL is not just a community, it is home to its members. I love ATL."
    },
    {
      // DP: {DamilolaDP},
      name: "Damilola Oluwatosin",
      content: "All we go through in life is designed to shape us so we can be equipped to become who we should be, ATL was pivotal to several mental shifts that added ease to my journey and of course after I joined ATL, I was able to achieve my financial goals."
    }
  ];

  return (
    <section className="px-[15px] py-[100px] md:px-[30px] lg:px-[60px] gap-[50px">
      <div className="flex justify-between items-center mb-12">
        <div className="w-full md:w-[90%]">
          <h2 className="w-full text-[32px] md:text-3xl sm:text-2xl leading-tight">
            Hear what <span className="text-primary">members</span> has to{" "}
            <span className="text-primary">say</span> about us
          </h2>
        </div>
        <button className="hidden md:block border border-gray-800 px-8 py-2.5 rounded-full hover:bg-gray-100">
          Explore
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-OtherBgColor p-[20px] rounded-[20px]">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full">{testimonial.DP}</div>
              <h5 className="text-xl font-coolvetica">{testimonial.name}</h5>
            </div>
            <p className="text-gray-600">{testimonial.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
