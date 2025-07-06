'use client';

import { useCategory } from '@/context/CategoryContext';
import Image from 'next/image';
import Link from 'next/link';
import './Header.css';

function Header() {
  const { activeCategory } = useCategory();

  return (
    <header className='header'>
      <div className='top-menu'>
        <div className='logo'>
          <Link href='/' className='logo__text'>
            <span className='hide-mobile'>
              <span className='logo__text--thin'>code</span>review
            </span>
          </Link>
        </div>
        
        <button className='top-menu-btn' name='header-category-btn' type='button'>
          <Image src='/Header/menu.svg' alt='' width={18} height={18} />
          <span>{activeCategory}</span>
          <Image className='arrow-down' src='/Header/arrow-down.svg' alt='' width={18} height={18} />
        </button>

        <button className='top-menu-btn' name='login-btn' type='button'>
          <Image src='/Header/login.svg' alt='' width={18} height={18} />
          <span className='hide-mobile'>Войти</span>
        </button>
      </div>
    </header>
  );
}

export default Header;