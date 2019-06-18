import { SUBMIT_RATING, SET_RATING } from './constants';

export const onSubmitForm = value => ({
  type: SUBMIT_RATING,
  payload: { value },
});

export const setRating = value => ({
  type: SET_RATING,
  payload: { value },
});
