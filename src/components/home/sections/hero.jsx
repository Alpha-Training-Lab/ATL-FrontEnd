import { useState, useEffect } from 'react';
import { PrimaryButton } from '../../common/Buttons';
import heroImage from '../../../assets/images/homeimgs/heromobile.jpg';
import heroImageDesktop from '../../../assets/images/homeimgs/heroimg.jpg';
// import { useEffect, useState } from 'react';

const HeroSection = () => {
  // manage image display
  const [currentImage, setCurrentImage] = useState(heroImage);

  // check screen size
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



// -------=====================================----------
//   Actual page element and styling
  return (
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
  );
};

export default HeroSection;