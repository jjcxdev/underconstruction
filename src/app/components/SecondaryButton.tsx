import React, { ReactNode } from "react";

interface ButtonProps {
  href: string;
  text: string;
  icon?: ReactNode; // Optional icon prop
}

const SecondaryButton: React.FC<ButtonProps> = ({ href, text, icon }) => {
  const navigate = () => {
    window.location.href = href;
  };

  return (
    <button
      onClick={navigate}
      className="border-2 flex flex-row items-center py-2 px-5 bg-dark hover:text-dark hover:bg-cyan-500 text-cyan-500 hover:border-dark border-cyan-500 transition duration-300 text-sm text-center whitespace-nowrap">
      {icon && <span className="mr-2">{icon}</span>} {text}
    </button>
  );
};

export default SecondaryButton;
