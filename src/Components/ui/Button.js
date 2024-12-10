import React from 'react';

const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`rounded bg-gradient-to-r from-[#00FFD1] to-[#00C8DB] px-6 py-3 font-semibold text-black transition-all hover:opacity-90 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

