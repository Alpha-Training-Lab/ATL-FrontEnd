import Header from '../components/common/header';
import Footer from '../components/common/footer';





const BlogPage = () => {

    const blogPosts = [
        {
          date: "12/07/2024",
          title: "The effect of assumptions in modern relationships",
          description: "Imagine having a mentor who encourages onging education and adaptation to market trends and...",
        //   image: <img src={BlogImg1} alt="blog image" className='w-full rounded-[20px] object-cover h-[400px]' />,
          writer: "Olushola Ogunkelu",
        //   writerDp: <img src={BlogImg1} alt='writer image' className='w-[50px] h-[50px] rounded-full' />, 
        },
        {
          date: "12/07/2024",
          title: "The effect of assumptions in modern relationships",
          description: "Imagine having a mentor who encourages onging education and adaptation to market trends and...",
        //   image: <img src={BlogImg2} alt="blog image" className='w-full rounded-[20px] object-cover h-[400px]'/>,
          writer: "Omowunmi Esther",
        //   writerDp: <img src={BlogImg1} alt='writer image' className='w-[50px] h-[50px] rounded-full' />,
        }
    ];




    // ----------===================------------
    // Page design starts here
    return (
        <body>
            <Header />
            <main className='w-full flex flex-col justify-center items-center px-[15px] md:px-[30px] lg:px-[60px]'>
                <div className='flex flex-col items-center py-[100px]'>
                    <h3 className='text-[32px] md:text-[40px]'>ATL <span className='text-primary'>Blog</span></h3>
                    <p className='text-center md:mx-[10%]'>Alpha Training Lab is an educational community that helps you achieve all-round personal independence.</p>
                </div>
                <div className='flex flex-col gap-[20px] mb-[50px] md:flex-row'>
                {blogPosts.map((post, index) => (
                  <div key={index} className="w-full flex flex-col gap-[20px] bg-OtherBgColor rounded-[20px] p-[20px] overflow-hidden md:w-[48%]">
                    {/* <div>{ post.image }</div> */}
                    <div className="flex flex-col items-start gap-[20px] px-[2px]">
                        <div className='flex flex-col gap-[20px]'>
                            {/* <div>{post.writerDp}</div> */}
                            <div className='flex flex-col gap-[2px] items-start'>
                                <h3 className='text-[20px] lg:text-[24px]'>{post.writer}</h3>
                                <div className='italic'>{post.date}</div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-[5px]'>
                            <div className='text-[24px] leading-none lg:text-[32px]'>{post.title}</div>
                            <div className='leading-tight'>{post.description}</div>
                        </div>
                    </div>
                  </div>
                ))}
                </div>
            </main>
            <Footer />
        </body>
    );
};

export default BlogPage;