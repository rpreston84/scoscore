import { SUBMIT_RATING, SET_RATING, SET_NAME } from './constants';

// The initial state of the App
export const initialState = {
  rating: '',
};

const actionMap = {
  [SUBMIT_RATING]: () => {
    // TODO: implememnt
    throw new Error('not implemented, but should return the next state');
  },
  [SET_RATING]: (state, action) => {
    const {
      payload: { value },
    } = action;
    return {
      ...state,
      rating: value,
    };
  },
  [SET_NAME]: (state, action) => {
    const {
      payload: { value },
    } = action;
    return {
      ...state,
      name: value,
    };
  },
};

export const defaultHandler = state => state;

/* eslint-disable default-case, no-param-reassign */
const reducer = (state = initialState, action) => {
  const handler = actionMap[action.type] || defaultHandler;
  return handler(state, action);
};

export default reducer;
