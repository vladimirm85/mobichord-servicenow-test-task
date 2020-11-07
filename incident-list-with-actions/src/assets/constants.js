export const FETCH_INCIDENTS = 'FETCH_INCIDENTS';
export const FETCH_INCIDENTS_SUCCESS = 'FETCH_INCIDENTS_SUCCESS';
export const IS_LOADING = 'IS_LOADING';

export const FETCH_INCIDENTS_PARAMS = {
  sysparm_limit: '100',
  sysparm_display_value: 'true',
  sysparm_query: 'ORDERBYDESCnumber',
};

export const MODAL_BODY_ITEMS_DATA = [
  {
    label: 'Caller',
    name: 'caller_id',
  },
  {
    label: 'Incident',
    name: 'short_description',
  },
  {
    label: 'Number',
    name: 'number',
  },
  {
    label: 'State',
    name: 'state',
  },
  {
    label: 'Assignment Group',
    name: 'assignment_group',
  },
  {
    label: 'Assigned To',
    name: 'assigned_to',
  },
];
