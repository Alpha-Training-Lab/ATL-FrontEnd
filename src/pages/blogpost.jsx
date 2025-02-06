import Header from "../components/header";
import Footer from "../components/footer";
import { useParams } from "react-router-dom";
import blogData from "../data/blog";
import CTA from "../components/cta";
// import BlogCard from "../components/blog";

const BlogPost = () => {
  const { slug } = useParams(); // Get slug from URL
  const blog = blogData.find((post) => post.slug === slug);
  // const [featuredBlogs, setFeaturedBlogs] = useState([]);


  if (!blog) {
    return <div className="text-center text-red-500">Blog post not found</div>;
  }


  // ----------=======================------------
  // page design starts here
  return (
    <body>
        <Header />
        <main className="flex flex-col justify-center items-center py-[100px] gap-[100px]">
          <div>  
            <div className="px-[60px] flex flex-col gap-[20px]">
              <div className="flex flex-col gap-[10px]">
                <h3 className="text-[24px] font-bold text-left leading-tight lg:text-[48px]">{blog.title}</h3>
                <div className="rounded-[0px] lg:h-[450px]">{blog.image}</div>
              </div>
              <div className="flex justify-start items-center gap-[10px] p-[20px] py-[10px] border-t-2 border-b-2 border-black">
                <div>{blog.writerDp}</div>
                <div className="flex flex-col items-start gap-[0px]">
                  <h3 className="text-[24px]">{blog.writer}</h3>
                  <p className="italic mt-[-5px]">{blog.date}</p>
                </div>
              </div>
            </div>
            <p className="text-lg">{blog.content}</p>
          </div>
          <div className="border-t-2 border-black">
            <h3 className="text-[40px]">More to Read</h3>
            {/* <div className="flex flex-col md:flex-row gap-[20px]">
              {featuredBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div> */}
          </div>
          
          <CTA />
        </main>
        <Footer />
    </body>
  );
};

export default BlogPost;