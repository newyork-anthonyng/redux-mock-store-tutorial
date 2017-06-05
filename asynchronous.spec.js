import {
  fetchTodos,
  addTodos,
  setFetch,
} from './asynchronous';

// set up redux-mock-store
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const middlewares = [ thunk ];
const mockStore = configureStore(middlewares);

describe('Using redux-mock-store', () => {
  it('should dispatch correct actions when fetching todos', () => {
    const store = mockStore({});

    return store.dispatch(fetchTodos())
      .then(() => {
        expect(store.getActions()).toMatchSnapshot();
      });
  });
});

describe('Without redux-mock-store', () => {
  it('should dispatch correct actions when fetching todos', () => {
    const mockDispatch = jest.fn();

    // `result` is a function that accepts a `dispatch` function
    const result = fetchTodos();

    return result(mockDispatch).then(() => {
      expect(mockDispatch.mock.calls).toMatchSnapshot();
    });
  });
});
