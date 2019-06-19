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

export const makeSelectName = () => {
  createSelector(
    selectScore,
    ({ name }) => name,
  );
};

const willRoundUpToOne = new Promise((resolve, reject) => {
  const rand = Math.random();
  if (rand > 0.5) {
    resolve(rand);
  } else {
    reject(rand);
  }
});

willRoundUpToOne
  .then(value => {
    console.log(`succeeded because ${value} is greater than 0.5`);
  })
  .catch(value => {
    console.log(`failed because ${value} is less than 0.5`);
  });
