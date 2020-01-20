import { actionTypes } from './menuEpic';

const initialState = {
  status: 'working',
  items: [
    
  ],
};

export const menuReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.FETCH_MENU:
      return initialState;

    case actionTypes.FETCH_MENU_SUCCESS:
      return { status: 'ready', items: payload };

    case actionTypes.FETCH_MENU_FAILURE:
      return { status: 'error', message: payload, items: [] };

    default:
      return state;
  }
};
