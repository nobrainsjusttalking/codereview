import Image from 'next/image';
import './VacanciesCard.css';

// type VacancyType = {
//   key?: string;
//   title: string;
//   remote: string;
//   internship: boolean;
//   salary: string;
//   companyLogo: string;
//   companyName: string;
//   location: string;
//   date: string;
// }

type Vacancy = {
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
  }

  type VacancyData = {
    key?: string;
    data: Vacancy
  }


export default function VacanciesCard({data}: VacancyData) {
  // const cardHeading = '';
  // const isRemote = '';
  // const isInternship = '';
  // const salary = '';
  // const companyLogo = '';
  // const companyName = '';
  // const location = '';
  // const date = '';

  let { title, remote, internship, salary, image: companyLogo, company: {name: companyName}, location = '', date_publication: date} = data;
  
  console.log(companyLogo);
  companyLogo = companyLogo || '/VacanciesCard/company-logo-placeholder.png';

  console.log('REMOTE START');
  console.log(remote);
  console.log('REMOTE END');

  console.log(companyLogo);
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

      <div className='flex'>
        <div>
          <Image src={companyLogo} alt='' width={42} height={42} />

          <div>
            <span className='vacancy-company-name'>{companyName}</span>
            <span className='vacancy-location'>{location}</span>
          </div>

        </div>
          
        <span className='vacancy-date'>{date}</span>
      </div>
    </div>
  );
}