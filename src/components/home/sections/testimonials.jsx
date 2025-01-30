import OnyekaDP from '../../../assets/images/homeimgs/testi/DPo.jpeg'
import IreneDP from '../../../assets/images/homeimgs/testi/DPi.jpeg'
import FestusDP from '../../../assets/images/homeimgs/testi/DPf.jpeg'
import DamilolaDP from '../../../assets/images/homeimgs/testi/DPd.jpeg'
import { SecondaryButton } from '../../common/Buttons';

const Testimonials = () => {
  const testimonials = [
    {
      DP: <img src={OnyekaDP} alt="Onyeka O" className="w-12 h-12 rounded-full object-cover" />,
      name: "Onyeka O",
      content:
        "ATL (Alpha Training Lab) Is not just an institution for learning how to trade digital currencies, but it is home. It has shaped me and it has been a blessing to my life.",
    },
    {
      DP: <img src={IreneDP} alt="Irene Nwachukwu" className="w-12 h-12 rounded-full object-cover" />,
      name: "Irene Nwachukwu",
      content:
        "Alpha Training Lab (ATL) is the place to be. Joining the family has not only improved my knowledge, I have also adopted a healthier lifestyle especially where money is concerned.",
    },
    {
      DP: <img src={FestusDP} alt="Festus Damilola" className="w-12 h-12 rounded-full object-cover" />,
      name: "Festus Damilola",
      content:
        "ATL is a place where a visionless person becomes one that has a wonderful vision, a home for goal setters and achievers, a place where what people pay thousands of naira or whatever currency to get are gotten for free. ATL is not just a community, it is home to its members. I love ATL.",
    },
    {
      DP: <img src={DamilolaDP} alt="Damilola Oluwatosin" className="w-12 h-12 rounded-full object-cover" />,
      name: "Damilola Oluwatosin",
      content:
        "All we go through in life is designed to shape us so we can be equipped to become who we should be, ATL was pivotal to several mental shifts that added ease to my journey and of course after I joined ATL, I was able to achieve my financial goals.",
    },
  ];

  return (
    <section className="flex flex-col px-[15px] py-[100px] md:px-[30px] lg:px-[60px] gap-[30px]">
      {/* Header */}
      <div className="flex justify-between items-end">
        <div className="w-full md:w-[70%] lg:w-[50%]">
          <h2 className="w-full pr-[5px] text-[32px] md:text-[40px] lg:text-[48px] leading-tight">
            Hear what <span className="text-primary">members</span> have to{" "}
            <span className="text-primary">say</span> about us
          </h2>
        </div>
        <div>
          <SecondaryButton className='hidden md:block ' onClick={() => window.location.href = '/maintenance'}>
            See more
          </SecondaryButton>
        </div>
      </div>

      {/* Testimonials Scrolling Container */}
      <div className="overflow-hidden relative w-full">
        <div className="flex gap-[10px] md:gap-[20px] animate-scroll lg:animate-none lg:justify-between lg:flex-nowrap w-max lg:w-full">
          {(window.innerWidth < 1024 ? [...testimonials, ...testimonials] : testimonials).map((testimonial, index) => (
          // {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col gap-[10px] bg-OtherBgColor p-[20px] py-[30px] rounded-[20px] flex-shrink-0 lg:flex-shrink w-[300px] md:w-[350px] lg:w-full">
              <div className="flex items-center gap-[10px]">
                <div>{testimonial.DP}</div>
                <h5 className="text-xl font-coolvetica lg:text-[18px]">{testimonial.name}</h5>
              </div>
              <p className="text-gray-600 lg:text-[15px] lg:leading-tight">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
