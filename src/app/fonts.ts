import { Wix_Madefor_Display, Wix_Madefor_Text } from 'next/font/google';

export const displayFont = Wix_Madefor_Display({
  subsets: ['latin'],
  variable: '--font-display', // кастомная CSS-переменная
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap'
});

export const textFont = Wix_Madefor_Text({
  subsets: ['latin'],
  variable: '--font-text',
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  display: 'swap'
});