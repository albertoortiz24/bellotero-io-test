import { Observable } from 'rxjs';


import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

import { ajax } from 'rxjs/ajax';

const types = {
  FETCH_MENU: 'FETCH_MENU',
  FETCH_MENU_SUCCESS: 'FETCH_MENU_SUCCESS',
  FETCH_MENU_FAILURE: 'FETCH_MENU_FAILURE',
};
export const actionTypes = types;

export const menuEpic = action$ => action$.ofType(types.FETCH_MENU)
  .switchMap(
    () => ajax
      .getJSON('https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/app.json')
      .map(data => data.menu.items)
      .map(items => ({ type: 'FETCH_MENU_SUCCESS', payload: items }))
      .catch(error => Observable.of({ type: 'FETCH_MENU_FAILURE', payload: error })),
  );
