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
wp_interactivity_state('form-block', array(
	'ajax_url' => admin_url('admin-ajax.php'),
	'name' => ''
));

// Local State/Context
$context = array();
?>
<div
	data-wp-interactive="form-block"
	data-wp-watch="callbacks.logForm"
	<?php echo wp_interactivity_data_wp_context($context); ?>>
	<h4>Experimenting Form Submission</h4>
	<label for="name">Name:</label>
	<input type="text" name="name" data-wp-on--keyup="callbacks.setName">
	<button data-wp-on--click="actions.submit">Submit</button>
</div>