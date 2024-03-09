export const initialTestState = {
  test: false,
};

export const testReducer = (state = initialTestState, action) => {
  if (action.type === 'TEST_ACTION') {
    return !state;
  }
  return state;
};
