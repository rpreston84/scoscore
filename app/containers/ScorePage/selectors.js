/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectScore = ({ score }) => score || initialState;

export const makeSelectRating = () =>
  createSelector(
    selectScore,
    ({ rating }) => rating,
  );
