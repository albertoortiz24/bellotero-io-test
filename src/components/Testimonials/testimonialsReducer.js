import { actionTypes } from './testimonialsEpic';

const initialState = {
  status: 'working',
};

export const testimonialsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.FETCH_TESTIMONIALS:
      return initialState;

    case actionTypes.FETCH_TESTIMONIALS_SUCCESS:
      return {
        status: 'ready',
        ...payload,
      };

    case actionTypes.FETCH_TESTIMONIALS_FAILURE:
      return { status: 'error', message: payload };

    default:
      return state;
  }
};
