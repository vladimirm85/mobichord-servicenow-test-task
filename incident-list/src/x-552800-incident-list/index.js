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
	const cards = incidents.map((card) => (
		<now-template-card-assist
			className={"card"}
			tagline={{ icon: "tree-view-long-outline", label: "Incident" }}
			actions={[
				{ id: "share", label: "Copy URL" },
				{ id: "close", label: "Mark Complete" },
			]}
			heading={{
				label: card.short_description,
			}}
			content={[
				{ label: "Number", value: { type: "string", value: card.number } },
				{ label: "State", value: { type: "string", value: card.state } },
				{
					label: "Assignment Group",
					value: { type: "string", value: card.assignment_group.display_value },
				},
				{
					label: "Assigned To",
					value: { type: "string", value: card.assigned_to.display_value },
				},
			]}
			footerContent={{ label: "Updated", value: card.sys_updated_on }}
		></now-template-card-assist>
	));

	return <div>{cards}</div>;
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
  