import { SecondaryButton } from './Buttons';

const Menu = ({ isOpen, onClose, isLoggedIn }) => {
  return (
    <div 
      className={`fixed top-0 right-0 h-screen w-[250px] bg-primary transform transition-transform duration-300 ease-in-out rounded-l-[10px] ${
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
        <nav className="flex flex-col gap-4 text-white px-[5px] gap-[30px] px-[20px] mt-4">
          <a href="#" className="hover:opacity-80">Home</a>
          <a href="#" className="hover:opacity-80">About</a>
          <a href="#" className="hover:opacity-80">Services</a>
          <a href="#" className="hover:opacity-80">Contact</a>
          {/* Create Account button - only show if not logged in */}
          {!isLoggedIn && (
            <SecondaryButton 
              onClick={() => console.log('Become a member clicked')}
              className="bg-white text-priText border-white hover:bg-white/10 w-full mt-[20px]"
            >
              Become a member
            </SecondaryButton>
          )}
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