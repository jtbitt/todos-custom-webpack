import React, { useState } from 'react';
import Input from '@mui/material/Input';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import { SelectChangeEvent } from '@mui/material';

import { useAppDispatch } from '@store';
import { todosActions } from '../redux/todosSlice';

export const DataFilter = ({ data }: any) => {
  const [completed, setCompleted] = useState('all');
  const dispatch = useAppDispatch();

  const handleSearchQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(todosActions.updateSearchQuery(event.target.value));
  };

  const handleCompletedFilter = (event: SelectChangeEvent) => {
    const target = event.target as HTMLInputElement;
    setCompleted(target.value);
    dispatch(todosActions.updateCompletedFilter(target.value));
  };

  return (
    <Grid container spacing={2} direction="row">
      <Grid item xs={12} lg={6} style={{ marginTop: '1.3rem' }}>
        <Input
          placeholder="Search todos..."
          onChange={handleSearchQuery}
          style={{ width: '100%' }}
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <Select
          label="Completed"
          value={completed}
          onChange={handleCompletedFilter}
          style={{ width: '100%' }}
        >
          <MenuItem value={'all'}>All</MenuItem>
          <MenuItem value={'true'}>True</MenuItem>
          <MenuItem value={'false'}>False</MenuItem>
        </Select>
      </Grid>
    </Grid>
  );
};

export const styles = {
  table: {
    width: '100%',
    marginTop: '20px',
    marginBottom: '20px',
    border: '1px solid lightgray',
  },
  head: {
    textAlign: 'left' as const,
  },
  borderBottom: {
    borderBottom: '1px solid lightgray',
  },
  number: {
    width: '5%',
    padding: '20px 10px',
  },
  title: {
    width: '80%',
  },
  completed: {
    width: '10%',
    paddingRight: '10px',
  },
};
