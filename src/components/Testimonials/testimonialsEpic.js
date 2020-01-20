import { Observable } from 'rxjs';


import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

import { ajax } from 'rxjs/ajax';

const types = {
  FETCH_TESTIMONIALS: 'FETCH_TESTIMONIALS',
  FETCH_TESTIMONIALS_SUCCESS: 'FETCH_TESTIMONIALS_SUCCESS',
  FETCH_TESTIMONIALS_FAILURE: 'FETCH_TESTIMONIALS_FAILURE',
};
export const actionTypes = types;

export const testimonialsEpic = action$ => action$.ofType(types.FETCH_TESTIMONIALS)
  .switchMap(
    () => ajax
      .getJSON('https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page1.json')
      .map(data => data)
      .map(testimonials => ({ type: 'FETCH_TESTIMONIALS_SUCCESS', payload: testimonials.slider }))
      .catch(error => Observable.of({ type: 'FETCH_TESTIMONIALS_FAILURE', payload: error })),
  );
