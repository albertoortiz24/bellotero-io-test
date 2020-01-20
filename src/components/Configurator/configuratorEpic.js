import { Observable } from 'rxjs';


import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

import { ajax } from 'rxjs/ajax';

const types = {
  FETCH_CONFIG: 'FETCH_CONFIG',
  FETCH_CONFIG_SUCCESS: 'FETCH_CONFIG_SUCCESS',
  FETCH_CONFIG_FAILURE: 'FETCH_CONFIG_FAILURE',
};
export const actionTypes = types;

export const configuratorEpic = action$ => action$.ofType(types.FETCH_CONFIG)
  .switchMap(
    () => ajax
      .getJSON('https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page2.json')
      .map(data => data)
      .map(config => ({ type: 'FETCH_CONFIG_SUCCESS', payload: config.calculator }))
      .catch(error => Observable.of({ type: 'FETCH_CONFIG_FAILURE', payload: error })),
  );
