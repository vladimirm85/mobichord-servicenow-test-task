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
export const NOW_INPUT_VALUE_SET = 'NOW_INPUT#VALUE_SET';
export const NOW_CHECKBOX_CHECKED_SET = 'NOW_CHECKBOX#CHECKED_SET';
export const SET_CLOSED_DATE = 'SET_CLOSED_DATE';
export const NOW_BUTTON_CLICKED = 'NOW_BUTTON#CLICKED';
export const SET_SEARCH_PARAMS = 'SET_SEARCH_PARAMS';
export const SEARCH_BUTTON_CLICKED = 'SEARCH_BUTTON_CLICKED';
export const CLEAR_BUTTON_CLICKED = 'CLEAR_BUTTON_CLICKED';

export const INITIAL_SEARCH_PARAMS = {
  shortDescription: '',
  number: '',
  assignedTo: '',
  assignmentGroup: '',
  active: false,
  sortBy: 'sys_updated_on',
  closedAt: '',
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
