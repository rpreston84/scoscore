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

import H1 from 'components/H1';
import messages from './messages';
import { setRating, onSubmitForm } from './actions';
import { makeSelectRating } from './selectors';

export function FeaturePage({rating, onSubmitForm}) {
  return (
    <div>
      <Helmet>
        <title>Feature Page</title>
        <meta
          name="description"
          content="Scoville Scoring page of ScoScore application"
        />
      </Helmet>
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
      <form onSubmit={onSubmitForm}>
          <label htmlFor="rating">
            <FormattedMessage {...messages.rating} />
            <input
              id="rating"
              type="text"
              placeholder="how hot?  so hot"
              value={rating}
              onChange={() => console.log('change')}
            />
          </label>
        </form>
 

    <form>

    </form>

    </div>
  );
}

const mapState = createStructuredSelector({
  rating: makeSelectRating(),
})

const mapDispatch = dispatch => bindActionCreators({
  setRating,
  onSubmitForm,
}, dispatch);

export default connect(mapState, mapDispatch)(FeaturePage);
