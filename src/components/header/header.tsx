'use client';
import { menuBarContext } from '@/context/menu-bar-context';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import ImportExportOutlinedIcon from '@mui/icons-material/ImportExportOutlined';
import { Button, Container } from '@mui/material';
import * as React from 'react';
import SearchInput from '../input/search/search-input';
import SelectInput from '../input/select/select-input';
import Navbar from '../navbar/navbar';
import SectionTitle from '../title/section-title';
import styles from './header.module.scss';

export default function Header() {

  const { isOpen } = React.useContext(menuBarContext);
  console.log('isOpen ', isOpen);

  const monthsData = [
    {
      label: 'Any Month',
      value: ''
    },
    {
      label: 'January',
      value: 0
    },
    {
      label: 'February',
      value: 1
    },
    {
      label: 'March',
      value: 2
    },
    {
      label: 'April',
      value: 3
    },
    {
      label: 'May',
      value: 4
    },
    {
      label: 'June',
      value: 5
    },
    {
      label: 'July',
      value: 6
    },
    {
      label: 'August',
      value: 7
    },
    {
      label: 'September',
      value: 8
    },
    {
      label: 'October',
      value: 9
    },
    {
      label: 'November',
      value: 10
    },
    {
      label: 'December',
      value: 11
    },
  ];

  const sortData = [
    {
      label: 'Sort By Date',
      value: ""
    },
    {
      label: 'Price Low to High',
      value: 2
    },
    {
      label: 'Price High to Low',
      value: 3
    },
    {
      label: 'Sort By Name',
      value: 4
    },
    {
      label: 'Sort By Popularity',
      value: 5
    },
    {
      label: 'Sort By Review Score',
      value: 6
    },
  ];


  return (
    <header className={styles['header'] + ' ' + (isOpen ? 'blur' : '')}>
      <Navbar />
      <SectionTitle className={styles['title']} title='Where do you want to go?' subTitle='Trips, experiences, and places. All in one service.' color='#fff'></SectionTitle>
      <Container className={styles['form-input']}>
        <SearchInput></SearchInput>
        <SelectInput items={monthsData} iconComponent={CalendarTodayOutlinedIcon} ></SelectInput>
        <SelectInput items={sortData} iconComponent={ImportExportOutlinedIcon} ></SelectInput>
        <Button className={styles['button']}>Search</Button>
      </Container>
      <div className={styles["video-container"]}>
        <iframe
          src="https://www.youtube.com/embed/JPe2mwq96cw?controls=0&autoplay=1&mute=1&playsinline=1&loop=1&playlist=JPe2mwq96cw&showinfo=0"
        ></iframe>
      </div>
    </header>

  );
}