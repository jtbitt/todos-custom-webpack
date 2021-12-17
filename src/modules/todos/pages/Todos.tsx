import React, { useState } from 'react';
import { useAppDispatch, useAppSelector, useFetching } from '@store';
import { LoadingIndicator } from '@components';
import { SelectChangeEvent } from '@mui/material';

import Input from '@mui/material/Input';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { fetchingSelector, todosSelector } from '../redux/todosSelectors';
import { todosActions } from '../redux/todosSlice';

export const Todos = () => {
  const { isLoading, isError } = useAppSelector(fetchingSelector);
  const todos = useAppSelector(todosSelector);
  const dispatch = useAppDispatch();
  const [completed, setCompleted] = useState('all');

  useFetching(todosActions.fetch);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (isError) {
    throw new Error('Failed fetching data from the API');
  }

  const handleSearchQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(todosActions.updateSearchQuery(event.target.value));
  };

  const handleCompletedFilter = (event: SelectChangeEvent) => {
    const target = event.target as HTMLInputElement;
    setCompleted(target.value);
    dispatch(todosActions.updateCompletedFilter(target.value));
  };

  return (
    <TableContainer component={Paper}>
      <Input placeholder="Search todos..." onChange={handleSearchQuery} />
      <Select
        label="Completed"
        value={completed}
        onChange={handleCompletedFilter}
      >
        <MenuItem value={'all'}>All</MenuItem>
        <MenuItem value={'true'}>True</MenuItem>
        <MenuItem value={'false'}>False</MenuItem>
      </Select>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Completed</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {todos.map((todo: any) => (
            <TableRow key={todo.id}>
              <TableCell>{todo.id}</TableCell>
              <TableCell>{todo.title}</TableCell>
              <TableCell>{todo.completed ? 'true' : 'false'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
