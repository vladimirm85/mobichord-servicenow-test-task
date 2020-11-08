import { Fragment } from '@servicenow/ui-renderer-snabbdom';
import '@servicenow/now-heading';
import '@servicenow/now-input';
import '@servicenow/now-checkbox';
import '@servicenow/now-dropdown';
import '@servicenow/now-label-value';
import '@servicenow/now-button';
import {
  SET_CLOSED_DATE,
  SEARCH_BUTTON_CLICKED,
  CLEAR_BUTTON_CLICKED,
} from '../../assets/constants';

export const view = (
  {
    shortDescription,
    active,
    sortBy,
    closedAt,
    number,
    assignedTo,
    assignmentGroup,
  },
  dispatch
) => {
  const onChange = (e) =>
    dispatch(SET_CLOSED_DATE, { closedAt: e.target.value });
  const search = () => dispatch(SEARCH_BUTTON_CLICKED);
  const clearSearchParams = () => dispatch(CLEAR_BUTTON_CLICKED);

  return (
    <Fragment>
      <div className="search-form">
        <div className="search-form_rg40">
          <now-input
            label="Incident description"
            name="shortDescription"
            type="text"
            value={shortDescription}
          ></now-input>
          <now-input
            label="Number"
            name="number"
            type="text"
            value={number}
          ></now-input>
        </div>
        <div className="search-form_rg40">
          <now-input
            label="Assigned To"
            name="assignedTo"
            type="text"
            value={assignedTo}
          ></now-input>
          <now-input
            label="Assignment Group"
            name="assignmentGroup"
            type="text"
            value={assignmentGroup}
          ></now-input>
        </div>
        <div className="search-form_rg10">
          <div className="search-form__section">
            <now-label-value-inline label="Active: "></now-label-value-inline>
            <now-checkbox name="active" value={active}></now-checkbox>
          </div>
          <div className="search-form__section">
            <now-label-value-inline label="Sort by: "></now-label-value-inline>
            <now-dropdown
              items={[
                { id: 'number', label: 'Incident Number' },
                { id: 'sys_updated_on', label: 'Last Update' },
                { id: 'assigned_to', label: 'Assigned To' },
              ]}
              selectedItems={[sortBy]}
              select="single"
              variant="secondary"
              size="sm"
            ></now-dropdown>
          </div>
          <div className="search-form__section">
            <now-label-value-inline label="Closed after: "></now-label-value-inline>
            <input
              on-change={(e) => {
                onChange(e);
              }}
              id="closed_at"
              value={closedAt}
              type="date"
              name="closed_at"
            />
          </div>
        </div>
        <div className="search-form__section search-form__buttons-section">
          <now-button
            on-click={search}
            label="Search"
            variant="secondary"
            size="sm"
          ></now-button>
          <now-button
            on-click={clearSearchParams}
            label="Clear"
            variant="secondary-negative"
            size="sm"
          ></now-button>
        </div>
      </div>
    </Fragment>
  );
};
