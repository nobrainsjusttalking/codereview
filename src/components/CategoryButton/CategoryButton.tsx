import React from 'react';
import './CategoryButton.css';

type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

function CategoryButton({ children, className = '', onClick }: Props) {
  return (
    <button className={`category-btn ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default CategoryButton;