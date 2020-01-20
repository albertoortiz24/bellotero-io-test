import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';

import { menuEpic } from '../Bellotero/menuEpic';
import { menuReducer } from '../Bellotero/menuReducer';

import { configuratorEpic } from '../components/Configurator/configuratorEpic';
import { configuratorReducer } from '../components/Configurator/configuratorReducer';

import { testimonialsEpic } from '../components/Testimonials/testimonialsEpic';
import { testimonialsReducer } from '../components/Testimonials/testimonialsReducer';

export const rootEpic = combineEpics(
  menuEpic,
  configuratorEpic,
  testimonialsEpic,
);
export const rootReducer = combineReducers({
  menu: menuReducer,
  config: configuratorReducer,
  testimonials: testimonialsReducer,
});
