import React, { Component } from 'react';
import Header from '../components/common/header';
import CTA from '../components/common/cta';
import Footer from '../components/common/footer';
import { useAuth } from '../context/AuthContext';
import GrowthIcon from '../assets/svgs/aboutpgsvgs/ic2.svg';
import TransformationIcon from '../assets/svgs/aboutpgsvgs/ic1.svg';
import LearnIcon from '../assets/svgs/aboutpgsvgs/ic3.svg';
import heroImg from '../assets/images/Aboutpgimg/hero/hero.png';
import socialicon1 from '../assets/images/Aboutpgimg/hero/11.png';
import socialicon2 from '../assets/images/Aboutpgimg/hero/12.png';
import socialicon3 from '../assets/images/Aboutpgimg/hero/13.png';
import socialicon4 from '../assets/images/Aboutpgimg/hero/14.png';
import socialicon5 from '../assets/images/Aboutpgimg/hero/15.png';
import socialicon6 from '../assets/images/Aboutpgimg/hero/16.png';
import visionImg from '../assets/images/Aboutpgimg/prof&wife.png';
import startImg from '../assets/images/Aboutpgimg/howp2.jpg';
import goingImg from '../assets/images/Aboutpgimg/howp.jpg';
import timelineImg1 from '../assets/images/Aboutpgimg/timeline/timeline1.jpg';
import timelineImg2 from '../assets/images/Aboutpgimg/timeline/timeline2.jpg';
import timelineImg3 from '../assets/images/Aboutpgimg/timeline/timeline3.jpg';
import timelineImg4 from '../assets/images/Aboutpgimg/timeline/timeline4.jpg';
import timelineImg5 from '../assets/images/Aboutpgimg/timeline/timeline5.jpg';
import arrowIcon from '../assets/svgs/aboutpgsvgs/Vector.svg';
import { useRef } from 'react';


// Imports ends here
// ----------=============================-------------
const AboutPage = () => {
  const { isLoggedIn } = useAuth();

  // values component
  const values = [
    {
      Icon: <img src={GrowthIcon} alt="icon" className="w-12 h-12 rounded-full object-cover" />,
      header: "Growth",
      content:
        "In Alpha training lab, we believe everybody deserves the opportunity to strive for greatness. We do this by democratizing opportunities, giving everyone the chance to leverage on us to attain the better life they seek.",
    },
    {
      Icon: <img src={TransformationIcon} alt="icon" className="w-12 h-12 rounded-full object-cover" />,
      header: "Transformation",
      content:
        "Alpha Training Lab has transformed countless lives beyond expectations. Through unwavering dedication, we've witnessed numerous members progress from humble beginnings to achieving financial and psychological independence.",
    },
    {
      Icon: <img src={LearnIcon} alt="icon" className="w-12 h-12 rounded-full object-cover" />,
      header: "Learn",
      content:
        "Alpha training lab is a place where constant learning take place. We created a community where members can learn and unlearn facts about life, finances, spirituality and realation. Learning is a journey and ATL is there to ride with you",
    },
  ];

  // gallery image scrolling for tablet version


  // -----------------------------
  // page design starts here
  return (
    <div className='flex flex-col w-full'>
      <Header isLoggedIn={isLoggedIn}/>
      <main className='flex flex-col justify-between gap-[0px] items-center'>        
        {/* Hero section */}
        <section className='flex flex-col px-[15px] py-[100px] gap-[50px] md:flex-row md:px-[30px] md:py-[150px] lg:px-[60px] lg:items-center '>
          <div className='flex flex-col gap-[30px] md:w-[50%] '>
            {/* topside */}
            <div>
              <h2 className='text-[40px] leading-none mb-[10px] md:text-[48px] lg:text-[60px] '>Learn. <span className='text-primary'>Connect.</span> Grow.</h2>
              <p className='text-[15px] leading-tight '>Alpha Training Lab is an educational community that helps you achieve all-around Personal Independence.</p>
            </div>
            {/* bottom side */}
            <div>
              <div className='flex flex-col gap-[5px] lg:flex-row lg:gap-[10px] lg:items-end '>
                <div className='flex'>
                  <img src={socialicon1} alt='icon' className='w-[50px] h-[50px]' />
                  <img src={socialicon2} alt='icon' className='w-[50px] h-[50px] ml-[-20px]' />
                  <img src={socialicon3} alt='icon' className='w-[50px] h-[50px] ml-[-20px]' />
                  <img src={socialicon4} alt='icon' className='w-[50px] h-[50px] ml-[-20px]' />
                  <img src={socialicon5} alt='icon' className='w-[50px] h-[50px] ml-[-20px]' />
                  <img src={socialicon6} alt='icon' className='w-[50px] h-[50px] ml-[-20px]' />
                </div>
                <p>Join more than 2k+ Members</p>
              </div>
              <div className='flex'>
                <p className='p-[10px] pl-[0px] '><span className='text-[24px] lg:text-[32px] '>500+</span> Groups</p>
                <p className='p-[10px]'><span className='text-[24px] lg:text-[32px] '>80+</span> Community Mentors</p>
                <p className='p-[10px]'><span className='text-[24px] lg:text-[32px] '>20+</span> Admins</p>
              </div>
            </div>
          </div>
          <div className='md:w-[50%] '>
            <img 
              src={heroImg} 
              alt='just an image' 
              className='md:w-[300px] md:h-[450px] lg:w-full lg:object-contain '
            />
          </div>
        </section>

        {/* vision and mission section  */}
        <section className='flex flex-col px-[15px] py-[100px] bg-secondary text-white gap-[100px] md:px-[30px] md:py-[150px] lg:flex-row-reverse lg:items-center lg:gap-[50px] lg:px-[60px] '>
          <div  className='flex flex-col gap-[20px] md:flex-row md:gap-[40px] lg:flex-col lg:w-[50%] lg:gap-[100px] '>
            <div className='md:w-[50%] lg:w-full '>
              <h2 className='text-[24px] md:text-[32px] ' >The Vision</h2>
              <p>The mind is an incredible tool that can either limit or enable your success. Alpha Training Lab was created to help individuals learn, grow, and achieve personal independence, offering everyone a shot at greatness.</p>
            </div>
            <div className='md:w-[50%] lg:w-full'>
              <h2 className='text-[24px] md:text-[32px]'>The Mission</h2>
              <p>To liberate the <span className='text-[20px] text-primary'>NEXT 1 BILLION PEOPLE</span> financially and personally through hands-on blockchain training, robust mentorship, and high-demand professional courses. By continuously refining these models, we maximize our impact and move closer to our mission.</p>
            </div>
          </div>
          <img src={arrowIcon} alt='#' className='hidden md: md:w-[150px] md:h-[150px] lg:block lg:mt-[300px] lg:ml-[-80px]' />
          <img src={visionImg} alt='Prof and his wife' className='lg:w-[50%] lg:w-[450px]'/>
        </section>

        {/* values section */}
        <section className='flex flex-col gap-[20px] px-[15px] py-[100px] lg:px-[60px] '>
          <h2 className='text-[32px] md:text-[40px] '>Our Values</h2>
          <div className='flex flex-col gap-[30px] lg:flex-row '>
            {values.map((value, index) => (
              <div key={index} className='flex flex-col gap-[10px]  py-[30px] px-[20px] bg-OtherBgColor rounded-[20px] '>
                <div>{value.Icon}</div>
                <div>
                  <h5 className='text-[24px]'>{value.header}</h5>
                  <p>{value.content}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* timeline */}
        <section className='flex flex-col gap-[50px] px-[15px] py-[100px] md:px-[30px] md:gap-[100px] lg:px-[60px] '>
          <div className='flex flex-col gap-[30px] md:flex-row lg:items-center '>
            <div className='md:w-[50%] '>
              <h2 className='text-[32px] mb-[10px] md:text-[40px] lg:text-[48px] '>How it <span className='text-primary'>started</span></h2>
              <div className='flex flex-col gap-[20px]'>
                <p>Alpha Training Lab started with a vision by Prof Awe Olaleye and his beautiful wife, Awe Olumayowa – to ensure that Nigerians and Africans experience financial independence. The community in its early days had about five (5) members.</p>
                <p>Since its inception in 2016, ATL continues to transform the mindset of members year after year, from mere mediocrity to understanding values and how to attract them to their life. The result of these teachings speaks for itself. ATL is known for changing lives from the inside out.</p>
              </div>
            </div>
            <img src={startImg} alt='just an image' className='rounded-[20px] md:w-[50%] md:object-cover ' />
          </div>
          <div className='flex flex-col gap-[30px] md:flex-row-reverse md:items-center '>
            <div>
              <h2 className='text-[32px] mb-[10px] md:text-[40px] lg:text-[48px] '>How it is <span className='text-primary'>going</span></h2>
              <p>Today, Alpha Training Lab is still transforming the lives of its members as over 600+ members have been financially empowered. The community has grown to more than 1,800 official members in six (6) years. We operate over 500 training groups helping members learn, earn, network – committing to a journey towards financial independence.</p>
            </div>
            <img src={goingImg} alt='howp image' className='rounded-[20px] md:w-[50%] md:h-[400px] md:object-cover' />
          </div>
        </section>

        {/* gallery */}
        <section className='flex flex-col gap-[50px] px-[15px] py-[100px] md:px-[30px] lg:px-[60px] '>
          <div className='flex flex-col items-center gap-[10px] '>
            <h2 className='px-[30px] py-[5px] text-[14px] rounded-full bg-OtherBgColor md:text-[16px] md:py-[10px] '>Gallery</h2>
            <h3 className='text-[32px] text-center leading-tight md:text-[40px] lg:text-[48px] '>The Timeline of <span className='text-primary'>ATL Events</span>(HOWP)</h3>
          </div>
          <div className='flex flex-col gap-[50px]'>
            <div className='flex flex-col justify-center items-center gap-[10px] md:flex-row md:overflow-x-auto md:snap-x md:snap-mandory md:scroll-smooth md:gap-[20px] lg:gap-[10px] ' >
              <img src={timelineImg1} alt='#' className='rounded-[20px] md:w-[90%] md:snap-center lg:w-[400px] lg:h-[300px] lg:object-cover ' />
              <img src={timelineImg2} alt='#' className='rounded-[20px] md:w-[90%] md:snap-center lg:w-[400px] lg:h-[300px] lg:object-cover' />
              <img src={timelineImg3} alt='#' className='rounded-[20px] md:w-[90%] md:snap-center lg:w-[400px] lg:h-[300px] lg:object-cover' />
              {/* <img src={timelineImg1} alt='#' className='rounded-[20px] sm:hidden' /> */}
            </div>
            <div className='md:flex md:items-center md:gap-[20px] lg:gap-[50px] '>
              <div className='lg:w-[50%]'>
                <h3 className='text-[24px] mb-[10px] md:text-[32px] lg:text-[40px] '>The First <span className='text-primary'>Hangout with Prof</span>(HOWP)</h3>
                <p>Today, Alpha Training Lab is still transforming the lives of its members as over 600+ members have been financially empowered. The community has grown to more than 1,800 official members in six (6) years. We operate over 500 training groups helping members learn, earn, network – committing to a journey towards financial independence.</p>  
              </div>
              <img src={timelineImg4} alt='#' className='rounded-[20px] mt-[20px] md:w-[50%] object-cover lg:w-[450px] ' />
            </div>
            <div className='md:flex md:flex-row-reverse md:gap-[20px] md:items-center lg:gap-[50px]'>
              <div className='lg:w-[50%] '>
                <h3 className='text-[24px] mb-[10px] md:text-[32px] lg:text-[40px]'>A <span className='text-primary'>Journey</span> to Lagos</h3>
                <p>Today, Alpha Training Lab is still transforming the lives of its members as over 600+ members have been financially empowered. The community has grown to more than 1,800 official members in six (6) years. We operate over 500 training groups helping members learn, earn, network – committing to a journey towards financial independence.</p>  
              </div>
              <img src={timelineImg5} alt='#' className='rounded-[20px] mt-[20px] md:w-[50%] object-cover lg:w-[450px]' />
            </div>
          </div>
        </section>
        
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage; 