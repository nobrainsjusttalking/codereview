'use client';
import FilterSwitcher from '@/components/FilterSwitcher/FilterSwitcher';
import PageHeading from '@/components/PageHeading/PageHeading';
import { useEffect, useState } from 'react';
import './page.css';

export default function JobPage() {
  const [vacanciesData, setVacanciesData] = useState([]);

  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/users').then((response) => response.json()).then((data) => setVacanciesData(data));
  }, []);

  const [realData, setRealData] = useState([]);

  fetch('/api/vacancies')
    .then(response => response.json())
    .then(data => setRealData(data));

  
  console.log(realData);

  // useEffect(() => {
  //   fetch('http://jobs.yourcodereview.com:8005/vacancies/').then((response) => response.json()).then((data) => setRealData(data));
  // }, []);
  // console.log(realData);


  return (
    <main className='main'>
      <div className='title-block'>
        <PageHeading className='title-block-heading'>Вакансии по Data Science</PageHeading>

        <p className='title-block-text'>
          На этой странице агрегируются junior-вакансии и стажировки из различных источников: 
          hh.ru, Habr Career, LinkedIn, Telegram-каналы и многие другие
        </p>
      </div>

      <div className='test1'>
        {
          vacanciesData.map((item, idx) => {
            return (
              <div key={`${item}-${idx}`}></div>
            );
          })
        }
        {vacanciesData.toString()}
      </div>

      <div className='test1'>
        
      </div>

      <FilterSwitcher />


    </main>
  );
}