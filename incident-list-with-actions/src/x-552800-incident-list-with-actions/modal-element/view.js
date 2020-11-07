import '@servicenow/now-input'
import '@servicenow/now-modal'
import { MODAL_BODY_ITEMS_DATA } from '../../assets/constants';

export const view = (state) => {
  const {
    properties: { isModalOpen, incident },
  } = state;

  const modalBody = incident
    ? MODAL_BODY_ITEMS_DATA.map((itemData) => {
        const value =
          (itemData.name === 'assignment_group' ||
            itemData.name === 'assigned_to' ||
            itemData.name === 'caller_id') &&
          incident[itemData.name]
            ? incident[itemData.name].display_value
            : incident[itemData.name];

        return (
          <now-input 
            className={'modal__label'}
            label={itemData.label}
            type="text"
            // readonly={true}
            value={value ? value : '-'}
          ></now-input>
        );
      })
    : null;

  return (
    <now-modal
      footerActions={[{ label: 'Delete', variant: 'primary-negative' }]}
      size="lg"
      opened={isModalOpen}
    >
      <div className={'modal'}>{modalBody}</div>
    </now-modal>
  );
};