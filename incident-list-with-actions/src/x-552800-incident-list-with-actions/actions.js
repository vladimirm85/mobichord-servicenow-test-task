import { actionTypes } from '@servicenow/ui-core';
import {
  FETCH_INCIDENTS,
  FETCH_INCIDENTS_PARAMS,
  FETCH_INCIDENTS_SUCCESS,
  IS_LOADING,
  CLOSE_MODAL,
  NOW_DROPDOWN_PANEL_ITEM_CLICKED,
} from '../assets/constants';
import { fetchIncidentsEffect } from './effects';

const { COMPONENT_BOOTSTRAPPED } = actionTypes;

export default {
  actionHandlers: {
    [COMPONENT_BOOTSTRAPPED]: {
      effect({ dispatch }) {
        dispatch(FETCH_INCIDENTS, FETCH_INCIDENTS_PARAMS);
        dispatch(IS_LOADING);
      },
    },
    [FETCH_INCIDENTS]: fetchIncidentsEffect,
    [FETCH_INCIDENTS_SUCCESS]: ({ action, updateState }) => {
      updateState({
        incidents: action.payload.result,
        isLoading: false,
      });
    },
    [IS_LOADING]: ({ updateState }) => {
      updateState({
        isLoading: true,
      });
    },
    [NOW_DROPDOWN_PANEL_ITEM_CLICKED]: ({ action, state, updateState }) => {
      const { payload } = action;
      const incident = state.incidents.find(
        (incident) => incident.sys_id === payload.item.cardId
      );
      updateState({
        isModalOpen: true,
        selectedIncident: incident,
      });
    },
    [CLOSE_MODAL]: ({ updateState }) => {
      updateState({
        isModalOpen: false,
        selectedIncident: null,
      });
    },
  },
};
