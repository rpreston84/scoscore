import uuid from 'uuid/v1';
import {
  SUBMIT_RATING,
  SET_RATING,
  SET_NAME,
  ADD_RATING,
  REMOVE_RATING,
} from './constants';

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

// DO NOT CHANGE - e.g.: do not add or remove parameters
export const addRating = (id = uuid()) => ({
  type: ADD_RATING,
  payload: {
    id,
  },
});

// DO NOT CHANGE - e.g.: do not add or remove parameters
export const removeRating = id => ({
  type: REMOVE_RATING,
  payload: {
    id,
  },
});
