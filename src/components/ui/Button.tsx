import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={
        'py-2 bg-blue-500 text-white text-center rounded transform transition-transform focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 w-full'
      }
    >
      {children}
    </button>
  );
};

export default Button;
