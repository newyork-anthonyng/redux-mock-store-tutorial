// mock implementation of fetch
const fetch = (url) => {
  return Promise.resolve({
    ok: true,
    todos: [
      'Walk dog',
      'Learn redux',
    ],
  });
};

export default fetch;
