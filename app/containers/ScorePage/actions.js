import { SUBMIT_RATING, SET_RATING, SET_NAME } from './constants';

export const onSubmitForm = value => ({
  type: SUBMIT_RATING,
  payload: { value },
});

export const setRating = value => ({
  type: SET_RATING,
  payload: { value },
});

export const setName = value => ({
  type: SET_NAME,
  payload: { value },
});
