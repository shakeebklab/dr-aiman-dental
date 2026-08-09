<?php 
// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_action('admin_head', 'dentaire_lite_admin_head');
function dentaire_lite_admin_head() {
  echo '<style>
    .ocdi-install-plugins-content-content,
.ocdi-install-plugins-content-header,
.ocdi-imported-footer a:first-of-type
{
		    display: none;
	}
  </style>';
}

function dentaire_lite_ocdi_before_content_import( $selected_import ) {
	update_option( 'elementor_experiment-e_font_icon_svg', 'inactive' );
	update_option( 'elementor_experiment-nested-elements', 'active' );
	update_option( 'elementor_experiment-e_optimized_markup', 'inactive' );
	update_option( 'elementor_experiment-e_lazyload', 'inactive' );
	update_option( 'elementor_experiment-e_element_cache', 'inactive' );
	update_option( 'elementor_experiment-e_local_google_fonts', 'inactive' );
	update_option( 'elementor_element_cache_ttl', 'disable' );
	update_option( 'elementor_local_google_fonts', '0' );
	update_option( 'elementor_unfiltered_files_upload', '1' );
}
add_action( 'ocdi/before_content_import', 'dentaire_lite_ocdi_before_content_import' );

function dentaire_lite_ocdi_plugin_intro_text( $default_text ) {
    $default_text = '<div class="ocdi__intro-text"><p>'.esc_html__( 'Importing demo data (post, pages, images, theme settings, etc.) is the quickest and easiest way to set up your new theme. It allows you to simply edit everything instead of creating content and layouts from scratch.', 'dentaire-lite' ).'</p></div>';
 
    return $default_text;
}
add_filter( 'ocdi/plugin_intro_text', 'dentaire_lite_ocdi_plugin_intro_text' );


function dentaire_lite_ocdi_after_import_setup() {
	
	update_option( 'dentaire_lite_demo_imported', 1, 'no' );
	
	// Assign menus to their locations.
	$menu_locations = get_theme_mod( 'nav_menu_locations' );
	if ( ! is_array( $menu_locations ) ) {
		$menu_locations = array();
	}

	$footer_menu = get_term_by( 'name', 'Footer Menu Lite', 'nav_menu' );
	if ( isset( $footer_menu->term_id ) ) {
		$menu_locations['footer'] = $footer_menu->term_id;
	}

	$header_menu = get_term_by( 'name', 'Header Menu Lite', 'nav_menu' );
	if ( isset( $header_menu->term_id ) ) {
		$menu_locations['header'] = $header_menu->term_id;
	}

	set_theme_mod( 'nav_menu_locations', $menu_locations );

	
	 // Get the front page.
	  $front_page = get_posts(
		[
		  'post_type'              => 'page',
		  'title'                  => 'Home',
		  'post_status'            => 'all',
		  'numberposts'            => 1,
		  'update_post_term_cache' => false,
		  'update_post_meta_cache' => false,
		]
	  );
	 
	  if ( ! empty( $front_page ) ) {
		update_option( 'show_on_front', 'page' );
		update_option( 'page_on_front', $front_page[0]->ID );
	  }
	  
	  // Get the blog page.
	  $blog_page = get_posts(
		[
		  'post_type'              => 'page',
		  'title'                  => 'Blog',
		  'post_status'            => 'all',
		  'numberposts'            => 1,
		  'update_post_term_cache' => false,
		  'update_post_meta_cache' => false,
		]
	  );
	
	 if ( ! empty( $blog_page ) ) {
		update_option( 'page_for_posts', $blog_page[0]->ID );
	  }
	
	
	  // Get elementor Kit.
	  $kit_page = get_posts(
		[
		  'post_type'              => 'elementor_library',
		  'title'                  => 'Dentaire - Default Kit',
		  'post_status'            => 'all',
		  'numberposts'            => 1,
		  'update_post_term_cache' => false,
		  'update_post_meta_cache' => false,
		]
	  );
	
	if ( ! empty( $kit_page ) ) {
		update_option( 'elementor_active_kit', $kit_page[0]->ID );
	}
	
	dentaire_lite_update_import_url( );

	// Check if Elementor is active
    if ( did_action( 'elementor/loaded' ) ) {
        // Regenerate CSS files
        \Elementor\Plugin::instance()->files_manager->clear_cache();
    }

}
add_action( 'ocdi/after_import', 'dentaire_lite_ocdi_after_import_setup' );