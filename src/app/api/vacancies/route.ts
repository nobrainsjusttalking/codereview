import { NextResponse } from 'next/server';
import vacanciesMockupData from './mockup.json';

export async function GET() {
  const vacanciesData: {
    items: {
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
    }[];
    limit: number;
    skip: number;
    total: number;
  } = vacanciesMockupData;

  console.log(NextResponse.json(vacanciesData));
  return NextResponse.json(vacanciesMockupData);

  // try {
  //   const res = await fetch('http://jobs.yourcodereview.com:8005/vacancies/', {
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   });
  //   const data = await res.json();

  //   return NextResponse.json(data);
  // } catch (error) {
  //   console.log(error);
  
  //   return NextResponse.json({ error: 'API REQUEST ERROR!!!' }, { status: 422 });
  // }
}