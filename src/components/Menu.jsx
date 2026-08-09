import { Link, useLocation } from 'react-router-dom';
import { SecondaryButton } from './buttons';


// Imports ends here
// ------------=======================-----------
const Menu = ({ isOpen, onClose }) => {
  const location = useLocation();

  const isActive = (path) =>
    path === '/blog' ? location.pathname.startsWith('/blog') : location.pathname === path;

  const navLinkClass = (path) =>
    `hover:pr-[20px] ${isActive(path) ? 'font-semibold underline' : 'hover:text-white'}`;

  return (
    <div 
      className={`fixed top-0 right-0 h-screen w-[350px] md:w-[600px] bg-primary transform transition-transform duration-300 ease-in-out rounded-l-[10px] ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {/* Menu content */}
      <div className="flex flex-col h-full p-[10px] gap-[20px]">
        {/* Close button */}
        <button onClick={onClose} className="self-end text-black p-[5px]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Menu items */}
        <nav className="flex flex-col items-end  gap-4 text-white px-[20px] pl-[50px] md:pl-[250px] gap-[30px] px-[20px] mt-4">
        <Link to="/" className={navLinkClass('/')}>Home</Link>
          <Link to="/about" className={navLinkClass('/about')}>About</Link>
          <Link to='/testimonial' className={navLinkClass('/testimonial')}>Testimonials</Link>
          <Link to="/Key players" className={navLinkClass('/Key players')}>Key Players</Link>
          <Link to='/blog' className={navLinkClass('/blog')}>Blog</Link>
          <SecondaryButton onClick={() => window.location.href ='/ICredirection'} className="bg-white text-priText border-white hover:bg-white/10 w-full mt-[20px] md:hidden"
          >
            Become a member
          </SecondaryButton>
        </nav>

        {/* Footer Section */}
        <div className="mt-auto px-[5px]">
          {/* Copyright Footer */}
          <p className="text-priText text-[10px] text-center mb-[1px]">
            Copyright ATL 2021-present
          </p>
        </div>
      </div>
    </div>
  );
};

export default Menu; 