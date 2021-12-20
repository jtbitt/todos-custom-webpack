import { todosReducer, initialState, todosActions } from '../redux/todosSlice';

describe('todosSlice reducers', () => {
  it('should handle updateSearchQuery reducer', () => {
    const searchQueryOne = 'delectus';
    const searchQueryTwo = 'quis';
    const resultOne = { ...initialState, searchQuery: searchQueryOne };
    const resultTwo = { ...initialState, searchQuery: searchQueryTwo };

    expect(
      todosReducer(initialState, todosActions.updateSearchQuery(searchQueryOne)),
    ).toEqual(resultOne);

    expect(
      todosReducer(initialState, todosActions.updateSearchQuery(searchQueryTwo)),
    ).toEqual(resultTwo);
  });

  it('should handle updateCompletedFilter reducer', () => {
    const filterOne = 'all';
    const filterTwo = 'true';
    const filterThree = 'false';
    const resultOne = { ...initialState, completed: filterOne };
    const resultTwo = { ...initialState, completed: filterTwo };
    const resultThree = { ...initialState, completed: filterThree };

    expect(
      todosReducer(initialState, todosActions.updateCompletedFilter(filterOne)),
    ).toEqual(resultOne);

    expect(
      todosReducer(initialState, todosActions.updateCompletedFilter(filterTwo)),
    ).toEqual(resultTwo);

    expect(
      todosReducer(initialState, todosActions.updateCompletedFilter(filterThree)),
    ).toEqual(resultThree);
  });

  it('should handle fetch reducer', () => {
    const result = {
      ...initialState,
      todos: [],
      isLoading: true,
      isError: false,
    };

    expect(todosReducer(initialState, todosActions.fetch())).toEqual(result);
  });

  it('should handle fetchSuccess reducer', () => {
    const todos = [
      { userId: 1, id: 1, title: "delectus aut autem", completed: false },
      { userId: 1, id: 2, title: "quis ut nam facilis et officia qui", completed: false },
    ];

    const result = {
      ...initialState,
      todos,
      isLoading: false,
      isError: false,
    };

    expect(
      todosReducer(initialState, todosActions.fetchSuccess(todos)),
    ).toEqual(result);
  });

  it('should handle fetchFailure reducer', () => {
    const result = {
      ...initialState,
      isLoading: false,
      isError: true,
    };

    expect(todosReducer(initialState, todosActions.fetchFailure())).toEqual(
      result,
    );
  });
});
