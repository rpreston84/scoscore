/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import H1 from 'components/H1';
import messages from './messages';
import { setRating, onSubmitForm } from './actions';
import { makeSelectRating } from './selectors';
import styles from './index.scss';

export const ScorePage = ({ rating, onSubmitForm }) => (
  <div>
    <Helmet>
      <title>Score</title>
      <meta
        name="description"
        content="Scoville Scoring page of ScoScore application"
      />
    </Helmet>
    <H1>
      <FormattedMessage {...messages.header} />
    </H1>
    <form
      onSubmit={onSubmitForm}
      className={classnames(styles.fancyForm, 'background-green')}
    >
      <label htmlFor="rating">
        <FormattedMessage {...messages.rating} />
        <input
          id="rating"
          type="text"
          placeholder="how hot?  so hot"
          value={rating}
          onChange={({ target: { value } }) => console.log(value)}
        />
      </label>
    </form>

    <form />
  </div>
);

ScorePage.propTypes = {
  rating: PropTypes.string,
  onSubmitForm: PropTypes.func,
};

const mapState = createStructuredSelector({
  rating: makeSelectRating(),
});

const mapDispatch = dispatch =>
  bindActionCreators(
    {
      setRating,
      onSubmitForm,
    },
    dispatch,
  );

export default connect(
  mapState,
  mapDispatch,
)(ScorePage);
