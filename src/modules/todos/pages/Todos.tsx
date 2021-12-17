import { useAppSelector, useFetching } from '@store';
import { LoadingIndicator } from '@components';

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

  useFetching(todosActions.fetch);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (isError) {
    throw new Error('Failed fetching data from the API');
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Completed</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {todos.map((todo) => (
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
