const CTA = () => {
  return (
    <section className="px-[15px] py-[100px] md:px-[30px] lg:px-[60px]">
      <div className="bg-OtherBgColor rounded-[20px] px-[20px] py-[100px] md:p-[50px] lg:p-[100px] text-center w-full">
        <h2 className="text-[40px] leading-tight md:text-3xl lg:text-2xl mb-8">
          Join the ATL community today!
        </h2>
        
        <blockquote className="mb-8 w-full">
          <p className="text-gray-600 w-full italic mb-2">
            "In life, you can not ascend to a higher level without a clearer view; you will fall faster than you climbed. Some seemingly unpalatable events are needed for an upgrade in life."
          </p>
          <cite className="text-gray-800 font-medium">
            Prof Awe Olaleye - ATL Co-Founder
          </cite>
        </blockquote>

        <button className="bg-primary px-8 py-2.5 rounded-full hover:bg-gray-100 hover:text-gray-500 flex items-center justify-center gap-2.5 mx-auto" onClick={() => window.location.href = '/redirection'}>
          Become a member
          {/* <img src="/img/icon/ArrowRight.svg" alt="arrow" /> */}
        </button>
      </div>
    </section>
  );
};

export default CTA;
