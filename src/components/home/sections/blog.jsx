const Blog = () => {
  const blogPosts = [
    {
      date: "12/07/2024",
      title: "The effect of assumptions in modern relationships",
      image: "/img/blog/Rectangle238.jpg"
    },
    {
      date: "12/07/2024",
      title: "The effect of assumptions in modern relationships",
      image: "/img/blog/Rectangle242.jpg"
    }
  ];

  return (
    <section className="px-[15px] py-[100px] md:px-[30px] lg:px-[15px]">
      <div className="flex justify-between items-center mb-12">
        <div className="w-full md:w-[90%]">
          <h2 className="text-[32px] leading-tight md:text-3xl sm:text-2xl">
            <span className="text-primary">insights</span> from content <span className="text-primary">writers</span> in the <span className="text-primary">community</span>
          </h2>
        </div>
        <button className="hidden md:block border border-gray-800 px-8 py-2.5 rounded-full hover:bg-gray-100">
          Read more
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-[20px]">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-OtherBgColor rounded-[20px] p-[20px] overflow-hidden ">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-48 object-cover"
            />
            <div className="px-[2px]">
              <h6 className="text-gray-500">{post.date}</h6>
              <h3 className="text-xl font-coolvetica mb-4">{post.title}</h3>
              <a className="flex items-center gap-[5px] text-primary cursor-pointer">
                Read full post
                <img src="../../../assets/icon/ArrowDownRight.svg" alt="Read more icon" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
