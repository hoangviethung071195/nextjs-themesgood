'use client';
import { Typography } from '@mui/material';
import styles from './title.module.scss';
import { PropsWithChildren } from 'react';

export default function Title(props: PropsWithChildren<{
  title: string;
  color?: string;
  className?: string;
}>) {

  const { title, color, className } = props;

  return (
    <Typography variant="h6" className={`${styles['my-title']} ${styles['title']} ${className}`} color={color ? '#fff' : ''}>
      {title}
    </Typography>
  );
}
