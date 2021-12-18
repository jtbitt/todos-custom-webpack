import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '../../../components';

import { useAppSelector, useFetching } from '@store';
import { LoadingIndicator } from '@components';
import { todosActions } from '../redux/todosSlice';
import { fetchingSelector, todosSelector } from '../redux/todosSelectors';

import { DataFilter } from '../components/DataFilter';

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
    <>
      <DataFilter />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
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
    </>
  );
};
