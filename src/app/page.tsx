'use client';
import CategoryButton from '@/components/CategoryButton/CategoryButton';
import IndexCard from '@/components/IndexCard/IndexCard';
import { useCategory } from '@/context/CategoryContext';
import Image from 'next/image';
import './App.css';

const categories = ['Python', 'Java', 'JavaScript', 'Data Science', 'QA', 'C#'];

export default function Page() {
  const { activeCategory, setActiveCategory } = useCategory();

  return (
    <main className='main'>
      <div className='main-title-block'>
        <Image src='/assistant-real.png' alt='' width={96.1} height={99} priority />

        <h1 className='page-heading'>Твой Ассистент <br />по поиску работы</h1>

        <p className='main-title-block-text'>Я собрала для тебя все в одном месте, чтобы ты смог быстро найти работу</p>
      </div>
      
      <div className='categories'>
        {categories.map((category) => {
          const isActive = category === activeCategory;

          return (
            <CategoryButton
              key={`${category}`}
              className={isActive ? 'active' : ''}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </CategoryButton>
          );
        })}
      </div>

      <div className='index-cards'>
        <IndexCard href='vacancies/'>
          <h2 className='index-card-heading'>Вакансии / Стажировки</h2>

          <div className='index-card-data'>
            <Image src='/IndexCard/briefcase.svg' alt='' aria-hidden='true' width={26} height={26} />

            <p className='index-card-text hide-mobile'>Актуальные junior-вакансии и стажировки с hh.ru, Habr Career, LinkedIn, Telegram и других платформ</p>
          </div>
        </IndexCard>

        <IndexCard href='#' additionalClass='index-card-in-dev'>
          <h2 className='index-card-heading'>Необходимые навыки</h2>

          <div className='index-card-data'>
            <Image src='/IndexCard/stack.svg' alt='' aria-hidden='true' width={26} height={26} />

            <p className='index-card-text hide-mobile'>Популярные навыки и ключевые слова из вакансий — можно использовать для улучшения резюме</p>
          </div>
        </IndexCard>

        <IndexCard href='#' additionalClass='index-card-in-dev light-gradient-bg'>
          <h2 className='index-card-heading'>Тестовые задания</h2>

          <div className='index-card-data'>
            <Image src='/IndexCard/code.svg' alt='' aria-hidden='true' width={26} height={26} />

            <p className='index-card-text hide-mobile'>Реальные задания с отборов на стажировки и junior-позиции — для практики и портфолио</p>
          </div>
        </IndexCard>

        <IndexCard href='#' additionalClass='index-card-in-dev'>
          <h2 className='index-card-heading'>Собеседования</h2>

          <div className='index-card-data'>
            <Image src='/IndexCard/microphone.svg' alt='' aria-hidden='true' width={26} height={26} />

            <p className='index-card-text hide-mobile'>Реальные вопросы с интервью, сгруппированные по стеку и уровню сложности — с пояснениями и примерами ответов</p>
          </div>
        </IndexCard>

        <IndexCard href='#' additionalClass='index-card-in-dev purplish-gradient-bg'>
          <h2 className='index-card-heading'>IT-мероприятия</h2>

          <div className='index-card-data'>
            <Image src='/IndexCard/calendar.svg' alt='' aria-hidden='true' width={26} height={26} />

            <p className='index-card-text hide-mobile'>Конференции, хакатоны, метапы и курсы — чтобы расширить кругозор, найти стажировку и завести связи</p>
          </div>
        </IndexCard>

        <IndexCard href='#' additionalClass='index-card-in-dev'>
          <h2 className='index-card-heading'>Пет-проекты</h2>

          <div className='index-card-data'>
            <Image src='/IndexCard/code-asterisk.svg' alt='' aria-hidden='true' width={26} height={26} />

            <p className='index-card-text hide-mobile'>Проекты для портфолио, в том числе коммерческие. Отличный способ прокачать скиллы и показать опыт</p>
          </div>
        </IndexCard>

        <IndexCard href='#' additionalClass='index-card-in-dev'>
          <h2 className='index-card-heading'>Контакты рекрутеров</h2>

          <div className='index-card-data'>
            <Image src='/IndexCard/message.svg' alt='' aria-hidden='true' width={26} height={26} />

            <p className='index-card-text hide-mobile'>Контакты рекрутеров и сотрудников, готовых рекомендовать в свою компанию. Можно найти того, кто поможет попасть на собеседование</p>
          </div>
        </IndexCard>

        <IndexCard href='#' additionalClass='index-card-in-dev'>
          <h2 className='index-card-heading'>ИИ инструменты</h2>

          <div className='index-card-data'>
            <Image src='/IndexCard/sparkles.svg' alt='' aria-hidden='true' width={26} height={26} />

            <p className='index-card-text hide-mobile'>Подборка AI-тулзов для автоматизации, разработки и поиска работы — с описаниями и рейтингом полезности</p>
          </div>
        </IndexCard>





        
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
