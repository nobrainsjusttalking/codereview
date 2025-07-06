import vacanciesMockupData from '@/data/mockup.json';
import { NextResponse } from 'next/server';


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

  return NextResponse.json(vacanciesData);
}