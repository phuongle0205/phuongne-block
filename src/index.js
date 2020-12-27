import { registerBlockType, registerBlockStyle } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';

import './style.scss';
import './editor.scss';

function edit({ attributes, setAttributes, isSelected }) {
	const blockProps = useBlockProps({ className: 'test', style: { color: 'blue' } });
	return <div {...blockProps}>
		<TextControl
			value={attributes.message}
			onChange={(val) => setAttributes({ message: val })}
		/>
	</div >
}

function save({ attributes }) {
	return <div {...(useBlockProps.save())}>{attributes.message}</div>;
}

registerBlockStyle('core/quote', {
	name: 'fancy',
	label: 'Fancy Label',
});

registerBlockType('phuongne-block/border-left-block', {
	apiVersion: 2,
	title: 'Phuongne Block 1',
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
	edit,
	save,
});

// registerBlockType('phuongne-block/border-left-block', {
// 	apiVersion: 2,
// 	title: 'Phuongne Block 2',
// 	description:
// 		'Example block written with ESNext standard and JSX support – build step required.',
// 	category: 'widgets',
// 	icon: 'smiley',
// 	supports: {
// 		// Removes support for an HTML mode.
// 		html: false,
// 	},
// 	attributes: {
// 		message: {
// 			type: 'string',
// 			source: 'text',
// 			selector: 'div',
// 		},
// 	},
// 	edit,
// 	save,
// });

// registerBlockStyle('phuongne-block/border-left-block', {
// 	// apiVersion: 2,
// 	// title: 'Phuongne Block 2',
// 	// description:
// 	// 	'Example block written with ESNext standard and JSX support – build step required.',
// 	// category: 'widgets',
// 	// icon: 'smiley',
// 	// supports: {
// 	// 	// Removes support for an HTML mode.
// 	// 	html: false,
// 	// },
// 	// attributes: {
// 	// 	message: {
// 	// 		type: 'string',
// 	// 		source: 'text',
// 	// 		selector: 'div',
// 	// 	},
// 	// },
// 	// edit,
// 	// save,
// 	name: 'fancy',
// 	label: 'fancy Phuongne',
// });

import { registerFormatType, toggleFormat } from '@wordpress/rich-text';
import { RichTextToolbarButton } from '@wordpress/block-editor';

const MyCustomButton = props => {
	console.log(props);
	return <RichTextToolbarButton
		icon='admin-network'//{<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" focusable="false"><path d="M9.1 9v-.5c0-.6.2-1.1.7-1.4.5-.3 1.2-.5 2-.5.7 0 1.4.1 2.1.3.7.2 1.4.5 2.1.9l.2-1.9c-.6-.3-1.2-.5-1.9-.7-.8-.1-1.6-.2-2.4-.2-1.5 0-2.7.3-3.6 1-.8.7-1.2 1.5-1.2 2.6V9h2zM20 12H4v1h8.3c.3.1.6.2.8.3.5.2.9.5 1.1.8.3.3.4.7.4 1.2 0 .7-.2 1.1-.8 1.5-.5.3-1.2.5-2.1.5-.8 0-1.6-.1-2.4-.3-.8-.2-1.5-.5-2.2-.8L7 18.1c.5.2 1.2.4 2 .6.8.2 1.6.3 2.4.3 1.7 0 3-.3 3.9-1 .9-.7 1.3-1.6 1.3-2.8 0-.9-.2-1.7-.7-2.2H20v-1z"></path></svg>}
		title='Phuongne Format'
		onClick={() => {
			props.onChange(toggleFormat(
				props.value,
				{ type: 'phuongne-format/phuongne-test-format' }
			));
		}}
		isActive={props.isActive}
	/>
};

registerFormatType('phuongne-format/phuongne-test-format', {
	title: 'Phuongne Format',
	tagName: 'span',
	className: 'ph_keyword',
	edit: MyCustomButton,
});