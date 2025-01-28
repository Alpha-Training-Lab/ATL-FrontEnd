import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PrimaryButton, SecondaryButton } from './Buttons';
import Menu from './Menu';
import logo from '../../assets/images/logos/darklogo.png';


// Imports ends here
// ------------=======================-----------
const Header = ({ isLoggedIn }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 flex justify-between items-center w-full px-[15px] md:px-[30px] lg:px-[60px] py-[10px] border-b border-solid bg-white">
      {/* Logo section */}
      <div className="w-[50px] h-[50px] flex items-center justify-center">
        <img 
          src={logo} 
          alt='Alpha training lab logo' 
          className="w-full h-full object-contain"
        />
      </div>

      {/* Navigation and buttons */}
      <div className="flex items-center gap-[2px] md:gap-[20px]">
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-4">
          <Link to="/" className='hover:text-primary'>Home</Link>
          <Link to="/about" className='hover:text-primary'>About</Link>
          <a href="#" className="hover:text-primary">Services</a>
          <a href="#" className="hover:text-primary">Contact</a>
        </nav>

        {/* Auth Buttons - only show if not logged in */}
        {!isLoggedIn && (
          <div className="flex items-center">
            <SecondaryButton 
              onClick={() => console.log('Login clicked')}
              className="border-0 hover:border hover:border-solid hover:border-grey-900"
            >
              Log In
            </SecondaryButton>
            <div className="hidden md:block">
              <PrimaryButton onClick={() => console.log('Create Account clicked')}>
                Become a member
              </PrimaryButton>
            </div>
          </div>
        )}

        {/* Hamburger Menu for Mobile */}
        <div className="menuicon flex flex-col justify-between h-6 w-8 md:hidden p-[2px]" onClick={toggleMenu}>
          <span className="w-full h-[2px] bg-black"></span>
          <span className="w-full h-[2px] bg-black"></span>
          <span className="w-full h-[2px] bg-black"></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} isLoggedIn={isLoggedIn} />
    </header>
  );
};

export default Header;