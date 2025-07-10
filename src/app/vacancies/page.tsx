'use client';
import VacanciesCard from '@/components/VacanciesCard/VacanciesCard';
import { useEffect, useState } from 'react';
import styles from './page.module.css';

  type Vacancy = {
    active: boolean;
    cities: {
      name: string,
      id: number
    };
    company: {
      name: string;
      description: string;
      id: number;
    },
    date_publication: string;
    description: string;
    id: number;
    image: string;
    internship: boolean;
    location: string | null;
    remote: boolean;
    salary: string | null;
    source: string;
    speciality: string;
    tags: string[]
    title: string;
    url: string;
  }

  type ApiResponse = {
    items: Vacancy[] | [];
    limit: number;
    skip: number;
    total: number;
  }



export default function JobPage() {
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
          {vacanciesData.map((item, idx) => (
            <VacanciesCard key={`${idx}`} data={item} />
          ))}
        </div>
      </div>
    </main>
  );
}