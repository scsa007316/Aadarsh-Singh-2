// components/Button.tsx
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  // Add other props as needed
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="bg-blue-500 text-white p-2 rounded-md">
      {children}
    </button>
  );
};

export default Button;

