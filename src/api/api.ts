export interface ITodosData {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const fetchTodosData = async (): Promise<ITodosData[]> => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/todos',
  );
  const data = await response.json();

  return data;
};
