/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectScore = state => state.score || initialState;

export const makeSelectRating = () =>
  createSelector(
    selectScore,
    ({ rating }) => rating,
  );
