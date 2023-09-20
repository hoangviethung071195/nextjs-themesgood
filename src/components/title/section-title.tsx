'use client'
import { Typography } from '@mui/material';
import { PropsWithChildren } from 'react';
import styles from './section-title.module.scss';

export default function SectionTitle(props: PropsWithChildren<{ title: string; subTitle: string; className?: string; color?: string; }>) {
  const { title, subTitle, className, color } = props;
  return (
    <>
      <Typography variant="h2" align='center' color={color ? color : 'inherit'} className={className + ' ' + styles['title']}>
        {title}
      </Typography>
      <Typography variant="inherit" color={color ? color : 'GrayText'} align='center' sx={{
        fontWeight: 500,
      }}>
        {subTitle}
      </Typography>
    </>
  );
}
