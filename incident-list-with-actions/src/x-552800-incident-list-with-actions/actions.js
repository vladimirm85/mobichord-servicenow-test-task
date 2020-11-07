import { actionTypes } from '@servicenow/ui-core';
import {
  FETCH_INCIDENTS,
  FETCH_INCIDENTS_PARAMS,
  FETCH_INCIDENTS_SUCCESS,
  IS_LOADING,
  CLOSE_MODAL,
  NOW_DROPDOWN_PANEL_ITEM_CLICKED,
  DELETE_INCIDENT,
  DELETE_INCIDENT_EFFECT,
  DELETE_INCIDENT_SUCCESS,
  DELETE_INCIDENT_FAILED,
} from '../assets/constants';
import { fetchIncidentsEffect, deleteIncidentEffect } from './effects';

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
    [DELETE_INCIDENT_EFFECT]: deleteIncidentEffect,
    [DELETE_INCIDENT_SUCCESS]: ({ dispatch }) => {
      dispatch(FETCH_INCIDENTS, FETCH_INCIDENTS_PARAMS);
    },
    [DELETE_INCIDENT_FAILED]: ({ updateState }) => {
      updateState({
        isLoading: false,
      });
    },
    [DELETE_INCIDENT]: ({ action, dispatch, updateState }) => {
      updateState({
        isLoading: true,
      });
      dispatch(DELETE_INCIDENT_EFFECT, { sys_id: action.payload.sys_id });
    },
  },
};
