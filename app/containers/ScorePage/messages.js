/*
 * FeaturePage Messages
 *
 * This contains all the text for the FeaturePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.ScorePage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Score',
  },
  rating: {
    id: `${scope}.rating`,
    defaultMessage: 'How hot is it?',
  },
});
