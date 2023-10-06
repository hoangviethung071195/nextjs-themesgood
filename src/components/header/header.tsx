'use client';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import ImportExportOutlinedIcon from '@mui/icons-material/ImportExportOutlined';
import { Box, Button, Container, useMediaQuery, useTheme } from '@mui/material';
import { PropsWithChildren, useContext, useEffect, useState } from 'react';
import SearchInput from '../input/search-input/search-input';
import SelectInput from '../input/select-input/select-input';
import Navbar from '../navbar/navbar';
import SectionTitle from '../title/section-title';
import styles from './header.module.scss';
import { monthsData, sortData } from '@/utils/consts/data';
import { LayoutContext } from '@/context/layout-context';

export default function Header(props: PropsWithChildren<{ className?: string; }>) {
  const { className } = props;
  const [isOpen, setIsOpen] = useState(false);
  const { blur, unblur } = useContext(LayoutContext);
  const theme = useTheme();
  const isLessThenMDBreakpoint = useMediaQuery(theme.breakpoints.down('md'));

  function closeMenu() {
    setIsOpen(false);
  }

  function openMenu() {
    setIsOpen(true);
  }

  useEffect(() => {
    if (isOpen && isLessThenMDBreakpoint) {
      blur();
    } else {
      unblur();
    }
  }, [isOpen, isLessThenMDBreakpoint]);

  return (
    <Box component='header' className={`${className} ${styles['header']}`}>
      <Navbar closeMenu={closeMenu} openMenu={openMenu} />
      <SectionTitle className={styles['title']} title='Where do you want to go?' subTitle='Trips, experiences, and places. All in one service.' color='#fff'></SectionTitle>
      <Container className={styles['form-input']}>
        <SearchInput></SearchInput>
        <SelectInput items={monthsData} iconComponent={CalendarTodayOutlinedIcon} ></SelectInput>
        <SelectInput items={sortData} iconComponent={ImportExportOutlinedIcon} ></SelectInput>
        <Button className={styles['button']}>Search</Button>
      </Container>
      <Box className={styles['video-background']}>
        <Box className={styles["video-foreground"]}>
          <iframe src="https://www.youtube.com/embed/JPe2mwq96cw?controls=0&autoplay=1&mute=1&playsinline=1&loop=1&playlist=JPe2mwq96cw&showinfo=0&loop=1" frameBorder={0}></iframe>
        </Box>
      </Box>
    </Box>
  );
}