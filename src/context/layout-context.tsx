'use client';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import { Box } from '@mui/material';
import { Inter } from 'next/font/google';
import { Children, PropsWithChildren, ReactElement, cloneElement, createContext, useEffect, useRef, useState } from 'react';
const inter = Inter({ subsets: ['latin'] });

export const LayoutContext = createContext({
  isHideScroll: false,
  hideScroll: () => { },
  showScroll: () => { },
  isBlur: false,
  blur() { },
  unblur() { },
  scrollToTop() { },
  portalEl: undefined as HTMLDivElement | undefined
});

export function LayoutContextProvider(props: PropsWithChildren) {
  const { children } = props;
  const [isHideScroll, setIsHideScroll] = useState(false);
  const [isBlur, setIsBlur] = useState(false);
  const htmlRef = useRef<HTMLHtmlElement>(null);
  const portalRef = useRef<HTMLDivElement>(null);
  const [portalEl, setPortalEl] = useState<HTMLDivElement>();
  const blurClassname = isBlur ? 'blur' : '';

  useEffect(() => {
    scrollToTop();
    const portalEl = portalRef.current;
    if (portalEl) {
      setPortalEl(portalEl);
    }
  }, []);

  function hideScroll() {
    setIsHideScroll(true);
  }

  function showScroll() {
    setIsHideScroll(false);
  }

  function blur() {
    setIsBlur(true);
  }

  function unblur() {
    setIsBlur(false);
  }

  function scrollToTop() {
    scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  return (
    <LayoutContext.Provider value={{
      isHideScroll,
      hideScroll,
      showScroll,
      isBlur,
      blur,
      unblur,
      scrollToTop,
      portalEl
    }}>
      <Box component='html' ref={htmlRef} lang="en" className={`${inter.className} ${isHideScroll ? 'not-scroll' : ''}`}>
        <Box component='body'>
          <Header className={blurClassname} />
          {
            Children.map(children, child => {
              return cloneElement((child) as ReactElement, {
                className: blurClassname,
              });
            })
          }
          <Footer className={blurClassname} />
          <Box id='portal' ref={portalRef}></Box>
        </Box>
      </Box>
    </LayoutContext.Provider>
  );
}
