'use client';
import VacanciesCard from '@/components/VacanciesCard/VacanciesCard';
import { useEffect, useState } from 'react';
import './page.css';

export default function JobPage() {
  type Vacancy = {
    active: boolean;
    title: string;
    salary: string | null; // not sure
    location: string | null; // not sure
    speciality: string; // string or ""
    internship: boolean;
    remote: boolean;
    url: string;
    description: string;
    source: string;
    image: string; // string or ""
    id: number;
    date_publication: string;
    company: {
      name: string;
      description: string; // maybe always ""
      id: number;
    },
    tags: string[] // not sure
  }

  type ApiResponse = {
    items: Vacancy[];
    limit: number;
    skip: number;
    total: number;
  }

  // const [apiResObj, setApiResObj] = useState<ApiResponse>();

  // useEffect(() => {
  //   fetch('/api/vacancies')
  //     .then((response): Promise<ApiResponse> => response.json())
  //     .then((data) => setApiResObj(data));
  // }, []);


  // const [vacanciesData, setVacanciesData] = useState<Vacancy[]>([]);

  const [vacanciesData, setVacanciesData] = useState<Vacancy[]>([]);

  useEffect(() => {
    fetch('/api/vacancies')
      .then((response): Promise<ApiResponse> => response.json())
      .then((data) => setVacanciesData(data.items));
  }, []);

  console.log('vacanciesData');
  console.log(vacanciesData);
  console.log('vacanciesDataEnd');
 

  return (
    <main className='main'>
      <div className='title-block'>
        <h1 className='page-heading title-block-heading'>data fetching</h1>

        {/* <p className='title-block-text'>
          На этой странице агрегируются junior-вакансии и стажировки из различных источников: 
          hh.ru, Habr Career, LinkedIn, Telegram-каналы и многие другие
        </p> */}
      </div>


      <div className='vacancies'> 
        {
          vacanciesData.map((item, idx) => {
            return (
              <VacanciesCard 
                key={`${idx}`}
                data={item}>

              </VacanciesCard>
            );
          })
        }
      </div>

    </main>
  );
}