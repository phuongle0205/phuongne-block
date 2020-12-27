<?php

/**
 * Plugin Name:     Phuongne Block
 * Description:     Example block written with ESNext standard and JSX support – build step required.
 * Version:         0.1.0
 * Author:          The WordPress Contributors
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     phuongne-block
 *
 * @package         create-block
 */

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */
function phuongne_block_init()
{
	$dir = __DIR__;

	$script_asset_path = "$dir/build/index.asset.php";
	if (!file_exists($script_asset_path)) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "create-block/phuongne-block" block first.'
		);
	}
	$script_asset = require($script_asset_path);

	$index_js     = 'build/index.js';
	wp_register_script(
		'create-phuongne-block-editor',
		plugins_url($index_js, __FILE__),
		$script_asset['dependencies'],
		$script_asset['version']
	);
	// wp_set_script_translations('create-phuongne-block-editor', 'phuongne-block');

	$editor_css = 'build/index.css';
	wp_register_style(
		'phuongne-block-backend',
		plugins_url($editor_css, __FILE__),
		array(),
		filemtime("$dir/$editor_css")
	);

	$style_css = 'build/style-index.css';
	wp_register_style(
		'phuongne-block-frontend',
		plugins_url($style_css, __FILE__),
		array(),
		filemtime("$dir/$style_css")
	);

	register_block_type('create-block/phuongne-block', array(
		'editor_script' => 'create-phuongne-block-editor',
		'editor_style'  => 'phuongne-block-backend',
		'style'         => 'phuongne-block-frontend',
	));
}

add_action('init', 'phuongne_block_init');

