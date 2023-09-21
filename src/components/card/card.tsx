'use client'
import { SxProps, Theme } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import styles from './card.module.scss';

export default function ImageCard(props: React.PropsWithChildren<{
  item: {
    image: string;
    title?: string;
    price?: string;
  };
  cardMediaClass?: string;
  cardMediaStyle?: SxProps<Theme>;
}>) {

  const {
    image,
    title,
    price,
  } = props.item;
  const cardMediaStyle = props.cardMediaStyle || {};

  return (
    <Card className={styles['my-card'] + ' ' + styles['card']}>
      <CardMedia
        className={props.cardMediaClass + ' ' + styles['card-media']}
        sx={{ width: '100%', height: '250px', position: 'relative', ...cardMediaStyle }}
        image={image}
        title={title}
      >
        <Typography variant="h5" className={`${styles['inner-text']} ${price ? styles['price'] : ''}`}>
          {title && title}
          {price && price}
        </Typography>
      </CardMedia>
      {props.children}

    </Card>
  );
}