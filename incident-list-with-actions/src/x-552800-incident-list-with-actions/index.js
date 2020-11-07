import { createCustomElement, actionTypes } from "@servicenow/ui-core";
import snabbdom from "@servicenow/ui-renderer-snabbdom";
import "@servicenow/now-template-card";
import "@servicenow/now-loader";
import styles from "./styles.scss";
import { createHttpEffect } from "@servicenow/ui-effect-http";
const { COMPONENT_BOOTSTRAPPED } = actionTypes;

const IS_LOADING = "IS_LOADING";

const INCIDENTS_FETCH_SUCCESS = "INCIDENTS_FETCH_SUCCESS";
const fetchIncidentsEffect = createHttpEffect(
	"api/now/table/incident?sysparm_display_value=true",
	{
		successActionType: INCIDENTS_FETCH_SUCCESS,
	}
);

const view = ({ incidents, isLoading }) => {
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

	return (
		<div className="wrapper">
			{isLoading ? (
				<now-loader
					className={"loader"}
					label="Loading..."
					size="lg"
				></now-loader>
			) : (
				cards
			)}
		</div>
	);
};

createCustomElement("x-552800-incident-list-with-actions", {
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
				dispatch("INCIDENTS_FETCHED");
				dispatch("IS_LOADING");
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
