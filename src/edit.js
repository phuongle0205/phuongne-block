import { useBlockProps } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes, isSelected }) {
	const blockProps = useBlockProps({ className: 'test', style: { color: 'blue' } });
	return <div {...blockProps}>
		<TextControl
			value={attributes.message}
			onChange={(val) => setAttributes({ message: val })}
		/>
	</div >
}
