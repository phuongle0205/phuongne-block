import { useBlockProps } from '@wordpress/block-editor';

export default function Save({ attributes }) {
	return <div {...(useBlockProps.save())}>{attributes.message}</div>;
} 