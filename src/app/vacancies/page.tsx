import vacanciesData from '@/app/api/vacancies/mockup.json';
import VacanciesCard from '@/components/VacanciesCard/VacanciesCard';
import styles from './page.module.css';

  type Vacancy = {
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
  }

  type ApiResponse = {
    items: Vacancy[];
    limit: number;
    skip: number;
    total: number;
  }



export default async function JobPage() {
  // const [vacanciesData, setVacanciesData] = useState<Vacancy[]>([]);

  // useEffect(() => {
  //   fetch('/api/vacancies')
  //     .then((response): Promise<ApiResponse> => response.json())
  //     .then((data) => setVacanciesData(data.items));
  // }, []);
  const data: ApiResponse = vacanciesData;

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
          {data.items.map((item, idx) => (
            <VacanciesCard key={`${idx}`} data={item} />
          ))}
        </div>
      </div>
    </main>
  );
}