import { registerBlockType } from '@wordpress/blocks';

import './style.scss';

import Edit from './edit';
import save from './save';

registerBlockType('create-block/phuongne-block', {
	apiVersion: 2,
	title: 'Phuongne Block',
	description:
		'Example block written with ESNext standard and JSX support – build step required.',
	category: 'widgets',
	icon: 'smiley',
	supports: {
		// Removes support for an HTML mode.
		html: false,
	},
	attributes: {
		message: {
			type: 'string',
			source: 'text',
			selector: 'div',
		},
	},
	edit: Edit,
	save,
});
