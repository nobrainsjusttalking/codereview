import Image from 'next/image';
import './VacanciesCard.css';

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
  let dateFormatted = date.getDate().toString().padStart(2, '0') +     
                      (date.getMonth() + 1).toString().padStart(2, '0') +
                      date.getFullYear();
  
  companyLogo = companyLogo || '/VacanciesCard/company-logo-placeholder.png';

  return (
    <div className='vacancy-card'>
      <div className='flex flex-col gap-[10px]'>
        <h2 className='vacancy-title'>{title}</h2>

        <div className='flex flex-wrap'>
          <span className={`vacancy-tag is-remote-${remote}`}>
            {
              remote
            }
          </span>
          <span className='vacancy-tag vacancy-tag_internship'>{internship}</span>
          <span className='vacancy-tag vacancy-tag_salary'>{salary}</span>
        </div>
      </div>

      <div className='flex justify-between items-end'>
        <div className='flex'>
          <Image src={companyLogo} alt='' width={42} height={42} />

          <div className='flex bg-red-300'>
            <span className='vacancy-company-name'>{companyName}</span>
            <span className='vacancy-location'>{location}</span>
          </div>

        </div>
          
        <span className='vacancy-date'>{dateFormatted}</span>
      </div>
    </div>
  );
}