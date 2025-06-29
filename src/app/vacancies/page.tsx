import PageHeading from '@/components/PageHeading/PageHeading';
import './page.css';

export default function JobPage() {
  return (
    <main className='main'>
      <div className='title-block'>
        <PageHeading className='title-block-heading'>Вакансии по Data Science</PageHeading>

        <p className='title-block-text'>
          На этой странице агрегируются junior-вакансии и стажировки из различных источников: 
          hh.ru, Habr Career, LinkedIn, Telegram-каналы и многие другие
        </p>
      </div>


    </main>
  );
}