'use client';
import { useEffect, useState } from 'react';
import './page.css';

export default function JobPage() {
  const [vacanciesData, setVacanciesData] = useState<IVacancy[]>([]);

  interface IVacancy {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      get: {
        lat: string;
        lng: string;
      }
    }
  }

  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/users').then((response): Promise<IVacancy[]> => response.json()).then((data) => setVacanciesData(data));
  }, []);


  // useEffect(() => {
  //   fetch('http://jobs.yourcodereview.com:8005/vacancies/').then((response) => response.json()).then((data) => setRealData(data));
  // }, []);
  // console.log(realData);


  return (
    <main className='main'>
      <div className='title-block'>
        <h1 className='page-heading title-block-heading'>data fetching</h1>

        {/* <p className='title-block-text'>
          На этой странице агрегируются junior-вакансии и стажировки из различных источников: 
          hh.ru, Habr Career, LinkedIn, Telegram-каналы и многие другие
        </p> */}

        <div>
          {vacanciesData.map((item, idx) => {
            return (
              <div key={idx}></div>
            );
            // return (
            //   <p key={idx}>{JSON.stringify(item)}</p>
            // );
          })}
        </div>
      </div>

    </main>
  );
}