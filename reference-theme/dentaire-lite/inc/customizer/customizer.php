<?php 
// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
* Set our Customizer default options
*/
if ( ! function_exists( 'dentaire_lite_generate_defaults' ) ) {
	function dentaire_lite_generate_defaults() {
		global $DENTAIRE_LITE_STORAGE;

		return apply_filters( 'dentaire_lite_customizer_defaults', $DENTAIRE_LITE_STORAGE );
	}
}


/**
 * Customizer Setup and Custom Controls
 *
 */

/**
 * Adds the individual sections, settings, and controls to the theme customizer
 */
class dentaire_lite_initialise_customizer_settings {
	// Get our default values
	private $defaults;

	public function __construct() {
		// Get our Customizer defaults
		$this->defaults = dentaire_lite_generate_defaults();


		// Register sections
		add_action( 'customize_register', array( $this, 'dentaire_lite_add_customizer_sections' ) );
		
		// Register general control
		add_action( 'customize_register', array( $this, 'dentaire_lite_register_general_options_controls' ) );
		
		// Register blog control
		add_action( 'customize_register', array( $this, 'dentaire_lite_register_blog_options_controls' ) );
		
		// Register footer control
		add_action( 'customize_register', array( $this, 'dentaire_lite_register_footer_options_controls' ) );
		
	}


	/**
	 * Register the Customizer sections
	 */
	public function dentaire_lite_add_customizer_sections( $wp_customize ) {
		
		// Add section general options
		$wp_customize->add_section( 'general_options' , array(
			'title'      => __( 'General Options', 'dentaire-lite' ),
		) );
		
		// Add section blog options
		$wp_customize->add_section( 'blog_options' , array(
			'title'      => __( 'Blog Options', 'dentaire-lite' ),
		) );
		
		// Add section footer options
		$wp_customize->add_section( 'footer_options' , array(
			'title'      => __( 'Footer Options', 'dentaire-lite' ),
		) );
		
	}
	
	/**
	 * Register general option controls
	 */

	public function dentaire_lite_register_general_options_controls( $wp_customize ) {  
		
		$section	=	'general_options';
		
		// Preloader
		$wp_customize->add_setting( 'show_preloader',
			array(
				'default' => $this->defaults['show_preloader'],
				'transport' => 'refresh',
				'sanitize_callback' => 'dentaire_lite_switch_sanitization'
			)
		);
		
		$wp_customize->add_control( new Dentaire_Lite_Toggle_Switch_Custom_control( $wp_customize, 'show_preloader',
			array(
				'label' => __( 'Preloader', 'dentaire-lite' ),
				'description' => esc_html__( 'Display preloader while the page is loading.', 'dentaire-lite' ),
				'section' => $section
			)
		) );
		
		// Preloader icon
		$wp_customize->add_setting( 'preloader_icon',
			array(
				'default' => $this->defaults['preloader_icon'],
				'transport' => 'refresh',
				'sanitize_callback' => 'absint'
			)
		);
		
		$wp_customize->add_control( new WP_Customize_Media_Control( $wp_customize, 'preloader_icon',
			array(
				'label' => __( 'Preloader icon', 'dentaire-lite' ),
				'description' => esc_html__( 'If you want to change the current loading icon, select it here.', 'dentaire-lite' ),
				'section' => $section,
				'mime_type' => 'image',
				'button_labels' => array(
					'select' => __( 'Select File', 'dentaire-lite' ),
					'change' => __( 'Change File', 'dentaire-lite' ),
					'default' => __( 'Default', 'dentaire-lite' ),
					'remove' => __( 'Remove', 'dentaire-lite' ),
					'placeholder' => __( 'No file selected', 'dentaire-lite' ),
					'frame_title' => __( 'Select File', 'dentaire-lite' ),
					'frame_button' => __( 'Choose File', 'dentaire-lite' ),
				)
			)
		) );
		
		// Magic Cursor
		$wp_customize->add_setting( 'magic_cursor',
			array(
				'default' => $this->defaults['magic_cursor'],
				'transport' => 'refresh',
				'sanitize_callback' => 'dentaire_lite_switch_sanitization'
			)
		);
		
		$wp_customize->add_control( new Dentaire_Lite_Toggle_Switch_Custom_control( $wp_customize, 'magic_cursor',
			array(
				'label' => __( 'Magic Cursor', 'dentaire-lite' ),
				'description' => esc_html__( 'Pro - Show Magic Cursor.', 'dentaire-lite' ),
				'section' => $section
			)
		) );
		
		
		// Smooth scrolling
		$wp_customize->add_setting( 'smooth_scrolling',
			array(
				'default' => $this->defaults['smooth_scrolling'],
				'transport' => 'refresh',
				'sanitize_callback' => 'dentaire_lite_switch_sanitization'
			)
		);
		$wp_customize->add_control( new Dentaire_Lite_Toggle_Switch_Custom_control( $wp_customize, 'smooth_scrolling',
			array(
				'label' => __( 'Smooth Scrolling', 'dentaire-lite' ),
				'description' => esc_html__( 'Pro - Smooth Scrolling Disable/Enable', 'dentaire-lite' ),
				'section' => $section
			)
		) );
		
		
	}
	
	/**
	 * Register blog option controls
	 */
	
	public function dentaire_lite_register_blog_options_controls( $wp_customize ) { 
			
		$section	=	'blog_options';

		// Blog page title 
		$wp_customize->add_setting( 'blog_page_title', array(
			'capability' => 'edit_theme_options',
			'sanitize_callback' => 'sanitize_text_field',
		) );

		$wp_customize->add_control( 'blog_page_title', array(
			'type' => 'text',
			'section' => $section,
			'label'       => esc_html__( 'Blog Page Title', 'dentaire-lite' ),
		) );
		
		// Archive page layout
		$wp_customize->add_setting( 'archive_page_layout', array(
		  'default' => $this->defaults['archive_page_layout'],
		   'sanitize_callback' => 'sanitize_text_field',
		) );
		
		$wp_customize->add_control( 'archive_page_layout', array(
			  'label'          => __( 'Archive Page Layout', 'dentaire-lite' ),
			  'section' => $section,
			  'settings' => 'archive_page_layout',
			  'type' => 'radio',
			  'choices' => array(
				'full-width'   => __( 'Full Width', 'dentaire-lite' ),
				'with-sidebar'  => __( 'With Sidebar', 'dentaire-lite' )
			  ),
		) );
		
		// Archive page single page layout
		$wp_customize->add_setting( 'blog_single_page_layout', array(
		  'default' => $this->defaults['blog_single_page_layout'],
		   'sanitize_callback' => 'sanitize_text_field',
		) );
		
		$wp_customize->add_control( 'blog_single_page_layout', array(
			  'label'          => __( 'Blog Single Layout', 'dentaire-lite' ),
			  'section' => $section,
			  'settings' => 'blog_single_page_layout',
			  'type' => 'radio',
			  'choices' => array(
				'full-width'   => __( 'Full Width', 'dentaire-lite' ),
				'with-sidebar'  => __( 'With Sidebar', 'dentaire-lite' )
			  ),
		) );
		
	}
	
	/**
	 * Register footer controls
	 */
	
	public function dentaire_lite_register_footer_options_controls( $wp_customize ) { 
		
		$section	=	'footer_options';
		
		//Footer logo
		$wp_customize->add_setting( 'footer_logo',
			array(
				'default' => '',
				'transport' => 'refresh',
				'sanitize_callback' => 'absint'
			)
		);
		
		$wp_customize->add_control( new WP_Customize_Media_Control( $wp_customize, 'footer_logo',
			array(
				'label' => __( 'Footer Logo', 'dentaire-lite' ),
				'section' => $section,
				'mime_type' => 'image',
				'button_labels' => array(
					'select' => __( 'Select File', 'dentaire-lite' ),
					'change' => __( 'Change File', 'dentaire-lite' ),
					'default' => __( 'Default', 'dentaire-lite' ),
					'remove' => __( 'Remove', 'dentaire-lite' ),
					'placeholder' => __( 'No file selected', 'dentaire-lite' ),
					'frame_title' => __( 'Select File', 'dentaire-lite' ),
					'frame_button' => __( 'Choose File', 'dentaire-lite' ),
				)
			)
		) );
		
		// Copyright text
		$wp_customize->add_setting( 'footer_copyright_text', array(
			'capability' => 'edit_theme_options',
			'sanitize_callback' => 'sanitize_text_field',
		) );

		$wp_customize->add_control( 'footer_copyright_text', array(
			'type' => 'text',
			'section' => $section,
			'label'       => esc_html__( 'Copyright Text', 'dentaire-lite' ),
		) );
		
	
	}
	
}

/**
 * Load all our Customizer Custom Controls
 */
require_once DENTAIRE_LITE_THEME_DIR . '/inc/customizer/custom-controls.php'; // phpcs:ignore WPThemeReview.CoreFunctionality.FileInclude

/**
 * Initialise our Customizer settings
 */
$dentaire_lite_settings = new dentaire_lite_initialise_customizer_settings();
