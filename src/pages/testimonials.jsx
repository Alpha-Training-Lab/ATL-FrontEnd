import { useState, useEffect } from 'react';
import Header from '../components/common/header';
import Footer from '../components/common/footer';
import CTA from '../components/common/cta';



const TestimonialsPage = () => {
    const testimonials = [
      {
        // DP: <img src={OnyekaDP} alt="Onyeka O" className="w-12 h-12 rounded-full object-cover" />,
        name: "Isiolaotan Oladapo",
        occupation: "Student",
        content:
          "ATL has had a profound impact on my life through the constant support and guidance of my mentors. ATL has helped me develop strong savings habit and discipline. I've learned the importance of financial responsibility. I'm forever indebted to the ATL community. God bless ATL.",
      },
      {
        // DP: <img src={IreneDP} alt="Irene Nwachukwu" className="w-12 h-12 rounded-full object-cover" />,
        name: "Afolayan Raphael Adekunle",
        occupation: "Fulltime Trader",
        content:
          "It was a great moral lesson learned day by day in ATL. I learned how to plan ahead and prepare for the future. Also I've learned how to save for no reason. Discipline and accountability is the core of the community. God bless ATL.",
      },
      {
        // DP: <img src={FestusDP} alt="Festus Damilola" className="w-12 h-12 rounded-full object-cover" />,
        name: "Umbu Ebipangowei Hosaiah",
        occupation: "Student",
        content:
          "When you talk about growth I have experienced it in many ways. I may not have reached my goals yet but I'm so happy I have improved from where I was. Apart from financial growth, I have made relationships worth more than money. Believe me even paid organizations can't compare to ATL, because this Training Lab is Really the ALPHA.",
      },
      {
        // DP: <img src={DamilolaDP} alt="Damilola Oluwatosin" className="w-12 h-12 rounded-full object-cover" />,
        name: "Agbugba Esther Chinwendu",
        occupation: "Youth Corp member",
        content:
          "The journey has been awesome so far. Before joining ATL, I had issues with savings, I always had expenses above my income but so far I have learnt that little raindrops do the magic. I started with 40k in May and I have more than 400k aside savings. I'm really grateful to be a part of this family. The mentorship system is amazing and I have really amazing mentors.",
      },
      {
        // DP: <img src={DamilolaDP} alt="Damilola Oluwatosin" className="w-12 h-12 rounded-full object-cover" />,
        name: "Adeyemi Deborah Adebola",
        occupation: "Teaching/Trading",
        content:
          "Whaoo! I really thank God for this great community (ATL). ATL was introduced to my husband by his friend. At first I said it was a scam zone and we went a year without him saying anything to us about it. Fast forward to 2021, he told us again and we got in and started the journey from then. I met with some few people that taught me P2P trading. I'm grateful for this family/community. I bless the day I met this wonderful community.",
      },
      {
        // DP: <img src={DamilolaDP} alt="Damilola Oluwatosin" className="w-12 h-12 rounded-full object-cover" />,
        name: "Usman Abdulmalik",
        occupation: "Salesman",
        content:
          "ATL has helped and guided me to acquire new skills and also helped me get connected to like minded youths and people that have tailored my lifestyle.",
      },
      {
        // DP: <img src={DamilolaDP} alt="Damilola Oluwatosin" className="w-12 h-12 rounded-full object-cover" />,
        name: "Elusanmi Aderonke Tobi",
        occupation: "Entrepreneur/Business",
        content:
          "ATL has been an amazing home for me. I call the community home because that's how I feel whenever I am on Telegram. ATL is not just a community for traders alone, it's a community where you grow, feel loved, welcomed, get help, find answers to problems with amazing bosses and mentors. I thank God that I am not where I want to be, but then I'm not where I used to be before. I Love ATL. God bless us All. Thank you. ☺️",
      },
      {
        // DP: <img src={DamilolaDP} alt="Damilola Oluwatosin" className="w-12 h-12 rounded-full object-cover" />,
        name: "Omowunmi Elesho",
        occupation: "Trader",
        content:
          "ATL has been a life changing opportunity for me, in terms of savings, budgeting and relationship opportunities.",
      },
      {
        // DP: <img src={DamilolaDP} alt="Damilola Oluwatosin" className="w-12 h-12 rounded-full object-cover" />,
        name: "Faith Olamide Olamigoke",
        occupation: "Trader",
        content:
          "I came into ATL with little knowledge about how to earn, keep and grow money. At first, ATL seemed like a motivational community to me, but with time I came to realize that I was wrong. ATL has impacted my life in the accountability, mentoring, relationship and the financial liberation aspect.",
      },
      {
        // DP: <img src={DamilolaDP} alt="Damilola Oluwatosin" className="w-12 h-12 rounded-full object-cover" />,
        name: "Olusomoka Olajumoke Eunice",
        occupation: "Trader",
        content:
          "Joining ATL was one life changing step for me. My life has taken a drastic turn ever since I became a part of this beautiful family. I actively started trading in the month of May. Ever since then, it has been an amazing journey. For someone like me who started with zero capital and now my capital is almost a million naira, this is a massive result.",
      },
      {
        // DP: <img src={DamilolaDP} alt="Damilola Oluwatosin" className="w-12 h-12 rounded-full object-cover" />,
        name: "Francis Chibuike Obele",
        occupation: "Trader",
        content:
          "It’s been great! Saved my life. I’m literally living my dreams each passing day all thanks to ATL.",
      },
      {
        // DP: <img src={DamilolaDP} alt="Damilola Oluwatosin" className="w-12 h-12 rounded-full object-cover" />,
        name: "Oluwatosin Elusanmi",
        occupation: "Teacher and Photographer",
        content:
          "I joined ATL with the mindset that it was a get rich quick scheme because at that time I had just lost all my hard earned money (7 figures) and left with nothing. But after joining ATL, I was able to gain back my sanity and started working towards becoming my dream man. I'm still a work in progress and I trust it's going to happen sooner as I keep grinding by God's grace.",
      },
      {
        // DP: <img src={DamilolaDP} alt="Damilola Oluwatosin" className="w-12 h-12 rounded-full object-cover" />,
        name: "Chinonye Precious Adachukwu",
        occupation: "Student",
        content:
          "Since the day I joined ATL, I have never regretted it. ATL has not only taught me on how to make money but also how to manage the money made in order to really create wealth. I have understood the importance of budgeting and savings and the need to put different structures in place amongst other things in one's journey to create wealth. ATL is really a school everyone out there needs to pass through, and be ready to implement the lessons.",
      },
      {
        // DP: <img src={DamilolaDP} alt="Damilola Oluwatosin" className="w-12 h-12 rounded-full object-cover" />,
        name: "Shotunde David Damilola",
        occupation: "Student",
        content:
          "I knew ATL courtesy of my course mate back then in school and ever since, my financial life has never remained the same. I joined this community September 2021, and since then, I have been struggling to also have my testimony. All thanks to God for how far he has helped, and I'm not looking down on myself as to what I can achieve with this community and more. God bless the ATL community.",
      },
      {
        // DP: <img src={DamilolaDP} alt="Damilola Oluwatosin" className="w-12 h-12 rounded-full object-cover" />,
        name: "Damilola Raphael Festus",
        occupation: "Trader",
        content:
          "ATL has impacted my life in many ways. ATL is a life changing community. It taught me how to be accountable and how to manage my finances properly.",
      },
      {
        // DP: <img src={DamilolaDP} alt="Damilola Oluwatosin" className="w-12 h-12 rounded-full object-cover" />,
        name: "Olamide Jacob",
        occupation: "Accountant",
        content:
          "I joined ATL at a very low moment in my life and finances and the community testimony alone has contributed to what I have now. Joining AS22 and '23 capped it all up for me. I've had to start all over at several times but it has always been on a very special energy. The Systems and Structures, Accountability, Frugality and at the same time the Comfort that has come to me can not be overemphasized. GOD BLESS ATL.",
      },
      {
        // DP: <img src={DamilolaDP} alt="Damilola Oluwatosin" className="w-12 h-12 rounded-full object-cover" />,
        name: "Muje Kenneth",
        occupation: "IT Engineer",
        content:
          "Starting was quite rough for me. My perception about trading was so wrong. So, I was in a stationary point for a while. I changed my strategies this year, discussed with my mentor, talked to few friends, and life has been better. Thank you Prof. Awe for creating this platform. Thank you for being a blessing to this generation.",
      },
    ];

    // Shuffle the testimonials and pick 8 on every page reload
    const [randomTestimonials, setRandomTestimonials] = useState([]);

    useEffect(() => {
        const shuffled = [...testimonials]
            .sort(() => Math.random() - 0.5) // Random shuffle
            .slice(0, 8); // Select 8
        setRandomTestimonials(shuffled);
    }, []);




    // ------------======================-----------
    // page starts here
    return (
        <body>
            <Header />
            <main className='w-full flex flex-col justify-center items-center px-[15px] md:px-[30px] lg:px-[60px]'>
                <div className='flex flex-col items-center gap-[10px] px-[15px] py-[100px] md:px-[50px] lg:px-[100px] '>
                    <h3 className='text-[32px]'>Get <span className='text-primary'>Inspired</span></h3>
                    <p className='text-center'>It's been more than 7 years since ATL has been changing people's lives. From a small group of 6 members to a global community of close to 4k members. Here is how Alpha Training Lab has been impacting the lives of it's members.</p>
                    <p className='mt-[20px]'>Sit back and be inspired!</p>
                </div>
                <div className='flex flex-col gap-[20px] md:flex-row md:flex-wrap md:justify-between'>
                  {randomTestimonials.map((testimonial, index) => (
                    <div key={index} className='flex flex-col items-start gap-[10px] p-[20px] rounded-[20px] bg-OtherBgColor md:w-[48%] lg:w-[49%]'>
                      <div className='flex items-center gap-[5px]'>
                        {/* <div>{testimonial.DP}</div> */}
                        <div>
                          <h3 className='text-[24px]'>{testimonial.name}</h3>
                          <p className=''>{testimonial.occupation}</p>
                        </div>
                      </div>
                      <p>{testimonial.content}</p>
                    </div>
                  ))}
                </div>
                <CTA />
            </main>
            <Footer />
        </body>
    );
};

export default TestimonialsPage;