import Link from 'next/link';
import React from 'react';
import './IndexCard.css';

type Props = {
  children: React.ReactNode;
  href: string;
  additionalClass?: string;
}

function IndexCard({children, href, additionalClass = ''}: Props) {
  return (
    <Link href={href} className={`index-card ${additionalClass}`}>
      {children}
    </Link>
  );
}

export default IndexCard;