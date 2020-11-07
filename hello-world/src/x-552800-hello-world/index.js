import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';

const view = (state, {updateState}) => {
	return (
		<now-heading label="Hello world!" level="1" variant="header-primary"></now-heading>
	);
};

createCustomElement('x-552800-hello-world', {
	renderer: {type: snabbdom},
	view,
	styles
});
