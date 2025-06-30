'use client';
import CategoryButton from '@/components/CategoryButton/CategoryButton';
import IndexCard from '@/components/IndexCard/IndexCard';
import { indexCardData } from '@/components/IndexCard/IndexCardData';
import PageHeading from '@/components/PageHeading/PageHeading';
import Image from 'next/image';
import { useState } from 'react';
import './App.css';

const categories = ['Python', 'Java', 'JavaScript', 'Data Science', 'QA', 'C#'];

export default function Page() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <main className='main'>
      <div className='title-block'>
        <Image src='/assistant-real.png' alt='' width={96.1} height={99}/>

        <PageHeading className='title-block__page-heading'>Твой Ассистент по поиску работы</PageHeading>

        <p className='title-block__text'>Я собрала для тебя все в одном месте, чтобы ты смог быстро найти работу</p>
      </div>
      
      <div className='categories'>
        {
          categories.map((category, idx) => {
            if (idx == activeIndex) {
              return <CategoryButton className='active' key={`${category}-${idx}`} >{category}</CategoryButton>;
            }
            return <CategoryButton onClick={() => {setActiveIndex(idx);}} key={`${category}-${idx}`}>{category}</CategoryButton>;
          })
        }
      </div>

      <div className='index-cards'>
        {
          indexCardData.map(({ href, heading, image, imgWidth, imgHeight, text, additionalClass = ''}, idx) => {
            return (
              <IndexCard href={href} key={`${heading}-${idx}`} image={image} text={text} width={imgWidth} height={imgHeight} additionalClass={additionalClass}>
                <div className='index-card-data'>
                  <Image src={image} alt='' aria-hidden='true' width={imgWidth} height={imgHeight} />

                  <p className='index-card-text hide-mobile'>{text}</p>
                </div>

                <h2 className='index-card-heading'>{heading}</h2>
              </IndexCard>
            );
          })
        }
      </div>
    </main>
  );
}
