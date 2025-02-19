import { Link } from "react-router-dom";


const PrimaryButton = ({ children, onClick, className = '', type = 'button', disabled = false }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`bg-primary text-priText px-[35px] py-[10px] rounded-full hover:bg-gray-100 hover:text-gray-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </button>
  );
};

const SecondaryButton = ({ children, onClick, className = '', type = 'button', disabled = false }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-[35px] py-[10px] rounded-full border border-black hover:bg-gray-100 hover:text-gray-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </button>
  );
};

const LinkButton = ({ children, to , className = ''}) => {
  return (
    <Link
      to={to}
      className={`text-14px text-primary hover:text-greyColor hover:underline ${className}`}
    >
      {children}
    </Link>
  )
}

export { PrimaryButton, SecondaryButton, LinkButton }; 