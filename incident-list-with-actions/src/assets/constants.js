export const FETCH_INCIDENTS = 'FETCH_INCIDENTS';
export const FETCH_INCIDENTS_SUCCESS = 'FETCH_INCIDENTS_SUCCESS';
export const IS_LOADING = 'IS_LOADING';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const NOW_MODAL_OPENED_SET = 'NOW_MODAL#OPENED_SET';
export const NOW_DROPDOWN_PANEL_ITEM_CLICKED =
  'NOW_DROPDOWN_PANEL#ITEM_CLICKED';

export const FETCH_INCIDENTS_PARAMS = {
  sysparm_limit: '100',
  sysparm_display_value: 'true',
  sysparm_query: 'ORDERBYDESCnumber',
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
