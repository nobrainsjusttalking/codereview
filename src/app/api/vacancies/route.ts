// src/app/api/vacancies/route.ts
import { NextResponse } from 'next/server';
import vacanciesMockupData from './mockup.json';


// interface RequestVacanciesError {
//   loc: string[], 
//   msg: string, 
//   type: string
// }

export async function GET() {
  const vacanciesData: {
    items: {
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
    }[];
    limit: number;
    skip: number;
    total: number;
  } = vacanciesMockupData;


  console.log('myboy');
  console.log(NextResponse.json(vacanciesData));
  console.log('myboyend');
  return NextResponse.json(vacanciesMockupData);

  // try {
  //   const res = await fetch('http://jobs.yourcodereview.com:8005/vacancies/', {
  //     headers: {
  //       'Content-Type': 'application/json'
  //       // Добавьте другие необходимые заголовки
  //     }
  //   });
  //   const data = await res.json();

  //   return NextResponse.json(data);
  // } catch (error) {
  //   console.log(error);
  
  //   return NextResponse.json({ error: 'Ошибка запроса к API' }, { status: 422 });
  // }
}