<?php

/**
 * PHP file to use when rendering the block type on the server to show on the front end.
 *
 * The following variables are exposed to the file:
 *     $attributes (array): The block attributes.
 *     $content (string): The block default content.
 *     $block (WP_Block): The block instance.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

// Get block state
wp_interactivity_config('myPlugin');

// Global State
wp_interactivity_state('link-block', array(
	'ajax_url' => admin_url('admin-ajax.php'),
	'name' => ''
));

// Local State/Context
$context = array();
?>
<div
	data-wp-interactive="link-block"
	<?php echo wp_interactivity_data_wp_context($context); ?>>
	<h4>Experimenting @wordpress/interactivity-router</h4>
	<ul>
		<li>
			<a href="http://localhost:8003/" data-wp-on--click="actions.navigate">Home</a>
		</li>
		<li>
			<a href="http://localhost:8003/fuel-savings-calculator/" data-wp-on--click="actions.navigate">Calculator</a>
		</li>
		<li>
			<a href="http://localhost:8003/shop/" data-wp-on--click="actions.navigate">Shop</a>
		</li>
		<li>
			<a href="http://localhost:8003/sample-page/" data-wp-on--click="actions.navigate">Sample Page</a>
		</li>

	</ul>
</div>