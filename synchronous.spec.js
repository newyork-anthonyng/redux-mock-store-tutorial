import { addTodo } from './synchronous';

// set up redux-mock-store
import configureStore from 'redux-mock-store';
const middlewares = [];
const mockStore = configureStore(middlewares);

describe('Using redux-mock-store', () => {
  it('should add todo', () => {
    const store = mockStore({});

    store.dispatch(addTodo('Feed dog'));

    const actions = store.getActions();
    expect(actions).toMatchSnapshot();
  });
});

describe('Without redux-mock-store', () => {
  it('should add todo', () => {
    const result = addTodo('Feed dog');

    expect(result).toMatchSnapshot();
  });
});
