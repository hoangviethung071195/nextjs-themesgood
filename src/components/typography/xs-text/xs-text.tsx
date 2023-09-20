'use client';
import { SxProps, Theme, Typography } from '@mui/material';
import { PropsWithChildren } from 'react';
import styles from './xs-text.module.scss';

export default function XSText(props: PropsWithChildren<{
  text: string;
  color?: string;
  fontWeight?: string;
  sx?: SxProps<Theme>;
}>) {

  const { children, text, color, fontWeight, sx } = props;

  return (
    <Typography variant="inherit" sx={sx} fontWeight={fontWeight ? fontWeight : 700} className={styles['text']} color={color ? '#fff' : ''}>
      {children}
      {text}
    </Typography>
  );
}
