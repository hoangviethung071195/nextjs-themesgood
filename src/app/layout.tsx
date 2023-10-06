import { LayoutContextProvider } from '@/context/layout-context';
import { Box } from '@mui/material';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import './globals.scss';

export const metadata: Metadata = {
  title: 'Travelling',
  description: 'go far',
  icons: {
    icon: 'favi.jpg',
    apple: 'favi.jpg'
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {

  return (
    <LayoutContextProvider>
      <Box component='main'>
        {children}
      </Box>
    </LayoutContextProvider>
  )
}
