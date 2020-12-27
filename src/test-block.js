import { TextControl } from '@wordpress/components';

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

registerBlockType('phuongne-block/border-right-block', {
	apiVersion: 2,
	title: 'Phuongne Block 2',
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

// import { registerFormatType } from '@wordpress/rich-text';
// registerFormatType('phuongne-format/phuongne-test-format', {
// 	title: 'Phuongne Format',
// 	tagName: 'phuongneTagName',
// 	className: 'className ne'
// });