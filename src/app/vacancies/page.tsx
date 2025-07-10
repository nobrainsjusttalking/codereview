import VacanciesCard from '@/components/VacanciesCard/VacanciesCard';
import { headers } from 'next/headers';
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

export const dynamic = 'force-dynamic';

async function getVacancies(): Promise<Vacancy[]> {
  const headersList = await headers();
  const host = headersList.get('host');
  const protocol = host?.includes('localhost') ? 'http' : 'https';

  const response = await fetch(`${protocol}://${host}/api/vacancies`, {
    cache: 'no-store'
  });
  const data: ApiResponse = await response.json();
  return data.items;
}


export default async function JobPage() {
  const vacanciesData = await getVacancies();
  
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