import '@servicenow/now-loader';
import { Fragment } from '@servicenow/ui-renderer-snabbdom';
import './incident-card';
import './modal-element';
import { CLOSE_MODAL, DELETE_INCIDENT } from '../assets/constants';

export const view = (
  { incidents, isLoading, isModalOpen, selectedIncident },
  { dispatch }
) => {
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
  const closeModal = () => dispatch(CLOSE_MODAL);

  const deleteIncident = (incidentId) => {
    dispatch(CLOSE_MODAL);
    dispatch(DELETE_INCIDENT, { sys_id: incidentId });
  };

  return (
    <Fragment>
      {isLoading ? (
        <now-loader
          className={'loader'}
          label="Loading..."
          size="lg"
        ></now-loader>
      ) : (
        <Fragment>
          <modal-element
            isModalOpen={isModalOpen}
            incident={selectedIncident}
            closeModal={closeModal}
            deleteIncident={deleteIncident}
          />
          <div className="wrapper">{cards}</div>
        </Fragment>
      )}
    </Fragment>
  );
};
