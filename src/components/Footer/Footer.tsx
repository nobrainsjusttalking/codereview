import Image from 'next/image';
import Link from 'next/link';
import Ticker from '../Ticker/Ticker';
import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <Ticker />

      <div className='footer-content'>
        
        <div className='footer-main'>
          <div className='footer-title-card'>
            <span className='footer-logo'>codereview</span>

            <address className='footer-contacts'>
              <a className='footer-contacts__phone-number' href='tel:+74991108276'>+7 (499) 110-82-76</a>
              <a className='footer-contacts__email' href='email:yourcodereview@gmail.com'>yourcodereview@gmail.com</a>
            </address>
          </div>

          <div className='footer-nav-wrapper'>
            <nav className='nav'>
              <div className='nav-column'>
                <Link href='./' className='nav__link'>Программа и тестирование</Link>
                <Link href='./' className='nav__link'>Тарифы</Link>
                <Link href='./' className='nav__link'>Команда</Link>
                <Link href='./' className='nav__link'>О нас</Link>
                <Link href='./' className='nav__link'>Блог</Link>
              </div>
              <div className='nav-column'>
                <Link href='./' className='nav__link'>Вакансии</Link>
                <Link href='./' className='nav__link'>Запись</Link>
                <Link href='./' className='nav__link'>Отзывы</Link>
                <Link href='./' className='nav__link'>Вопросы и ответы</Link>
              </div>
            </nav>

            <button className='test-button' type='button' name='salary-test-btn'>
              <p className='test-button__title'>На какую зарплату я могу претендовать?</p>

              <p className='test-button__text'>Пройти тест</p>
            </button>
          </div>
        </div>


        <div className='footer-bottom'>
          <div className='footer-bottom-links'>
            <div className='footer-bottom-links-socials'>
              <Link href='./'>
                <Image src='/Footer/telegram.svg' alt='Telegram' width={30} height={30} />
              </Link>

              <Link href='./'>
                <Image src='/Footer/youtube.svg' alt='YouTube' width={30} height={30} />
              </Link>

              <Link href='./'>
                <Image src='/Footer/linkedin.svg' alt='LinkedIn' width={30} height={30} />
              </Link>
            </div>


            <div className='footer-bottom-legal-links'>
              <Link href='./' className='footer-bottom-legal-link'>Политика конфиденциальности</Link>

              <svg width='5' height='5' viewBox='0 0 5 5' aria-hidden='true'>
                <circle cx='2.5' cy='2.5' r='2.5' fill='#86888E' />
              </svg>

              <Link href='./' className='footer-bottom-legal-link'>Оферта</Link>
            </div>
          </div>

          <hr />

          <div className='footer-bottom-details'>
            <div className='copyright'>
              <Image src='/Footer/copyright-icon.svg' alt='' width={17} height={18} aria-hidden='true' />

              <span className='copyright-text'>junior for juniors</span>
            </div>

            <p className='footer-bottom__legal-text'>
            ИП Примак Максим Андреевич <br /> 
            ИНН 772142877813 ОГРН 322774600410191
            </p>
          </div>
        </div>
        
      </div>  
    </footer>
  );
}

export default Footer;