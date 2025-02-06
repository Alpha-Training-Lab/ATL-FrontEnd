import React from 'react';
import testimonialData from '../data/testimonials';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className='flex flex-col p-[20px] gap-[10px] rounded bg-OtherbgColor w-[350px] lg:w-[350px]'>
        <div className='flex items-center gap-[10px]'>
            <div>{testimonial.DP}</div>
            <div>
                <h3 className='text-lg'>{testimonial.name}</h3>
                <p className='text-sm text-greyColor mt-[-5px]'>{testimonial.occupation}</p>
            </div>
        </div>
        <div>
            <p className='text-sm'>{testimonial.content}</p>
        </div>
    </div>
  );
};

export default TestimonialCard;
