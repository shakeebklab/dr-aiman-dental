<?php
/**
 * Theme functions and definitions
 *
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

define( 'DENTAIRE_LITE_THEME_VERSION', wp_get_theme()->get( 'Version' ) );
define( 'DENTAIRE_LITE_THEME_DIR', get_template_directory() );
define( 'DENTAIRE_LITE_THEME_URL', get_template_directory_uri() );


if ( ! isset( $content_width ) ) {
	$content_width = 800; // Pixels.
}

// Theme storage
// Attention! Must be in the global namespace to compatibility with WP-CLI
//-------------------------------------------------------------------------
$GLOBALS['DENTAIRE_LITE_STORAGE'] = array(
		'social_sharing' => 'facebook,whatsapp,linkedin',
		'show_preloader' => 0,
		'magic_cursor' => 0,
		'footer_copyright_text' => '',
		'smooth_scrolling' => 0,
		'archive_page_layout' => 'full-width',
		'blog_single_page_layout' => 'full-width',
		'preloader_icon' => '',
		'portfolio_page_title' => '',
		'portfolio_archive_page_layout' => 'full-width',
		'portfolio_single_page_layout' => 'full-width',
		'header_background_image' => '',
		'portfolio_page_header_background_image' => '',
		'blog_page_header_background_image' => '',
);

if ( ! function_exists( 'dentaire_lite_slug_fonts_url' ) ) {
	function dentaire_lite_slug_fonts_url() {
		$fonts_url = ''; 
		  
		/* Translators: If there are characters in your language that are not
		* supported by Poppins, translate this to 'off'. Do not translate
		* into your own language.
		*/
		$font = _x( 'on', 'Poppins font: on or off', 'dentaire-lite' );
		 
		if ( 'off' !== $font ) {
			
			$font_families = array();
			 
			if ( 'off' !== $font ) {
				$font_families[] = 'Poppins:wght@100;200;300;400;500;600;700;800';
			}
			 
			$query_args = array(
				'family'	=> urlencode( implode( '&family=', $font_families ) ),
				'display' 	=> urlencode( 'swap' ),
			);
		
			$query_args = str_replace(array('%26','%3D'), array('&','='), $query_args);
			
			$fonts_url = add_query_arg( $query_args, 'https://fonts.googleapis.com/css2' );
			
		}
		 
		return esc_url_raw( $fonts_url );
	}
}

if ( ! function_exists( 'dentaire_lite_theme_setup' ) ) {
	/**
	 * Set up theme support.
	 *
	 * @return void
	 */
	function dentaire_lite_theme_setup() {
	
		register_nav_menus( 
			array( 
					'header' => esc_html__( 'Header', 'dentaire-lite' ) ,
					'footer' => esc_html__( 'Footer', 'dentaire-lite' ) 
				 )		
		);

		add_theme_support( 'post-thumbnails' );
		add_theme_support( 'automatic-feed-links' );
		add_theme_support( 'title-tag' );
		add_theme_support( 'editor-styles' );
		add_theme_support(
			'html5',
			array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
				'script',
				'style',
			)
		);
		add_theme_support(
			'custom-logo',
			array(
				'height'      => 100,
				'width'       => 350,
				'flex-height' => true,
				'flex-width'  => true,
			)
		);
		
		/*
		 * Gutenberg wide images.
		 */
		add_theme_support( 'align-wide' );
		
		/**
        * Load textdomain.
        */
        load_theme_textdomain( 'dentaire-lite', DENTAIRE_LITE_THEME_DIR . '/languages' );

		
		
		if ( is_admin() ) { 
			add_editor_style( array( dentaire_lite_slug_fonts_url(), 'assets/css/css-variable.css', 'assets/css/all.min.css', 'style-editor.css' ) );
		}

	}

}
add_action( 'after_setup_theme', 'dentaire_lite_theme_setup' );

/**
 * Enqueue styles
 */
if ( ! function_exists( 'dentaire_lite_theme_load_styles' ) ) {
	function dentaire_lite_theme_load_styles() {
		
		if( get_option( 'dentaire_lite_demo_imported' ) != 1 ) {
			wp_enqueue_style( 'dentaire-lite-font', dentaire_lite_slug_fonts_url(), array(), null );	
		}
		
		if( !dentaire_lite_is_built_with_elementor() ) {
			if ( class_exists( '\Elementor\Plugin' ) ) {
				$elementor = \Elementor\Plugin::instance();
				$elementor->frontend->enqueue_styles();
			}
		}
		
		wp_enqueue_style( 'widget-icon-list' );
		wp_enqueue_style( 'widget-social-icons' );
		wp_enqueue_style( 'dentaire-lite-css-variable', DENTAIRE_LITE_THEME_URL . '/assets/css/css-variable.css', array(), DENTAIRE_LITE_THEME_VERSION );
		wp_enqueue_style( 'dentaire-lite-fontawesome-6.4.0', DENTAIRE_LITE_THEME_URL . '/assets/css/all.min.css', array(), DENTAIRE_LITE_THEME_VERSION );
		wp_enqueue_style( 'dentaire-lite-bootstrap-5.3.2', DENTAIRE_LITE_THEME_URL . '/assets/css/bootstrap.min.css', array(), DENTAIRE_LITE_THEME_VERSION );
		wp_enqueue_style( 'dentaire-lite-style', DENTAIRE_LITE_THEME_URL . '/style.css', array('dentaire-lite-bootstrap-5.3.2','dentaire-lite-fontawesome-6.4.0'), DENTAIRE_LITE_THEME_VERSION );
		
	}
}
add_action( 'wp_enqueue_scripts', 'dentaire_lite_theme_load_styles', 998 );

/**
 * Enqueue scripts
 */
if ( ! function_exists( 'dentaire_lite_theme_load_scripts' ) ) {
	function dentaire_lite_theme_load_scripts() {
		global $DENTAIRE_LITE_STORAGE;

		wp_enqueue_script( 'dentaire-lite-slicknav', DENTAIRE_LITE_THEME_URL . '/assets/js/jquery.slicknav.js', array( 'jquery' ), DENTAIRE_LITE_THEME_VERSION, true );
		wp_enqueue_script( 'dentaire-lite', DENTAIRE_LITE_THEME_URL . '/assets/js/function.js', array( 'jquery' ), DENTAIRE_LITE_THEME_VERSION, true );
		
		// js for comments
		if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
			wp_enqueue_script( 'comment-reply' );
		}

	}
}
add_action( 'wp_enqueue_scripts', 'dentaire_lite_theme_load_scripts' );


/**
 * Register widget area.
 */
if ( ! function_exists( 'dentaire_lite_widgets_init' ) ) {
	function dentaire_lite_widgets_init() {
		
		register_sidebar( array(
			'name'          => esc_html__( 'Sidebar', 'dentaire-lite' ),
			'id'            => 'main-sidebar',
			'description'   => esc_html__( 'Add widgets here to appear in your sidebar.', 'dentaire-lite' ),
			'before_widget' => '<aside id="%1$s" class="widget %2$s">',
			'after_widget'  => '</aside>',
			'before_title'  => '<h3 class="widget-title">',
			'after_title'   => '</h3>',
		) );
		
		register_sidebar( array(
			'name'          => esc_html__( 'Portfolio sidebar', 'dentaire-lite' ),
			'id'            => 'portfolio-sidebar',
			'description'   => esc_html__( 'Add widgets here to appear in your portfolio sidebar.', 'dentaire-lite' ),
			'before_widget' => '<aside id="%1$s" class="widget %2$s">',
			'after_widget'  => '</aside>',
			'before_title'  => '<h3 class="widget-title">',
			'after_title'   => '</h3>',
		) );
		
	}
}
add_action( 'widgets_init', 'dentaire_lite_widgets_init' );

/**
*	Include required file
*/
require_once DENTAIRE_LITE_THEME_DIR . '/inc/init.php';