import Image from 'next/image';
import Link from 'next/link';
import styles from './VacanciesCard.module.css';

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

type VacancyData = {
  key?: string;
  data: Vacancy
}


export default function VacanciesCard({data}: VacancyData) {
  let { title, remote, internship, salary, image: companyLogo, company: {name: companyName}, location = '', date_publication} = data;
 
  let date = new Date(Date.parse(date_publication));
  let dateFormatted = date.getDate().toString().padStart(2, '0') + '.' +    
                      (date.getMonth() + 1).toString().padStart(2, '0') + '.' +
                      date.getFullYear();
  
  companyLogo = companyLogo || '/VacanciesCard/company-logo-placeholder.png';


  const salaryText = (salary) ? salary : 'не указана';
  const remoteText = (remote) ? 'удаленно' : 'в офис';
  const remoteClass = (remote) ? 'vacancy-tag_remote' : 'vacancy-tag_non-remote';
  const internshipText = (internship) ? 'стажировка' : '';

  return (
    <Link href='#' className={styles['vacancy-card']}>
      <div className='flex flex-col gap-[10px]'>
        <h2 className={styles['vacancy-title']}>{title}</h2>

        <div className='flex flex-wrap gap-[12px]'>
          <span className={`${styles['vacancy-tag']} ${styles[remoteClass]}`}>{remoteText}</span>
          <span className={`${styles['vacancy-tag']} ${styles['vacancy-tag_internship']}`}>{internshipText}</span>
          <span className={`${styles['vacancy-tag']} ${styles['vacancy-tag_salary']}`}>{salaryText}</span>
        </div>
      </div>

      <div className='flex flex-col gap-[15px] lg:flex-row lg:justify-between lg:items-end'>
        <div className='flex gap-[10px]'>
          <Image src={companyLogo} alt='' width={42} height={42} priority />

          <div className='flex flex-col'>
            <span className={styles['vacancy-company-name']}>{companyName}</span>
            <span className={styles['vacancy-location']}>{location}</span>
          </div>

        </div>
          
        <span className={styles['vacancy-date']}>{dateFormatted}</span>
      </div>
    </Link>
  );
}