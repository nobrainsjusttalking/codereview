import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import './IndexCard.css';

type Props = {
  children: React.ReactNode;
  href: string;
  image: string;
  text?: string;
  width: number;
  height: number;
  additionalClass?: string;
}

function IndexCard({children, href, image, text = '', width, height, additionalClass = ''}: Props) {
  return (
    <Link href={href} className={`index-card ${additionalClass}`}>
      <div className='index-card-data'>
        <Image src={image} alt='' aria-hidden='true' width={width} height={height} />

        <p className='index-card-text hide-mobile'>{text}</p>
      </div>

      <h2 className='index-card-heading'>{children}</h2>
    </Link>
  );
}

export default IndexCard;