'use client';
import { Button, CardActions, CardContent, Typography } from '@mui/material';
import { PropsWithChildren } from 'react';
import Title from '../typography/title/title';
import XSText from '../typography/xs-text/xs-text';
import styles from './article-item.module.scss';

export default function AticleItem(props: PropsWithChildren<{
  date: string;
  title: string;
  description: string;
}>) {

  const {
    date,
    title,
    description,
  } = props;

  return (
    <CardContent className={styles['card-content']}>
      <XSText text={date}></XSText>
      <Title title={title} className={styles['card-title']}></Title>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
      <CardActions className={styles['card-actions']}>
        <Button size="medium" className=''>Read More {'>'}</Button>
      </CardActions>
    </CardContent>
  );
}
