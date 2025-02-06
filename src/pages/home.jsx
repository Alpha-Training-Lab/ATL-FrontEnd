import { useState, useEffect } from 'react';
import Header from '../components/header';
import CTA from '../components/cta';
import TestimonialCard from '../components/testimonial';
import testimonialData from '../data/testimonials';
import Footer from '../components/footer';
import { useAuth } from '../context/AuthContext';
import heroImage from '../assets/images/homeimgs/heromobile.jpg'; 
import heroImageDesktop from '../assets/images/homeimgs/heroimg.jpg'; 
import { PrimaryButton } from '../components/Buttons';
import { SecondaryButton } from '../components/Buttons';
import Image from '../assets/images/homeimgs/secimg.jpg';
import Icon1 from '../assets/icon/tick.png';
import Icon2 from '../assets/icon/edit.png';
import Icon3 from '../assets/icon/lock.png';




const HomePage = () => {
  const { isLoggedIn } = useAuth();
  const [currentImage, setCurrentImage] = useState(heroImage);
  const [shuffledTestimonials, setShuffledTestimonials] = useState([]);


  // check screen size and switch image sizes based on screensize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 750) {
        setCurrentImage(heroImageDesktop);
      } else {
        setCurrentImage(heroImage);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);


  // community features data for feature section
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

  // steps section data
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

  // Shuffle testimonial data and pick 5 for the scrolling section
  useEffect(() => {
    setShuffledTestimonials([...testimonialData].sort(() => Math.random() - 0.5).slice(0, 5));
  }, []);





// ------========================------
// design starts here
  return (
    <body>
      <Header isLoggedIn={isLoggedIn} />
      <main className="flex flex-col w-full">
        {/* Hero section */}
        <section className="w-full px-[15px] md:px-[30px] lg:px-[60px] py-[50px]">
          <div className="w-full flex flex-col items-center gap-[50px] lg:gap-[60px] mt-[100px]">
            {/* Text Content */}
            <div className="flex flex-col space-y-6 lg:px-[50px]">
              <h1 className="text-4xl md:text-[48px] md:px-[100px] md:leading-tight md:text-center lg:text-[60px] text-black">
                Your <span className="text-primary">Leverage</span> To The Better Life You <span className='text-primary'>Seek</span>.
              </h1>
              <div className='flex flex-col md:items-center gap-[20px] md:gap-[10px]'>
                <p className="text-lg md:text-xl md:px-[40px] md:text-center text-gray-600 leading-tight">
                  Providing global, inclusive, and supportive online community that fosters personal and professional growth through collaboration, engagement, and innovation – One person at a time.
                </p>
                <div className="flex gap-4">
                  <PrimaryButton onClick={() => window.location.href = '/redirection'}>
                    Become a member
                  </PrimaryButton>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="flex-1">
              <img 
                src={currentImage} 
                alt="The alpha training lab community HOWP yearly meetup" 
                className="w-full h-auto md:h-[350px] lg:h-[500px] md:object-cover rounded-[20px]"
              />
            </div>
          </div>
        </section>

        {/* section 1 section */}
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

        {/* steps section */}
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

        {/* testimonial section */}
        <section className="flex flex-col px-[15px] py-[100px] md:px-[30px] lg:px-[60px] gap-[30px]">
          <div className="flex justify-between items-end">
            <div className="w-full md:w-[70%] lg:w-[50%]">
              <h2 className="w-full pr-[5px] text-[32px] md:text-[40px] lg:text-[48px] leading-tight">
                Hear what <span className="text-primary">members</span> have to{" "}
                <span className="text-primary">say</span> about us
              </h2>
            </div>
            <div>
              <SecondaryButton className='hidden md:block' onClick={() => window.location.href = '/testimonial'}>
                See more
              </SecondaryButton>
            </div>
          </div>

          {/* Testimonail scrolling animation */}
          <div className='overflow-hidden relative w-full'>
            <div className="flex gap-[20px] w-max animate-infinite-scroll">
              {[...shuffledTestimonials, ...shuffledTestimonials].map((testimonial, index) => (
              // {shuffledTestimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </body>
  );
};


export default HomePage;
