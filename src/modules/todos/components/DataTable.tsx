import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@components';

interface IDataTableProps {
  todos: any;
}

export const DataTable = ({ todos }: IDataTableProps) => {
  return (
    <TableContainer>
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
