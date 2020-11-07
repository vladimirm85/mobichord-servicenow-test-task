import {
  NOW_MODAL_OPENED_SET,
  NOW_MODAL_FOOTER_ACTION_CLICKED,
} from '../../assets/constants';

export default {
  actionHandlers: {
    [NOW_MODAL_OPENED_SET]: ({ state }) => {
      state.properties.closeModal();
    },
    [NOW_MODAL_FOOTER_ACTION_CLICKED]: ({ state }) => {
      state.properties.deleteIncident(state.properties.incident.sys_id);
    },
  },
};
