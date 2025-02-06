import Header from '../components/header';
import Footer from '../components/footer';
import CTA from '../components/cta';
import sholaImg from '../assets/images/Blogpg/writers/shola.jpg';
import wunmiImg from '../assets/images/Blogpg/writers/omowunmi.jpg';
import tinaImg from '../assets/images/Blogpg/writers/tina.jpg';
import blogimg1 from '../assets/images/Blogpg/tgggg.jpeg';
import blogimg2 from '../assets/images/Blogpg/yyyy.jpeg';




const BlogPage = () => {

    const blogPosts = [
      {
        date: "12/07/2024",
        title: "Should I Remain Friends With My Ex?",
        description: "The month of May isn’t even far gone before the gbas gbos on the relationship channel started...",
        image: <img src={blogimg1} alt="#" className='w-full rounded-[10px] object-cover h-[300px]' />,
        writer: "Olushola Ogunkelu",
        writerDp: <img src={sholaImg} alt='writer image' className='w-[50px] h-[50px] rounded-full' />, 
      },
      {
        date: "12/07/2024",
        title: "Spotlight On The Mentorship System With David Adesanya",
        description: "Imagine having a mentor who encourages onging education and adaptation to market trends and...",
        image: <img src={blogimg2} alt="#" className='w-full rounded-[10px] object-cover h-[300px]' />,
        writer: "Omowunmi Esther",
        writerDp: <img src={wunmiImg} alt='writer image' className='w-[50px] h-[50px] rounded-full' />,
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
                  <div key={index} className="w-full flex flex-col gap-[30px] bg-OtherBgColor rounded-[20px] p-[10px] pb-[30px] overflow-hidden md:w-[48%]">
                    <div>{ post.image }</div>
                    <div className="flex flex-col items-start gap-[10px] px-[10px]">
                      <div className='flex gap-[10px]'>
                          <div>{post.writerDp}</div>
                          <div className='flex flex-col gap-[0px] items-start'>
                              <h3 className='text-[20px] lg:text-[24px]'>{post.writer}</h3>
                              <div className='italic text-greyColor mt-[-5px] text-[13px]'>{post.date}</div>
                          </div>
                      </div>
                      <div className='flex flex-col gap-[5px]'>
                          <h3 className='text-[24px] leading-none lg:text-[32px]'>{post.title}</h3>
                          <p className='leading-tight text-greyColor'>{post.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
                </div>
                <CTA />
            </main>
            <Footer />
        </body>
    );
};

export default BlogPage;