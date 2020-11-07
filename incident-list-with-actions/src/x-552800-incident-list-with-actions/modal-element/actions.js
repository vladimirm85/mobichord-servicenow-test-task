import {
  NOW_MODAL_OPENED_SET,
} from '../../assets/constants';

export default {
  actionHandlers: {
    [NOW_MODAL_OPENED_SET]: ({ state }) => {
      state.properties.closeModal();
    },
  },
};
