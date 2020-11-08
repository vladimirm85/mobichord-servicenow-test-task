import { createCustomElement } from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import actions from './actions';
import styles from './styles.scss';
import { view } from './view';
import { INITIAL_SEARCH_PARAMS } from '../../assets/constants';

createCustomElement('search-section', {
  renderer: { type: snabbdom },
  view,
  styles,
  initialState: INITIAL_SEARCH_PARAMS,
  properties: {
    search: () => {},
  },
  ...actions,
});
