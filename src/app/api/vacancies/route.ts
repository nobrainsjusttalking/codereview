import vacanciesMockupData from '@/data/mockup.json';
import { NextResponse } from 'next/server';


export async function GET() {
  try {
    const res = await fetch('http://jobs.yourcodereview.com:8005/vacancies/');
    const data = await res.json();
    return NextResponse.json(data);
  } catch (e) {
    console.log(e);
    return NextResponse.json(vacanciesMockupData);
  }
}