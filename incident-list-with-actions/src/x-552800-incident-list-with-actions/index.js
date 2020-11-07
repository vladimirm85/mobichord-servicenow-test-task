import { createCustomElement, actionTypes } from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import '@servicenow/now-template-card';
import '@servicenow/now-loader';
import styles from './styles.scss';
import { createHttpEffect } from '@servicenow/ui-effect-http';
const { COMPONENT_BOOTSTRAPPED } = actionTypes;

import './incident-card';

const IS_LOADING = 'IS_LOADING';

const INCIDENTS_FETCH_SUCCESS = 'INCIDENTS_FETCH_SUCCESS';
const fetchIncidentsEffect = createHttpEffect(
  'api/now/table/incident?sysparm_display_value=true',
  {
    successActionType: INCIDENTS_FETCH_SUCCESS,
  }
);

const view = ({ incidents, isLoading }) => {
  const cards = incidents.map((card) => (
    <incident-card
      sysId={card.sys_id}
      shortDescription={card.short_description}
      number={card.number}
      incidentState={card.state}
      assignmentGroup={card.assignment_group.display_value}
      assignedTo={card.assigned_to.display_value}
      sysUpdatedOn={card.sys_updated_on}
    />
  ));

  return (
    <div className="wrapper">
      {isLoading ? (
        <now-loader
          className={'loader'}
          label="Loading..."
          size="lg"
        ></now-loader>
      ) : (
        cards
      )}
    </div>
  );
};

createCustomElement('x-552800-incident-list-with-actions', {
  renderer: { type: snabbdom },
  view,
  styles,
  initialState: {
    incidents: [],
    isLoading: true,
  },
  actionHandlers: {
    [COMPONENT_BOOTSTRAPPED]: {
      effect({ dispatch }) {
        dispatch('INCIDENTS_FETCHED');
        dispatch('IS_LOADING');
      },
    },
    INCIDENTS_FETCHED: fetchIncidentsEffect,
    [INCIDENTS_FETCH_SUCCESS]: ({ action, updateState }) => {
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
  },
});
