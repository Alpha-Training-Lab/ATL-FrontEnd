import logo from '../assets/images/logos/Theme=dark.png';
import facebookIcon from '../assets/svgs/socials svg/social icons.svg';
import InstagramIcon from '../assets/svgs/socials svg/gg_facebook-1.svg';
import XIcon from '../assets/svgs/socials svg/gg_facebook.svg';




const MaintenancePage = () => {
    const socialLinks = [
        {
          icon: <img src={facebookIcon} alt='social media icon' className='w-[40px] h-[40px]'/>,
          url: "https://www.instagram.com/alphatraining_lab?igsh=MW03eW5kdnJhaWhpYw=="
        },
        {
          icon: <img src={InstagramIcon} alt='social media icon' className='w-[40px] h-[40px]'/>,
          url: "https://www.facebook.com/share/18LkwzPTbe/?mibextid=wwXIfr"
        },
        {
          icon: <img src={XIcon} alt='social media icon' className='w-[40px] h-[40px]'/>,
          url: "https://x.com/alphatrainingl?s=21"
        }
      ];

    return (
        <body className='relative w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden'>
            {/* Animated Background Circles */}
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                <div className="w-[500px] h-[500px] bg-primary opacity-10 rounded-full absolute animate-ping"></div>
                <div className="w-[300px] h-[300px] bg-secondary opacity-10 rounded-full absolute animate-pulse"></div>
            </div>


            <main className='flex flex-col px-[15px] py-[100px] items-center gap-[50px] md:px-[30px] lg:px-[60px] '>
                <img src={logo} alt='#' className='w-[100px] h-[50px] md:w-[150px] md:h-[100px] lg:w-[150px] lg:h-[80px]' />
                <div className='flex flex-col gap-[10px]'>
                    <h3 className='text-[32px] text-center leading-none md:text-[40px] md:px-[50px] lg:px-[250px] '>This page is currently under <span className='text-primary'>maintenance</span>!</h3>
                    <p className='text-[15px] leading-tight text-center md:px-[150px] lg:px-[350px]'>We should be back shortly. Thank you for your patience. You can contact us on any of our socials for help.</p>
                </div>
                <div className='flex flex-col items-center gap-[5px]'>
                    <h3 className='font-semibold'>Follow us</h3>
                    <div className="flex gap-[10px]">
                      {socialLinks.map((socials, index) => (
                        <a key={index} href={socials.url} className="w-10 h-10 md:w-8 md:h-8" target="_blank" rel="noopener noreferrer">
                          {/* <img src={link.icon} alt="social icon" className="w-full h-full" /> */}
                          {socials.icon}
                        </a>
                      ))}
                    </div>
                    <p className="text-[12px] underline">support@alphatraininglab.net</p>
                </div>
            </main>
        </body>
    );
};

export default MaintenancePage;