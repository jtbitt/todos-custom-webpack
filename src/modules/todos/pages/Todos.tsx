import { useAppSelector, useFetching } from '@store';
import { LoadingIndicator } from '@components';
import { todosActions } from '../redux/todosSlice';
import { fetchingSelector, todosSelector } from '../redux/todosSelectors';

import { DataFilter } from '../components/DataFilter';
import { DataTable } from '../components/DataTable';

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
      <DataTable todos={todos} />
    </>
  );
};
