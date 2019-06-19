/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { useInjectReducer } from 'utils/injectReducer';
import { FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import H1 from 'components/H1';
import { key } from './constants';
import reducer from './reducer';
import messages from './messages';
import { setRating, onSubmitForm, setName } from './actions';
import { makeSelectRating } from './selectors';
import styles from './index.scss';

export const onChangeInput = event => {
  console.log(event.target.value);
  return '';
};

export const ScorePage = ({
  rating,
  name,
  setRating,
  setName,
  onSubmitForm,
}) => {
  useInjectReducer({ key, reducer });
  return (
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
        <label htmlFor="name">
          <input
            id="name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={({ target: { value } }) => setName(value)}
          />
        </label>
        <label htmlFor="rating">
          <FormattedMessage {...messages.rating} />
          <input
            id="rating"
            type="text"
            placeholder="how hot?  so hot"
            value={rating}
            onChange={({ target: { value } }) => setRating(value)}
          />
        </label>
      </form>

      <form />
    </div>
  );
};

ScorePage.propTypes = {
  rating: PropTypes.string,
  name: PropTypes.string,
  onSubmitForm: PropTypes.func,
  setRating: PropTypes.func,
  setName: PropTypes.func,
};

const mapState = createStructuredSelector({
  rating: makeSelectRating(),
});

const mapDispatch = dispatch =>
  bindActionCreators(
    {
      setRating,
      setName,
      onSubmitForm,
    },
    dispatch,
  );

export default connect(
  mapState,
  mapDispatch,
)(ScorePage);
