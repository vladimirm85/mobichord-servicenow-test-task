import { actionTypes } from '@servicenow/ui-core';
import {
  FETCH_INCIDENTS,
  FETCH_INCIDENTS_SUCCESS,
  IS_LOADING,
  CLOSE_MODAL,
  NOW_DROPDOWN_PANEL_ITEM_CLICKED,
  DELETE_INCIDENT,
  DELETE_INCIDENT_EFFECT,
  DELETE_INCIDENT_SUCCESS,
  DELETE_INCIDENT_FAILED,
  SET_SEARCH_PARAMS,
  INITIAL_SEARCH_PARAMS,
} from '../assets/constants';
import { getFetchIncidentsParams } from '../assets/helpers';
import { fetchIncidentsEffect, deleteIncidentEffect } from './effects';

const { COMPONENT_BOOTSTRAPPED } = actionTypes;

export const FETCH_INCIDENTS_PARAMS = {
  sysparm_limit: '100',
  sysparm_display_value: 'true',
  sysparm_query: 'ORDERBYDESCsys_updated_on^active=true',
};

export default {
  actionHandlers: {
    [COMPONENT_BOOTSTRAPPED]: {
      effect({ dispatch }) {
        dispatch(
          FETCH_INCIDENTS,
          getFetchIncidentsParams(INITIAL_SEARCH_PARAMS)
        );
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
    [NOW_DROPDOWN_PANEL_ITEM_CLICKED]: ({
      action,
      state,
      updateState,
      dispatch,
    }) => {
      const { payload } = action;
      if (payload.item.id === 'delete') {
        dispatch(DELETE_INCIDENT, { sys_id: payload.item.cardId });
      } else {
        const incident = state.incidents.find(
          (incident) => incident.sys_id === payload.item.cardId
        );
        updateState({
          isModalOpen: true,
          selectedIncident: incident,
        });
      }
    },
    [CLOSE_MODAL]: ({ updateState }) => {
      updateState({
        isModalOpen: false,
        selectedIncident: null,
      });
    },
    [DELETE_INCIDENT_EFFECT]: deleteIncidentEffect,
    [DELETE_INCIDENT_SUCCESS]: ({ state, dispatch }) => {
      dispatch(FETCH_INCIDENTS, getFetchIncidentsParams(state.searchParams));
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
    [SET_SEARCH_PARAMS]: ({ action, dispatch, updateState }) => {
      updateState({
        searchParams: action.payload.searchParams,
        isLoading: true,
      });
      dispatch(
        FETCH_INCIDENTS,
        getFetchIncidentsParams(action.payload.searchParams)
      );
    },
  },
};
