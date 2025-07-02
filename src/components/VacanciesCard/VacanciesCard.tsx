import './VacanciesCard.css';

type VacancyType = {
  vacancyHeading: string;
  vacancyData: {
    isRemote: string;
    isInternship: boolean;
    salaryAmount: string;
  },

  companyInfo: {
    companyLogo: string;
    companyName: string;
    jobLocation: string;
  }

  date: string;
}

export default function VacanciesCard({vacancyHeading, vacancyData, companyInfo}: VacancyType) {
  return (
    <div className='vacancy-card'>
      <div className='vacancy-card-main'>
      <h2>{vacancyHeading}</h2>

      <div className='flex'>
        <span className='is-remote'>{vacancyData.isRemote}</span>
        <span className='is-internship'>{vacancyData.isInternship}</span>
        <span className='salary-amount'>{vacancyData.salaryAmount}</span>
      </div>

      <div className='vacancy-card-bottom'>

      </div>


    </div>
  );
}