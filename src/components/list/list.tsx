'use client';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { PropsWithChildren } from 'react';
import XSText from '../typography/xs-text/xs-text';
import styles from './list.module.scss';

export default function DropdownList(props: PropsWithChildren<{ className: string; items: string[]; }>) {
  const { className, items } = props;
  return (
    <Box className={className + ' ' + styles['box']}>
      <Box component='nav'>
        <List>
          {
            items.map((item, i) => (
              <Box key={item}>
                <ListItem className={styles['list-item']}>
                  <ListItemText primary={<XSText sx={{ fontSize: '0.8rem !important' }} text={item}></XSText>} />
                </ListItem>
                {i !== items.length - 1 && <Divider sx={{
                  margin: '0 15px'
                }}></Divider >}
              </Box>
            ))
          }
        </List>
      </Box>
    </Box >
  );
}
