import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PrimaryButton } from './buttons';
import Menu from './Menu';
import logo from '/Theme=dark.png';


// Imports ends here
// ------------=======================-----------
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) =>
    path === '/blog' ? location.pathname.startsWith('/blog') : location.pathname === path;

  const navLinkClass = (path) =>
    isActive(path) ? 'text-primary font-semibold' : 'hover:text-primary';

  return (
    <header className="fixed top-0 left-0 z-50 flex justify-between items-center w-full px-[15px] md:px-[30px] lg:px-[60px] py-[10px] border-b border-solid bg-white">
      {/* Logo section */}
      <Link onClick={() => window.location.href = '/'}>
        <div className="flex items-center justify-center p-[5px]">
          <img src={logo} alt='Alpha training lab logo' className="w-[70px] h-[40px] md:w-[80px] md:h-[50px] object-contain" />
        </div>
      </Link>
      {/* Navigation and buttons */}
      <div className="flex items-center gap-[2px] md:gap-[20px]">
        {/* Desktop navigation */}
        <nav className="hidden lg:flex lg:items-center gap-[32px]">
          <Link to="/" className={navLinkClass('/')}>Home</Link>
          <Link to="/about" className={navLinkClass('/about')}>About</Link>
          <Link to='/testimonial' className={navLinkClass('/testimonial')}>Testimonials</Link>
          <Link to="/Key players" className={navLinkClass('/Key players')}>Key Players</Link>
          <Link to='/blog' className={navLinkClass('/blog')}>Blog</Link>
        </nav>

        <div className="hidden md:block">
          <PrimaryButton onClick={() => window.location.href = '/ICredirection'}>
            Become a member
          </PrimaryButton>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="menuicon flex flex-col justify-between h-6 w-8 lg:hidden p-[2px]" onClick={toggleMenu}>
          <span className="w-full h-[2px] bg-black"></span>
          <span className="w-full h-[2px] bg-black"></span>
          <span className="w-full h-[2px] bg-black"></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
};

export default Header;