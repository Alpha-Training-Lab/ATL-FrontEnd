import HeroSection from './sections/hero';
import CommunitySection from './sections/community';
import StepsSection from './sections/steps';
import TestimonialSection from './sections/testimonials';
import BlogSection from './sections/blog';
import CTASection from './sections/cta';
// Import other sections as needed

const Main = () => {
  return (
    <main className="flex flex-col justify-between w-full">
      <HeroSection />
      <CommunitySection />
      <StepsSection />
      <TestimonialSection />
      <BlogSection />
      <CTASection />
    </main>
  );
};

export default Main; 