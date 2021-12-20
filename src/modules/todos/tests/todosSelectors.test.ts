import {
  searchTodos,
  filterTodos,
  getCurrentTodos
} from '../redux/todosSelectors';
import todos from "./todos.json";

describe('todosSelectors utils', () => {
  it('searchTodos function should work properly', () => {
    expect(searchTodos(todos, "DELecTus").length).toEqual(7);
    expect(searchTodos(todos, "DELecTus")[0].title).toEqual(expect.stringContaining('delectus'));
    expect(searchTodos(todos, "$$#@dD@##")).toEqual([]);
  });

  it('filterTodos function should work properly', () => {
    expect(filterTodos(todos, "true")[0].completed).toEqual(true);
    expect(filterTodos(todos, "false")[0].completed).toEqual(false);
    expect(filterTodos(todos, "all").length).toEqual(todos.length);
  });

  it('getCurrentTodos function should work properly', () => {
    expect(getCurrentTodos(todos, '', 'all').length).toEqual(200);
    expect(getCurrentTodos(todos, '', 'true').length).toEqual(90);
    expect(getCurrentTodos(todos, '', 'false').length).toEqual(110);
    expect(getCurrentTodos(todos, 'delectus', 'all').length).toEqual(7);
    expect(getCurrentTodos(todos, 'delectus', 'true').length).toEqual(3);
    expect(getCurrentTodos(todos, 'delectus', 'false').length).toEqual(4);
  });
});
