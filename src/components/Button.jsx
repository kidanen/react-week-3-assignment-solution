import React from 'react';

const base = "px-3 py-1.5 rounded-md font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2";

const variants = {
  primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
  secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-400",
  danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
};

export default function Button({ children, variant = 'primary', onClick, className = '', ...rest }) {
  return (
    <button
      onClick={onClick}
      className={`${base} ${variants[variant] || variants.primary} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
