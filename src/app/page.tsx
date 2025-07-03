'use client';
import CategoryButton from '@/components/CategoryButton/CategoryButton';
import IndexCard from '@/components/IndexCard/IndexCard';
import { indexCardData } from '@/components/IndexCard/IndexCardData';
import { useCategory } from '@/context/CategoryContext';
import Image from 'next/image';
import './App.css';

const categories = ['Python', 'Java', 'JavaScript', 'Data Science', 'QA', 'C#'];

export default function Page() {
  const { activeCategory, setActiveCategory } = useCategory();


  return (
    <main className='main'>
      <div className='main-title-block'>
        <Image src='/assistant-real.png' alt='' width={96.1} height={99}/>

        <h1 className='page-heading'>Твой Ассистент <br />по поиску работы</h1>

        <p className='main-title-block-text'>Я собрала для тебя все в одном месте, чтобы ты смог быстро найти работу</p>
      </div>
      
      <div className='categories'>
        {categories.map((category, idx) => {
          const isActive = category === activeCategory;

          return (
            <CategoryButton
              key={`${category}-${idx}`}
              className={isActive ? 'active' : ''}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </CategoryButton>
          );
        })}
      </div>

      <div className='index-cards'>
        {
          indexCardData.map(({ href, heading, image, imgWidth, imgHeight, text, additionalClass = ''}, idx) => {
            return (
              <IndexCard href={href} key={`${heading}-${idx}`} additionalClass={additionalClass + ' ' + ((href == '#') ? 'index-card-in-dev' : '')}>
                <div className='index-card-data'>
                  <Image src={image} alt='' aria-hidden='true' width={imgWidth} height={imgHeight} />

                  <p className='index-card-text hide-mobile'>{text}</p>
                </div>

                <h2 className='index-card-heading'>{heading}</h2>
              </IndexCard>
            );
          })
        }
        
        <IndexCard href='#' additionalClass='index-card-big'>
          <div className='index-card-data'>
            <Image src='/IndexCard/photo-cont.svg' alt='' aria-hidden='true' width={115} height={40} />
          </div>

          <h2 className='index-card-heading'>База резюме соискателей. Свяжитесь с понравившемся кандидатами напрямую</h2>
        </IndexCard>

        <IndexCard href='#' additionalClass='index-card-accented'>
          <div className='index-card-data'>
            <Image src='/IndexCard/free.svg' alt='' aria-hidden='true' width={79} height={23} />
          </div>

          <h2 className='index-card-heading'>Разместить вакансию</h2>
        </IndexCard>
      </div>
    </main>
  );
}
