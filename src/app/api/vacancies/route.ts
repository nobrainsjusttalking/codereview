// src/app/api/vacancies/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch('http://jobs.yourcodereview.com:8005/vacancies/');
    const data = await res.json();

    return NextResponse.json(data);
  } catch (pass) {
    console.log(pass);
    return NextResponse.json({ error: 'Ошибка запроса к API' }, { status: 500 });
  }
}