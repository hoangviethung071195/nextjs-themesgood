'use client'
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import * as React from 'react';
import styles from './select-input.module.scss';

export default function SelectInput(props: {
  items: { value: string | number, label: string; }[];
  iconComponent?: React.ElementType;
}) {
  const { items, iconComponent } = props;
  const [value, setValue] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
  };

  return (
    <FormControl sx={{ minWidth: '25%', bgcolor: '#fff' }} size="small">
      <Select
        className={styles['select']}
        value={value}
        onChange={handleChange}
        displayEmpty
        IconComponent={iconComponent}
      >
        {
          items.map(item => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))
        }
      </Select>
    </FormControl >
  );
}