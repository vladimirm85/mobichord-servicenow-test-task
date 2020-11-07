import '@servicenow/now-loader';
import './incident-card';

export const view = ({ incidents, isLoading }) => {
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
