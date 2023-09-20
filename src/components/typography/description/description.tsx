'use client';
import { SxProps, Theme, Typography } from '@mui/material';
import styles from './description.module.scss';
import { PropsWithChildren } from 'react';

export default function Description(props: PropsWithChildren<{
  description: string;
  color?: string;
  className?: string;
  sx?: SxProps<Theme>;
}>) {

  const { description, color, className, sx } = props;

  return (
    <Typography sx={sx} variant="body2" className={`${styles['description']} ${className}`} color={color ? '#fff' : ''}>
      {description}
      {props.children}
    </Typography>
  );
}
