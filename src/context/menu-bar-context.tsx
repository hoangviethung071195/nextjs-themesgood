'use client';
import { Inter } from 'next/font/google';
import { PropsWithChildren, createContext, useState } from 'react';
const inter = Inter({ subsets: ['latin'] });

export const menuBarContext = createContext({
  isOpen: false,
  closeMenu: () => { },
  openMenu: () => { },
});

export function MenuBarContextProvider(props: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  function openMenu() {
    setIsOpen(true);
  }

  return (
    <html lang="en" className={inter.className + ' ' + (isOpen ? 'not-scroll' : '')}>
      <body className={''}>
        <menuBarContext.Provider value={{
          isOpen,
          closeMenu,
          openMenu
        }}>
          {props.children}
        </menuBarContext.Provider>
      </body>
    </html>
  );
}
