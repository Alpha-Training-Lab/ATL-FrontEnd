import React from 'react';
// import { useState, useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import CTA from '../components/cta';
import TestimonialCard from '../components/testimonial';
import testimonialData from '../data/testimonials';



const TestimonialsPage = () => {
  const shuffledTestimonials = [...testimonialData].sort(() => Math.random() - 0.5).slice(0, 8);


  // ------------======================-----------
  // page starts here
  return (
    <div>
        <Header />
        
        <main className='w-full flex flex-col justify-center items-center px-[15px] md:px-[30px] lg:px-[60px]'>
          <div className='flex flex-col items-center gap-[10px] px-[15px] py-[100px] md:px-[50px] lg:px-[100px] '>
              <h3 className='text-[32px] md:text-[40px] lg:text-[48px]'>Get <span className='text-primary'>Inspired</span></h3>
              <p className='text-center'>It's been more than 7 years since ATL has been changing people's lives. From a small group of 6 members to a global community of close to 4k members. Here is how Alpha Training Lab has been impacting the lives of it's members.</p>
              <p className='mt-[20px]'>Sit back and be inspired!</p>
          </div>
          <div className='flex flex-col gap-[30px] lg:gap-[10px] justify-start items-center md:flex-row md:flex-wrap md:justify-center md:items-start lg:gap-[20px]'>
            {shuffledTestimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
          
          <CTA />
        </main>

        <Footer />
    </div>
  );
};

export default TestimonialsPage;