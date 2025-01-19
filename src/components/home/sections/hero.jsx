import { PrimaryButton } from '../../common/Buttons';
import heroImage from '../../../assets/images/homeimgs/heromobile.jpg';

const HeroSection = () => {
  return (
    <section className="px-[15px] md:px-[30px] lg:px-[60px] py-[50px]">
      <div className="flex flex-col lg:flex-row items-center gap-[50px] lg:gap-[60px] mt-[100px]">
        {/* Text Content */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-black">
            Your <span className="text-primary">Leverage</span> To The Better Life You <span className='text-primary'>Seek</span>.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-tight max-w-[600px]">
            Providing global, inclusive, and supportive online community that fosters personal and professional growth through collaboration, engagement, and innovation – One person at a time.
          </p>
          <div className="flex gap-4">
            <PrimaryButton onClick={() => console.log('Get Started clicked')}>
              Get Started
            </PrimaryButton>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1">
          <img 
            src={heroImage} 
            alt="Fitness training" 
            className="w-full h-auto rounded-[20px]"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;