import { makeSelectRating } from '../selectors';

describe('makeSelectRating', () => {
  const state = {
    score: {
      rating: 42,
    },
  };

  it('selects the rating from the store', () => {
    expect(makeSelectRating()(state)).toBe(42);
  });
});
