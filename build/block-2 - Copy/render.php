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

// Global State
wp_interactivity_state('counter-block', array(
	'ajax_url' => admin_url('admin-ajax.php'),
));

// Local State/Context
$context = array('count' => 0);
?>
<div
	data-wp-interactive="counter-block"
	data-wp-watch="callbacks.logCount"
	<?php echo wp_interactivity_data_wp_context($context); ?>>
	<div data-wp-text="context.count"></div>
	<button data-wp-on--click="actions.increment">Increment</button>
	<button data-wp-on--click="actions.decrement">Decrement</button>
</div>