import { actionTypes } from './configuratorEpic';

const initialState = {
  status: 'working',
};

export const configuratorReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.FETCH_CONFIG:
      return initialState;

    case actionTypes.FETCH_CONFIG_SUCCESS:
      return {
        status: 'ready',
        ...payload,
      };

    case actionTypes.FETCH_CONFIG_FAILURE:
      return { status: 'error', message: payload };

    default:
      return state;
  }
};
