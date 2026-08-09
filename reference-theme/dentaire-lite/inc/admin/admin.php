<?php 
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/* Theme Setup */
if ( ! function_exists( 'dentaire_lite_setup' ) ) {
	function dentaire_lite_setup() {
		add_action('admin_notices', 'dentaire_lite_activation_notice');
	}
}
add_action( 'after_setup_theme', 'dentaire_lite_setup' );
// Notice after Theme Activation

function dentaire_lite_activation_notice() {

	$meta = get_option( 'dentaire_lite_admin_notice' );
	$settings = apply_filters('dentaire_lite_dashboard_settings', array());

	if (!$meta) {
			echo '<div id="dentaire-lite-welcome-notice" class="notice notice-success is-dismissible welcome-notice">';
			echo '<div class="notice-row">';
			echo '<div class="container-fluid">';
				echo '<div class="row">';
					echo '<div class="col-lg-6">';
				echo '<div class="notice-text">';
					echo '<p class="welcome-text1">'. esc_html($settings['hero_title']) .'</p>';
					echo '<p class="welcome-text2">'. esc_html__( 'You are now using Dentaire Lite, a beautifully designed theme to start your website.', 'dentaire-lite' ) .'</p>';
					echo '<p class="welcome-text3">'. esc_html__( 'To get started quickly, use the options below:', 'dentaire-lite' ) .'</p>';
					echo '<span class="import-btn"><a href="'. esc_url( admin_url( 'themes.php?page=at-how-to-use' ) ) .'" class="button button-primary">'. esc_html__( 'DEMO IMPORT', 'dentaire-lite' ) .'</a></span>';
					echo '<span class="demo-btn"><a href="'. esc_url( 'https://demo.awaikenthemes.com/dentaire-lite/' ) .'" class="button button-primary" target=_blank>'. esc_html__( 'VIEW DEMO', 'dentaire-lite' ) .'</a></span>';
					echo '<span class="upgrade-btn"><a href="'. esc_url( $settings['promo_link'] ) .'" class="button button-primary" target=_blank>'. esc_html__( 'UPGRADE TO PRO', 'dentaire-lite' ) .'</a></span>';
				echo '</div>';
				echo '</div>'; //Col
				echo '<div class="col-lg-6 align-self-end">';
				echo '<div class="notice-img1">';
					echo '<img src="' . esc_url( get_template_directory_uri() . '/inc/admin/assets/images/welcome-banner.png' ) . '" alt="' . esc_attr__( 'Dentaire Lite', 'dentaire-lite' ) . '" />';
				echo '</div>';
				echo '</div>'; //Col
			echo '</div>'; //row
			echo '</div>'; //container-fluid
			echo '</div>';	
		echo '</div>';
	}
}

function dentaire_lite_dismissed_notice() {
	update_option( 'dentaire_lite_admin_notice', true );
}
add_action( 'wp_ajax_dentaire_lite_dismissed_notice', 'dentaire_lite_dismissed_notice' );

add_action('after_switch_theme', 'dentaire_lite_getstart_setup_options');
function dentaire_lite_getstart_setup_options () {
    update_option('dentaire_lite_admin_notice', false );
}

function dentaire_lite_admin_css() {
	wp_enqueue_style( 'dentaire-lite-default-font-admin', dentaire_lite_slug_fonts_url(), array(), null );
	wp_enqueue_style( 'dentaire-lite-admin', DENTAIRE_LITE_THEME_URL . '/inc/admin/assets/css/admin.css', array(), DENTAIRE_LITE_THEME_VERSION );	
	wp_enqueue_script('dentaire-lite-admin', DENTAIRE_LITE_THEME_URL . '/inc/admin/assets/js/admin.js', array('jquery'), DENTAIRE_LITE_THEME_VERSION, true);	
}

// Hook the custom_admin_css function to the admin_enqueue_scripts action.
add_action('admin_enqueue_scripts', 'dentaire_lite_admin_css', 11);

/**
 * Theme Dashboard Settings
 *
 * @param array $settings The settings.
 */
function dentaire_lite_dashboard_settings( $settings ) {

	// Hero.
	$settings['hero_title']       = esc_html__( 'Welcome to Dentaire Lite', 'dentaire-lite' );
	$settings['hero_desc'] = esc_html__( 'Dentaire Lite has been successfully installed and is ready to use. Click on the ‘Demo Import’ tab to quickly get started with a pre-made template, or visit the Theme Dashboard for a complete overview.', 'dentaire-lite' );
	

	// Promo.
	$settings['promo_link']   = 'https://awaikenthemes.com/dentaire-dentist-dental-clinic-wordpress-theme/?utm_source=theme_info&utm_medium=link&utm_campaign=dentaire';
	
	$settings['site_settings_url']   = '';

	if ( defined( 'ELEMENTOR_VERSION' ) && is_callable( '\Elementor\Plugin::instance' ) ) {
		$kit_id = get_option( 'elementor_active_kit' );
		if ( $kit_id ) {
			$kit = \Elementor\Plugin::$instance->documents->get( $kit_id );
			
			if ( $kit && method_exists( $kit, 'get_edit_url' ) ) {
				$settings['site_settings_url'] = $kit->get_edit_url();
			}
		}
	}


	return $settings;
}
add_filter('dentaire_lite_dashboard_settings', 'dentaire_lite_dashboard_settings');
require DENTAIRE_LITE_THEME_DIR . '/inc/admin/class-dashboard.php'; // phpcs:ignore WPThemeReview.CoreFunctionality.FileInclude

