import { ADD_RATING, REMOVE_RATING } from '../constants';
import { addRating, removeRating } from '../actions';

describe('addRating', () => {
  it('should create an action with a non-null uuid value when given no id', () => {
    const action = addRating();
    expect(!!action.payload.id).toBe(true);
  });

  it('should create an action with the provided id value', () => {
    const id = 'rating id';
    const action = addRating(id);
    expect(action).toEqual({
      type: ADD_RATING,
      payload: {
        id,
      },
    });
  });
});

describe('removeRating', () => {
  it('should create an action with the provided id value', () => {
    const id = 'rating id';
    const action = removeRating(id);
    expect(action).toEqual({
      type: REMOVE_RATING,
      payload: {
        id,
      },
    });
  });
});
