export const getFetchIncidentsParams = (searchParams) => {
  const fetchIncidentsParams = {
    sysparm_limit: '100',
    sysparm_display_value: 'true',
  };
  let sysparm_query = `ORDERBYDESC${searchParams.sortBy}`;
  if (searchParams.active) sysparm_query += `^active=true`;
  if (searchParams.shortDescription)
    sysparm_query += `^short_descriptionLIKE${searchParams.shortDescription}`;
  if (searchParams.number) sysparm_query += `^numberLIKE${searchParams.number}`;
  if (searchParams.assignedTo)
    sysparm_query += `^assigned_toLIKE${searchParams.assignedTo}`;
  if (searchParams.assignmentGroup)
    sysparm_query += `^assignment_groupLIKE${searchParams.assignmentGroup}`;
  if (searchParams.closedAt)
    sysparm_query += `^closed_at>javascript:gs.dateGenerate('${searchParams.closedAt}','23:59:59')`;

  fetchIncidentsParams.sysparm_query = sysparm_query;

  return fetchIncidentsParams;
};
