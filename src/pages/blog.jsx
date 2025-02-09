import Header from '../components/header';
import Footer from '../components/footer';
import CTA from '../components/cta';
import BlogCard from '../components/blog';
import blogData from '../data/blog';



const BlogPage = () => {
  // const blogs = getAllBlogs();

  // ----------===================------------
  // Page design starts here
  return (
    <div>
      <Header />
      <main className='w-full flex flex-col justify-center items-center px-[15px] md:px-[30px] lg:px-[60px]'>
        {/* Header */}
        <div className='flex flex-col items-center py-[100px]'>
          <h3 className='text-[32px] md:text-[40px]'>ATL <span className='text-primary'>Blog</span></h3>
          <p className='text-center md:mx-[10%]'>Alpha Training Lab is an educational community that helps you achieve all-round personal independence.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[10px]">
          {blogData.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </div>

        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;