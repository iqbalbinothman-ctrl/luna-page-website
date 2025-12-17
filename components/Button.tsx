import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'link';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyle = "px-6 py-2 rounded-full transition-all duration-300 text-[14px] font-medium tracking-normal transform active:scale-95";
  
  const variants = {
    primary: "bg-apple-blue text-white hover:bg-blue-600 hover:shadow-lg hover:-translate-y-0.5",
    outline: "bg-transparent border border-apple-dark/30 text-apple-dark hover:border-apple-dark hover:bg-gray-50",
    link: "bg-transparent text-apple-blue hover:underline px-0 py-0 active:scale-100"
  };

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};