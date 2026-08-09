<?php 

namespace DentaireLite\Compatibility;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if( !defined( 'ELEMENTOR_VERSION' ) ) {
	return;
}

class Dentaire_Lite_Elementor { 
	private static $instance;

	public static function instance() {
		if ( is_null( self::$instance ) ) {
			self::$instance = new self();
		}
		return self::$instance;
	}
	
	public function __construct() { 
		add_action( 'admin_menu', [ $this, 'elementor_free_menu' ], 999 );
		add_action( 'elementor/widgets/register', [ $this, 'register_new_widgets' ] );
		
		/**
		 * Register css for elementor editor.
		 */
		add_action( 'elementor/editor/after_enqueue_styles', [ $this, 'elementor_editor_styles' ] );
		
		// enqueue modal's preview css.
		add_action( 'elementor/preview/enqueue_styles', [ $this, 'elementor_preview_styles' ] );
		
	}
	
	public static function elementor_free_menu() {
		if ( defined( 'ELEMENTOR_PRO_VERSION' ) ) {
			return;
		}
		remove_submenu_page( 'elementor', 'e-form-submissions' );
		remove_submenu_page( 'elementor', 'elementor_custom_fonts' );
		remove_submenu_page( 'elementor', 'elementor_custom_icons' );
		remove_submenu_page( 'elementor', 'elementor_custom_code' );
		remove_submenu_page( 'elementor', 'elementor-apps' );
		remove_submenu_page( 'elementor', 'go_elementor_pro' );
	}
	
	/**
	 * Register new Elementor widgets.
	 *
	 * @param \Elementor\Widgets_Manager $widgets_manager Elementor widgets manager.
	 * @return void
	 */
	public static function register_new_widgets( $widgets_manager ) {

		require_once DENTAIRE_LITE_THEME_DIR . '/inc/compatibility/elementor/widgets/site-logo.php'; // phpcs:ignore WPThemeReview.CoreFunctionality.FileInclude

		$widgets_manager->register( new \dentaire_lite_widget_site_Logo() );

	}
	
	public static function elementor_editor_styles() {
		wp_enqueue_style( 'dentaire-lite-elementor-editor', DENTAIRE_LITE_THEME_URL . '/assets/css/elementor-editor.css', array(), DENTAIRE_LITE_THEME_VERSION );
		
		if ( !defined( 'ELEMENTOR_PRO_VERSION' ) ) {
			$custom_css = " #elementor-panel-category-pro-elements, #elementor-panel-category-theme-elements, #elementor-panel-category-theme-elements-single, #elementor-panel-category-woocommerce-elements { display: none !important; } ";
			wp_add_inline_style( 'dentaire-elementor-editor', $custom_css );
		}
	}
	
	public static function elementor_preview_styles() {
		wp_enqueue_style( 'dentaire-lite-elementor-preview-style', DENTAIRE_LITE_THEME_URL . '/assets/css/elementor-preview.css', array(), DENTAIRE_LITE_THEME_VERSION );
	}
			
}
Dentaire_Lite_Elementor::instance();
