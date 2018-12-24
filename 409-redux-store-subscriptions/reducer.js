const initialState = {
  count: 0
};

const handlers = {
  INCREMENT: state => ({ ...state, count: state.count + 1 }),
  DECREMENT: state => ({ ...state, count: state.count - 1 }),
  ADD: (state, action) => ({ ...state, count: state.count + action.payload }),
  DEFAULT: state => state
};

// New State = Old State + Action
const reducer = (state = initialState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};

export default reducer;
