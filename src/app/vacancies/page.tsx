'use client';
import VacanciesCard from '@/components/VacanciesCard/VacanciesCard';
import { useEffect, useState } from 'react';
import styles from './page.module.css';

export default function JobPage() {
  type Vacancy = {
    active: boolean;
    title: string;
    salary: string | null;
    location: string | null;
    speciality: string;
    internship: boolean;
    remote: boolean;
    url: string;
    description: string;
    source: string;
    image: string;
    id: number;
    date_publication: string;
    company: {
      name: string;
      description: string;
      id: number;
    },
    tags: string[]
  }

  type ApiResponse = {
    items: Vacancy[];
    limit: number;
    skip: number;
    total: number;
  }

  const [vacanciesData, setVacanciesData] = useState<Vacancy[]>([]);

  useEffect(() => {
    fetch('/api/vacancies')
      .then((response): Promise<ApiResponse> => response.json())
      .then((data) => setVacanciesData(data.items));
  }, []);
 

  return (
    <main className={styles.main}>
      <div className={styles['main-content']}>
        <div className={styles['title-block']}>
          <h1 className={styles['title-block-heading']}>Вакансии по Data Science</h1>

          <p className={styles['title-block-text']}>
          На этой странице агрегируются junior-вакансии и стажировки из различных источников: 
          hh.ru, Habr Career, LinkedIn, Telegram-каналы и многие другие
          </p>
        </div>

        <div className={styles.vacancies}>
          {
            vacanciesData.length === 0 ? (
            // Покажи 6 скелетонов — столько, сколько примерно будет карточек
              Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  style={{
                    minHeight: '189px', // поставь ту же высоту, что у VacanciesCard
                    borderRadius: '10px',
                    backgroundColor: '#f3f3f3',
                    width: '100%',
                    animation: 'pulse 1.2s ease-in-out infinite'
                  }}
                />
              ))
            ) : (
              vacanciesData.map((item, idx) => (
                <VacanciesCard key={`${idx}`} data={item} />
              ))
            )
          }


          {/* {
            vacanciesData.map((item, idx) => {
              return (
                <VacanciesCard 
                  key={`${idx}`}
                  data={item}>

                </VacanciesCard>
              );
            })
          } */}
        </div>
      </div>
      {/* <Image src='/apiError.png' alt='api error screenshot' className='mb-[100px]' width={500} height={200} /> :P */}
    </main>
  );
}