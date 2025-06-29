import React from 'react';
import './PageHeading.css';

type Props = {
  children: React.ReactNode;
  className?: string;
}

function PageHeading({ children, className = '' }: Props) {
  return <h1 className={`page-heading ${className}`}>{children}</h1>;
}

export default PageHeading;