import React from 'react';
import { Link } from 'react-router-dom';
import blogData from '../data/blog';

const BlogCard = ({ blog }) => {
  return (
    <Link to={`/blog/${blog.slug}`}>
      <div className='w-full flex flex-col p-[10px] gap-[30px] rounded-[20px] bg-OtherBgColor'>
        <div className='h-[250px]'>{blog.image}</div>
          <div className='flex flex-col gap-[5px] px-[5px] pb-[20px]'>
            <h3 className='text-[24px] mb-[5px] leading-none'>{blog.title}</h3>
            <p className='text-greyColor leading-tight'>{blog.excerpt}</p>
          </div>
      </div>
    </Link>
  );
};

export default BlogCard;
