import { createCustomElement, actionTypes } from "@servicenow/ui-core";
import snabbdom from "@servicenow/ui-renderer-snabbdom";
import "@servicenow/now-template-card";
import styles from "./styles.scss";
import { createHttpEffect } from "@servicenow/ui-effect-http";
const { COMPONENT_BOOTSTRAPPED } = actionTypes;

const INCIDENTS_FETCH_SUCCESS = "INCIDENTS_FETCH_SUCCESS";
const fetchIncidentsEffect = createHttpEffect(
  "api/now/table/incident?sysparm_display_value=true",
  {
    successActionType: INCIDENTS_FETCH_SUCCESS,
  }
);

const view = ({ incidents }) => {
	console.log(incidents);
	return (
		<div></div>
	);
};

createCustomElement('x-552800-incident-list', {
	renderer: {type: snabbdom},
	view,
	styles,
	initialState: {
	  incidents: [],
	},
	actionHandlers: {
	  [COMPONENT_BOOTSTRAPPED]: {
		effect({ dispatch }) {
		  dispatch("INCIDENTS_FETCHED");
		},
	  },
	  INCIDENTS_FETCHED: fetchIncidentsEffect,
	  [INCIDENTS_FETCH_SUCCESS]: ({ action, updateState }) => {
		updateState({
		  path: "incidents",
		  value: action.payload.result,
		  operation: "concat",
		});
	  },
	},
  });
  