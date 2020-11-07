export const FETCH_INCIDENTS = 'FETCH_INCIDENTS';
export const FETCH_INCIDENTS_SUCCESS = 'FETCH_INCIDENTS_SUCCESS';
export const IS_LOADING = 'IS_LOADING';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const NOW_MODAL_OPENED_SET = 'NOW_MODAL#OPENED_SET';
export const NOW_DROPDOWN_PANEL_ITEM_CLICKED =
  'NOW_DROPDOWN_PANEL#ITEM_CLICKED';
export const NOW_MODAL_FOOTER_ACTION_CLICKED =
  'NOW_MODAL#FOOTER_ACTION_CLICKED';
export const DELETE_INCIDENT = 'DELETE_INCIDENT';
export const DELETE_INCIDENT_EFFECT = 'DELETE_INCIDENT_EFFECT';
export const DELETE_INCIDENT_SUCCESS = 'DELETE_INCIDENT_SUCCESS';
export const DELETE_INCIDENT_FAILED = 'DELETE_INCIDENT_FAILED';

export const FETCH_INCIDENTS_PARAMS = {
  sysparm_limit: '100',
  sysparm_display_value: 'true',
  sysparm_query: 'ORDERBYDESCsys_updated_on',
};

export const MODAL_BODY_ITEMS_DATA = [
  {
    label: 'Number',
    name: 'number',
  },
  {
    label: 'Incident',
    name: 'short_description',
  },
  {
    label: 'Caller',
    name: 'caller_id',
  },
  {
    label: 'State',
    name: 'state',
  },
  {
    label: 'Opened By',
    name: 'opened_by',
  },
  {
    label: 'Description',
    name: 'description',
  },
];
