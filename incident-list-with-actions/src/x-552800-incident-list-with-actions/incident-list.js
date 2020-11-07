import { createCustomElement } from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import actions from './actions';
import styles from './styles.scss';
import { view } from './view';

createCustomElement('x-552800-incident-list-with-actions', {
  renderer: { type: snabbdom },
  view,
  styles,
  initialState: {
    incidents: [],
    isLoading: true,
  },
  ...actions,
});
