import type { Metadata } from 'next';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { ReactNode } from 'react';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import '../../styles/globals.scss';

import { Inter } from 'next/font/google';
import { Montserrat } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Portfolio Axel Martin | Développeur Web',
  description:
    "Portfolio d' Axel Martin. Développeur Web passionné, curieux et en perpétuelle recherche d'amélioration",
};

type LocaleLayoutProps = {
  children: ReactNode;
  params: {
    locale: 'fr' | 'en';
  };
};

export default function LocaleLayout({
  children,
  params: { locale },
}: LocaleLayoutProps) {
  const messages = useMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <html lang={locale}>
        <body className={montserrat.className}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </NextIntlClientProvider>
  );
}
