
import {
    SUBMIT_RATING,
    SET_RATING,
} from './constants';


import produce from 'immer';
import { CHANGE_USERNAME } from './constants';

// The initial state of the App
export const initialState = {
  username: '',
};

const actionMap = {
    SUBMIT_RATING: (state, action) => {
        // TODO: implememnt
        throw 'not implemented, but should return the next state';
    },
    SET_RATING: (state, action) => {
        // TODO: implement
        throw 'not implemented, but should return the next state';
    }
}

export const defaultHandler = () => state;

/* eslint-disable default-case, no-param-reassign */
const reducer = (state = initialState, action) => {
    const handler = actionMap[action.type] || defaultHandler;
    return handler(state, action);
}

export default reducer;
