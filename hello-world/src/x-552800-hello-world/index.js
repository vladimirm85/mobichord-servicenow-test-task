import {createCustomElement} from '@servicenow/ui-core';
import '@servicenow/now-heading';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';

const view = (state, {updateState}) => {
	return (
		<div className="wrap">
			<now-heading label="Hello world!" level="1" variant="header-primary"></now-heading>
		</div>
	);
};

createCustomElement('x-552800-hello-world', {
	renderer: {type: snabbdom},
	view,
	styles
});
