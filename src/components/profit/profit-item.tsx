'use client';
import { CardContent, Typography } from '@mui/material';
import { PropsWithChildren } from 'react';
import Title from '../typography/title/title';
import styles from './profit-item.module.scss';

export default function ProfitItem(props: PropsWithChildren<{
  title: string;
  description: string;
}>) {

  const {
    title,
    description,
  } = props;

  return (
    <CardContent className={styles['card-content']}>
      <Title title={title} className={styles['card-title']} ></Title>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
  );
}
