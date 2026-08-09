<?php 
// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
*	Register action
*/
add_action( 'dentaire_lite_action_get_breadcrumb', 'dentaire_lite_get_breadcrumb' );

/*
 * Add class to body
*/
add_filter( 'body_class', 'dentaire_lite_body_class' );
function dentaire_lite_body_class( $classes ) {
	global $DENTAIRE_LITE_STORAGE;
	
    if( get_theme_mod( 'magic_cursor', $DENTAIRE_LITE_STORAGE['magic_cursor'] ) ) { 
        $classes[] = 'tt-magic-cursor';
    }
	
    return $classes;
}

add_action( 'wp_body_open', 'dentaire_lite_wp_body_open' );

function dentaire_lite_wp_body_open() {
	global $DENTAIRE_LITE_STORAGE;

	if( !is_admin() && get_theme_mod( 'show_preloader', $DENTAIRE_LITE_STORAGE['show_preloader'] ) ) { 
	
	$icon = get_theme_mod( 'preloader_icon', $DENTAIRE_LITE_STORAGE['preloader_icon'] );
	$preloader_icon = DENTAIRE_LITE_THEME_URL.'/assets/images/loader.svg';
	if ( !empty($icon) ) { 
		$preloader_icon = wp_get_attachment_image_src( $icon , 'full' );
		$preloader_icon = $preloader_icon[0];
	}
	?>
	<div class="preloader">
		<div class="loading-container">
			<div class="loading"></div>
			<div id="loading-icon"><img src="<?php echo esc_url($preloader_icon); ?>" alt=""></div>
		</div>
	</div>
	<?php 
	} 
	if( get_theme_mod( 'magic_cursor', $DENTAIRE_LITE_STORAGE['magic_cursor'] ) ) { 
	?>
	<div id="magic-cursor">
		<div id="ball"></div>
	</div>
	<?php 
	}
}


/*
* Add class to header menu li tag
*/

function dentaire_lite_add_additional_class_on_li($classes, $item, $args) {
	if (property_exists($args, 'li_class')) {
        $classes[] = $args->li_class;
    }
    return $classes;
}
add_filter('nav_menu_css_class', 'dentaire_lite_add_additional_class_on_li', 1, 3);

/*
* Add class to header menu li a tag
*/

function dentaire_lite_add_additional_class_to_a( $atts, $item, $args ) {
  if (property_exists($args, 'a_tag_class')) {
    $atts['class'] = $args->a_tag_class;
  }
  return $atts;
}
add_filter( 'nav_menu_link_attributes', 'dentaire_lite_add_additional_class_to_a', 1, 3 );


/**
* Menu fallback
*/

function dentaire_lite_fallback( $args ) {
	if ( ! current_user_can( 'edit_theme_options' ) ) {
		return;
	}

	// Initialize var to store fallback html.
	$fallback_output = '';

	// Menu container opening tag.
	$show_container = false;
	if ( $args['container'] ) {
		/**
		 * Filters the list of HTML tags that are valid for use as menu containers.
		 *
		 * @since WP 3.0.0
		 *
		 * @param array $tags The acceptable HTML tags for use as menu containers.
		 *                    Default is array containing 'div' and 'nav'.
		 */
		$allowed_tags = apply_filters( 'wp_nav_menu_container_allowedtags', array( 'div', 'nav' ) );
		if ( is_string( $args['container'] ) && in_array( $args['container'], $allowed_tags, true ) ) {
			$show_container   = true;
			$class            = $args['container_class'] ? ' class="menu-fallback-container ' . esc_attr( $args['container_class'] ) . '"' : ' class="menu-fallback-container"';
			$id               = $args['container_id'] ? ' id="' . esc_attr( $args['container_id'] ) . '"' : '';
			$fallback_output .= '<' . $args['container'] . $id . $class . '>';
		}
	}

	// The fallback menu.
	$class            = $args['menu_class'] ? ' class="menu-fallback-menu ' . esc_attr( $args['menu_class'] ) . '"' : ' class="menu-fallback-menu"';
	$id               = $args['menu_id'] ? ' id="' . esc_attr( $args['menu_id'] ) . '"' : '';
	$fallback_output .= '<ul' . $id . $class . '>';
	$fallback_output .= '<li class="nav-item"><a href="' . esc_url( admin_url( 'nav-menus.php' ) ) . '" class="nav-link" title="' . esc_attr__( 'Add a menu', 'dentaire-lite' ) . '">' . esc_html__( 'Add a menu', 'dentaire-lite' ) . '</a></li>';
	$fallback_output .= '</ul>';

	// Menu container closing tag.
	if ( $show_container ) {
		$fallback_output .= '</' . $args['container'] . '>';
	}

	// if $args has 'echo' key and it's true echo, otherwise return.
	if ( array_key_exists( 'echo', $args ) && $args['echo'] ) {
		echo wp_kses_post( $fallback_output );
	} else {
		return $fallback_output;
	}
}

/**
 * Set our Social Icons URLs.
 */
if ( ! function_exists( 'dentaire_lite_social_icons_list' ) ) {
	function dentaire_lite_social_icons_list() {

		$social_icons = array(
			array( 'url' => '500px.com', 'icon' => 'fab fa-500px', 'class' => 'fivehundredpx' ),
			array( 'url' => 'artstation.com', 'icon' => 'fab fa-artstation', 'class' => 'artstation' ),
			array( 'url' => 'behance.net', 'icon' => 'fab fa-behance', 'class' => 'behance' ),
			array( 'url' => 'bitbucket.org', 'icon' => 'fab fa-bitbucket', 'class' => 'bitbucket' ),
			array( 'url' => 'codepen.io', 'icon' => 'fab fa-codepen', 'class' => 'codepen' ),
			array( 'url' => 'deviantart.com', 'icon' => 'fab fa-deviantart', 'class' => 'deviantart' ),
			array( 'url' => 'discord.gg', 'icon' => 'fab fa-discord', 'class' => 'discord' ),
			array( 'url' => 'dribbble.com', 'icon' => 'fab fa-dribbble', 'class' => 'dribbble' ),
			array( 'url' => 'etsy.com', 'icon' => 'fab fa-etsy', 'class' => 'etsy' ),
			array( 'url' => 'facebook.com', 'icon' => 'fab fa-facebook-f', 'class' => 'facebook' ),
			array( 'url' => 'figma.com', 'icon' => 'fab fa-figma', 'class' => 'figma' ),
			array( 'url' => 'flickr.com', 'icon' => 'fab fa-flickr', 'class' => 'flickr' ),
			array( 'url' => 'foursquare.com', 'icon' => 'fab fa-foursquare', 'class' => 'foursquare' ),
			array( 'url' => 'github.com', 'icon' => 'fab fa-github', 'class' => 'github' ),
			array( 'url' => 'instagram.com', 'icon' => 'fab fa-instagram', 'class' => 'instagram' ),
			array( 'url' => 'kickstarter.com', 'icon' => 'fab fa-kickstarter-k', 'class' => 'kickstarter' ),
			array( 'url' => 'last.fm', 'icon' => 'fab fa-lastfm', 'class' => 'lastfm' ),
			array( 'url' => 'linkedin.com', 'icon' => 'fab fa-linkedin-in', 'class' => 'linkedin' ),
			array( 'url' => 'mastodon.social', 'icon' => 'fab fa-mastodon', 'class' => 'mastodon' ),
			array( 'url' => 'mastodon.art', 'icon' => 'fab fa-mastodon', 'class' => 'mastodon' ),
			array( 'url' => 'medium.com', 'icon' => 'fab fa-medium-m', 'class' => 'medium' ),
			array( 'url' => 'patreon.com', 'icon' => 'fab fa-patreon', 'class' => 'patreon' ),
			array( 'url' => 'pinterest.com', 'icon' => 'fab fa-pinterest-p', 'class' => 'pinterest' ),
			array( 'url' => 'quora.com', 'icon' => 'fab fa-quora', 'class' => 'Quora' ),
			array( 'url' => 'reddit.com', 'icon' => 'fab fa-reddit-alien', 'class' => 'reddit' ),
			array( 'url' => 'slack.com', 'icon' => 'fab fa-slack-hash', 'class' => 'slack.' ),
			array( 'url' => 'slideshare.net', 'icon' => 'fab fa-slideshare', 'class' => 'slideshare' ),
			array( 'url' => 'snapchat.com', 'icon' => 'fab fa-snapchat-ghost', 'class' => 'snapchat' ),
			array( 'url' => 'soundcloud.com', 'icon' => 'fab fa-soundcloud', 'class' => 'soundcloud' ),
			array( 'url' => 'spotify.com', 'icon' => 'fab fa-spotify', 'class' => 'spotify' ),
			array( 'url' => 'stackoverflow.com', 'icon' => 'fab fa-stack-overflow', 'class' => 'stackoverflow' ),
			array( 'url' => 'steamcommunity.com', 'icon' => 'fab fa-steam', 'class' => 'steam' ),
			array( 'url' => 't.me', 'icon' => 'fab fa-telegram', 'class' => 'Telegram' ),
			array( 'url' => 'tiktok.com', 'icon' => 'fab fa-tiktok', 'class' => 'tiktok' ),
			array( 'url' => 'tumblr.com', 'icon' => 'fab fa-tumblr', 'class' => 'tumblr' ),
			array( 'url' => 'twitch.tv', 'icon' => 'fab fa-twitch', 'class' => 'twitch' ),
			array( 'url' => 'twitter.com', 'icon' => 'fab fa-twitter', 'class' => 'twitter' ),
			array( 'url' => 'assetstore.unity.com', 'icon' => 'fab fa-unity', 'class' => 'unity' ),
			array( 'url' => 'unsplash.com', 'icon' => 'fab fa-unsplash', 'class' => 'unsplash' ),
			array( 'url' => 'vimeo.com', 'icon' => 'fab fa-vimeo-v', 'class' => 'vimeo' ),
			array( 'url' => 'weibo.com', 'icon' => 'fab fa-weibo', 'class' => 'weibo' ),
			array( 'url' => 'wa.me', 'icon' => 'fab fa-whatsapp', 'class' => 'WhatsApp' ),
			array( 'url' => 'youtube.com', 'icon' => 'fab fa-youtube', 'class' => 'youtube' ),
		);

		return apply_filters( 'dentaire_lite_social_icons', $social_icons );
	}
}

add_action( 'admin_init', function() {
	if ( did_action( 'elementor/loaded' ) ) {
		remove_action( 'admin_init', [ \Elementor\Plugin::$instance->admin, 'maybe_redirect_to_getting_started' ] );
	}
}, 1 );


function dentaire_lite_custom_excerpt_length( $length ) {
	return apply_filters( 'dentaire_lite_excerpt_length', 14 );
}
add_filter( 'excerpt_length', 'dentaire_lite_custom_excerpt_length', 999 );


function dentaire_lite_update_import_url( ) { 
	global $wpdb;
	
	// Get the current site's home URL without trailing slash
	$old_url = 'https://demo.awaikenthemes.com/dentaire-lite';
    $new_url = untrailingslashit( home_url() );
	
	
	// Replace in _elementor_data (postmeta)
	$escaped_from = str_replace( '/', '\\/', $old_url );
	$escaped_to = str_replace( '/', '\\/', $new_url );
	$meta_value_like = '[%'; // meta_value LIKE '[%' are json formatted

	$rows_affected = $wpdb->query(
		$wpdb->prepare(
			"UPDATE {$wpdb->postmeta} " .
			'SET `meta_value` = REPLACE(`meta_value`, %s, %s) ' .
			"WHERE `meta_key` = '_elementor_data' AND `meta_value` LIKE %s;",
			$escaped_from,
			$escaped_to,
			$meta_value_like
		)
	);

    // Replace in custom menu item links (with and without trailing slash)
    $menu_items = get_posts( array(
		'post_type'      => 'nav_menu_item',
		'posts_per_page' => 100,
		'post_status'    => 'any',
		'fields'         => 'ids',
	) );

	if ( ! empty( $menu_items ) && is_array( $menu_items ) ) {
		foreach ( $menu_items as $menu_item_id ) {

			// Get the current custom URL from menu item
			$url = get_post_meta( $menu_item_id, '_menu_item_url', true );

			// Skip if no URL or it's not a valid string
			if ( empty( $url ) || ! is_string( $url ) ) {
				continue;
			}

			// Replace old URL with new one (handling both with and without trailing slash)
			$new_link = str_replace(
				array( untrailingslashit( $old_url ), trailingslashit( $old_url ) ),
				array( untrailingslashit( $new_url ), trailingslashit( $new_url ) ),
				$url
			);

			// Only update if something changed
			if ( $new_link !== $url ) {
				update_post_meta( $menu_item_id, '_menu_item_url', esc_url_raw( $new_link ) );
			}
		}
	}
}

function dentaire_lite_is_built_with_elementor( $post_id = null ) {
    if ( ! $post_id ) {
        $post_id = get_the_ID();
    }

    if ( ! $post_id ) {
        return false;
    }

    return get_post_meta( $post_id, '_elementor_edit_mode', true ) === 'builder';
}
