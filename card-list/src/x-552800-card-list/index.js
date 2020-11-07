import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import '@servicenow/now-template-card'
import styles from './styles.scss';
import {cardsData} from './cardsData'

const view = (state, {updateState}) => {

  const cards = cardsData.map((cardData) => (
    <now-template-card-assist
      className={'card'}
      tagline={{ icon: "tree-view-long-outline", label: "Incident" }}
      actions={[
        { id: "share", label: "Copy URL" },
        { id: "close", label: "Mark Complete" },
      ]}
      heading={{
        label: cardData.headingLabel,
      }}
      content={[
        { label: "Number", value: { type: "string", value: cardData.number } },
        { label: "State", value: { type: "string", value: cardData.state } },
        {
          label: "Assignment Group",
          value: { type: "string", value: cardData.assignmentGroup },
        },
        {
          label: "Assigned To",
          value: { type: "string", value: cardData.assignedTo },
        },
      ]}
      footerContent={{ label: "Updated", value: cardData.updated }}
      configAria={{}}
      contentItemMinWidth="300"
    ></now-template-card-assist>
  ));

	return (
		<div className="wrapper">
      {cards}
		</div>
	);
};

createCustomElement('x-552800-card-list', {
	renderer: {type: snabbdom},
	view,
	styles
});
