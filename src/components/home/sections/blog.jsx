import BlogImg1 from '../../../assets/images/homeimgs/blog/blogimg1.jpg'
import BlogImg2 from '../../../assets/images/homeimgs/blog/blogimg2.jpg'
import { SecondaryButton } from '../../common/Buttons';


// ---------=============================-----------
// stating contents
const Blog = () => {
  const blogPosts = [
    {
      date: "12/07/2024",
      title: "The effect of assumptions in modern relationships",
      image: <img src={BlogImg1} alt="blog image" className='w-full rounded-[20px] object-cover h-[400px]' />,
    },
    {
      date: "12/07/2024",
      title: "The effect of assumptions in modern relationships",
      image: <img src={BlogImg2} alt="blog image" className='w-full rounded-[20px] object-cover h-[400px]'/>,
    }
  ];

  return (
    <section className="flex flex-col gap-[30px] px-[15px] py-[100px] md:px-[30px] lg:px-[60px]">
      <div className="flex justify-between items-end">
        <div className="w-full md:w-[70%] lg:w-[60%]">
          <h2 className="text-[32px] leading-tight md:text-[40px] lg:text-[48px]">
            <span className="text-primary">Insights</span> from content <span className="text-primary">writers</span> in the <span className="text-primary">community</span>
          </h2>
        </div>
        <div>
          <SecondaryButton className='hidden md:block' onClick={() => window.location.href = '/maintenance'}>
            Read more
          </SecondaryButton>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row gap-[20px]">
        {blogPosts.map((post, index) => (
          <div key={index} className="w-full flex flex-col gap-[20px] bg-OtherBgColor rounded-[20px] p-[20px] overflow-hidden">
            <div>{ post.image }</div>
            <div className="px-[2px]">
              <h6 className="text-gray-500">{post.date}</h6>
              <h3 className="text-xl font-coolvetica mb-4">{post.title}</h3>
              <a className="flex items-center gap-[5px] text-primary cursor-pointer pb-[10px]">
                Read full post
                {/* <img src="../../../assets/icon/ArrowDownRight.svg" alt="Read more icon" /> */}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
