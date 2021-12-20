import React, { useState } from 'react';
import { SelectChangeEvent } from '@mui/material';

import { Input, Select, MenuItem, Grid } from '@components';
import { useAppDispatch } from '@store';
import { todosActions } from '../redux/todosSlice';

export const DataFilter = ({ data }: any) => {
  const [completed, setCompleted] = useState('all');
  const dispatch = useAppDispatch();

  const handleSearchQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(todosActions.updateSearchQuery(event.target.value));
  };

  const handleCompletedFilter = (event: SelectChangeEvent<unknown>) => {
    const target = event.target as HTMLInputElement;
    setCompleted(target.value);
    dispatch(todosActions.updateCompletedFilter(target.value));
  };

  return (
    <Grid container spacing={2} direction="row">
      <Grid item xs={12} lg={6} sx={{ marginTop: '1.45rem' }}>
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

export const styles = {};
