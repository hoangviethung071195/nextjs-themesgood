import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import { MenuBarContextProvider } from '@/context/menu-bar-context';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Travelling',
  description: 'go far',
  icons: {
    icon: 'favi.jpg',
    apple: 'favi.jpg'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <MenuBarContextProvider >
      <Header />
      {children}
      <Footer />
    </MenuBarContextProvider>
  );
}
