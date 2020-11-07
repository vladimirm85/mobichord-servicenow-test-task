import { createCustomElement } from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';
import { view } from './view';

createCustomElement('incident-card', {
  renderer: { type: snabbdom },
  view,
  styles,
  properties: {
    sysId: '',
    shortDescription: '',
    number: '',
    incidentState: '',
    assignmentGroup: '',
    assignedTo: '',
    sysUpdatedOn: '',
  },
});
