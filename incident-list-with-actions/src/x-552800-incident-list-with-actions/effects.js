import { createHttpEffect } from '@servicenow/ui-effect-http';
import { FETCH_INCIDENTS_SUCCESS } from '../assets/constants';

export const fetchIncidentsEffect = createHttpEffect('api/now/table/incident', {
  queryParams: ['sysparm_limit', 'sysparm_display_value', 'sysparm_query'],
  successActionType: FETCH_INCIDENTS_SUCCESS,
});
