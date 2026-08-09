<?php 

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}
require_once DENTAIRE_LITE_THEME_DIR . '/inc/functions.php'; // phpcs:ignore WPThemeReview.CoreFunctionality.FileInclude
require_once DENTAIRE_LITE_THEME_DIR . '/inc/compatibility/elementor/elementor.php'; // phpcs:ignore WPThemeReview.CoreFunctionality.FileInclude
require_once DENTAIRE_LITE_THEME_DIR . '/inc/compatibility/elementskit-lite.php';// phpcs:ignore WPThemeReview.CoreFunctionality.FileInclude
require_once DENTAIRE_LITE_THEME_DIR . '/inc/breadcrumbs.php'; // phpcs:ignore WPThemeReview.CoreFunctionality.FileInclude
require_once DENTAIRE_LITE_THEME_DIR . '/inc/customizer/customizer.php'; // phpcs:ignore WPThemeReview.CoreFunctionality.FileInclude


if(is_admin()) {
	// One click demo import
	require_once DENTAIRE_LITE_THEME_DIR . '/inc/ocdi.php'; // phpcs:ignore WPThemeReview.CoreFunctionality.FileInclude
	// TGM Plugin Activation class
	require_once DENTAIRE_LITE_THEME_DIR . '/inc/required-plugins.php'; // phpcs:ignore WPThemeReview.CoreFunctionality.FileInclude
	// Admin related functions
	require_once DENTAIRE_LITE_THEME_DIR . '/inc/admin/admin.php'; // phpcs:ignore WPThemeReview.CoreFunctionality.FileInclude
}
