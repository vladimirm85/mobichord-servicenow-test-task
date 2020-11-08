import {
  NOW_DROPDOWN_PANEL_ITEM_CLICKED,
  NOW_INPUT_VALUE_SET,
  NOW_CHECKBOX_CHECKED_SET,
  SET_CLOSED_DATE,
  SEARCH_BUTTON_CLICKED,
  CLEAR_BUTTON_CLICKED,
  INITIAL_SEARCH_PARAMS,
} from '../../assets/constants';

export default {
  actionHandlers: {
    [NOW_DROPDOWN_PANEL_ITEM_CLICKED]: ({ action, updateState }) => {
      action.stopPropagation();
      const { payload } = action;
      updateState({
        sortBy: payload.item.id,
      });
    },
    [NOW_INPUT_VALUE_SET]: ({ action, updateState }) => {
      action.stopPropagation();
      const { payload } = action;
      updateState({
        [payload.name]: payload.value,
      });
    },
    [NOW_CHECKBOX_CHECKED_SET]: ({ action, updateState }) => {
      const { payload } = action;
      updateState({
        active: payload.value,
      });
    },
    [SET_CLOSED_DATE]: ({ action, updateState }) => {
      const { payload } = action;
      updateState({
        closedAt: payload.closedAt,
      });
    },
    [SEARCH_BUTTON_CLICKED]: ({ state, properties }) => {
      const {
        shortDescription,
        active,
        sortBy,
        closedAt,
        number,
        assignedTo,
        assignmentGroup,
      } = state;
      properties.search({
        shortDescription,
        active,
        sortBy,
        closedAt,
        number,
        assignedTo,
        assignmentGroup,
      });
    },
    [CLEAR_BUTTON_CLICKED]: ({ properties, updateState }) => {
      updateState(INITIAL_SEARCH_PARAMS);
      properties.search(INITIAL_SEARCH_PARAMS);
    },
  },
};
