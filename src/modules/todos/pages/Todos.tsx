import { useAppSelector, useFetching } from '@store';
import { LoadingIndicator } from '@components';

import { fetchingSelector } from '../redux/todosSelectors';
import { todosActions } from '../redux/todosSlice';

export const Todos = () => {
  const { isLoading, isError } = useAppSelector(fetchingSelector);

  useFetching(todosActions.fetch);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (isError) {
    throw new Error('Failed fetching data from the API');
  }

  return <div>cool</div>;
};
