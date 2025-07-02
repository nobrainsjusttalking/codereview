// src/app/api/vacancies/route.ts
import { NextResponse } from 'next/server';


// interface RequestVacanciesError {
//   loc: string[], 
//   msg: string, 
//   type: string
// }

export async function GET() {
  try {
    const res = await fetch('http://jobs.yourcodereview.com:8005/vacancies/', {
      headers: {
        'Content-Type': 'application/json'
        // Добавьте другие необходимые заголовки
      }
    });
    const data = await res.json();

    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
  
    return NextResponse.json({ error: 'Ошибка запроса к API' }, { status: 422 });
  }
}