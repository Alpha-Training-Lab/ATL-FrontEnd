import lightlogo from '../../assets/images/logos/lightlogo.png'

const Footer = () => {
    const socialLinks = [
      {
        icon: "/img/socials svg/gg_facebook-1.svg",
        url: "https://www.instagram.com/alphatraining_lab?igsh=MW03eW5kdnJhaWhpYw=="
      },
      {
        icon: "/img/socials svg/social icons.svg",
        url: "https://www.facebook.com/share/18LkwzPTbe/?mibextid=wwXIfr"
      },
      {
        icon: "/img/socials svg/gg_facebook.svg",
        url: "https://x.com/alphatrainingl?s=21"
      }
    ];
  
    return (
      <footer className="bg-secondary text-white px-[15px] md:px-[30px] lg:px-[60px] pt-[100px] md:pt-[150px] pb-[10px]">
        <div className="flex flex-col items-center gap-[100px] md:gap-[50px]">
          <div className="flex flex-col items-center gap-[30px] text-center">
            <img 
              src={lightlogo} 
              alt="Alpha training lab light logo" 
              className="w-[75px] h-[75px] md:w-[40px] md:h-[40px]"
            />
            <p className="w-[90%] md:w-full md:px-5">
              Providing global, inclusive, and supportive online community that fosters personal and professional growth through 
              collaboration, engagement and innovation
            </p>
            <div className="flex gap-2.5">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url}
                  className="w-10 h-10 md:w-8 md:h-8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={link.icon} alt="social icon" className="w-full h-full" />
                </a>
              ))}
            </div>
          </div>
  
          <div className="flex justify-between items-center w-full border-t border-gray-200 pt-[20px] md:pt-5">
            <p className="text-[10px] md:text-xs w-1/2">
              Copyright © 2021 - Present. <br className='md:hidden'/> ATL-All rights reserved.
            </p>
            <div className="flex flex-col gap-[5px] md:flex-row md:gap-[10px]">
              <a href="#" className="underline text-sm text-bgColor md:text-xs">Terms of Service</a>
              <a href="#" className="underline text-sm text-bgColor md:text-xs">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;