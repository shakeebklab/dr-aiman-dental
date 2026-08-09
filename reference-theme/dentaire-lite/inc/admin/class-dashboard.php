<?php
/**
 *
 * Dashboard
 * @package Dashboard
 *
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

/**
 * Dashboard class.
 */
class Dentaire_Lite_Dashboard
{

    /**
     * The settings of page.
     *
     * @var array $settings The settings.
     */
    public $settings = array();

    /**
     * Constructor.
     */
    public function __construct()
    {

        if( ! is_admin() ) {
            return;
        }
		
		add_action('init', array($this, 'set_settings'));
		add_action('admin_enqueue_scripts', array($this, 'admin_enqueue_scripts'));
        add_action('admin_menu', array($this, 'add_menu_page'));
		add_action('admin_footer', array( $this, 'add_admin_footer_internal_scripts' ));
	}

    /**
     * Settings
     *
     * @param array $settings The settings.
     */
    public function set_settings()
    {
        $this->settings = apply_filters('dentaire_lite_dashboard_settings', array());
    }

    /**
     * Add menu page
     */
    public function add_menu_page()
    {
	
		$capability = 'manage_options';
		$parent_menu_item = 'themes.php'; // Appearance menu

		if ( ! current_user_can( $capability ) ) {
			return;
		}
		
		add_theme_page(
			__( 'Dentaire Dashboard', 'dentaire-lite' ),
			__( 'Dentaire Dashboard', 'dentaire-lite' ),
			$capability,
			'dentaire-lite-dashboard',
			[ $this, 'dashboard_page_template' ],
			15
		);


		add_theme_page( 
            __( 'Demo Import', 'dentaire-lite' ),
            __( 'Demo Import', 'dentaire-lite' ),
            $capability,
            'at-how-to-use',
            [ $this, 'how_to_use_page_template' ],
            10
        );

		add_theme_page( 
            __( 'License', 'dentaire-lite' ),
            __( 'License', 'dentaire-lite' ),
            $capability,
            'at-license',
            [ $this, 'license_page_template' ],
            15
        );

		add_theme_page( 
            __( 'Free vs Pro', 'dentaire-lite' ),
            __( 'Free vs Pro', 'dentaire-lite' ),
            $capability,
            'at-free-vs-Pro',
            [ $this, 'free_vs_pro_page_template' ],
            20
        );
		
		add_theme_page( 
			esc_html__('Upgrade to Pro', 'dentaire-lite'),
			esc_html__('Upgrade to Pro', 'dentaire-lite'),
			$capability,
			esc_url($this->settings['promo_link']),
			'',
			25
		);
        
    }

    /**
     * Admin footer style.
     * 
     * @return void
     */
    public function add_admin_footer_internal_scripts() {
        ?>
        <style>
		.wp-submenu a[href="themes.php?page=at-how-to-use"],
		.wp-submenu a[href="themes.php?page=at-license"],
		.wp-submenu a[href="themes.php?page=at-free-vs-Pro"]
		{
                display:none !important;
        }
            .wp-submenu a[href="https://awaikenthemes.com/dentaire-dentist-dental-clinic-wordpress-theme/?utm_source=theme_info&utm_medium=link&utm_campaign=dentaire"] {
                color: #05d105 !important;
            }
        </style>
        <script type="text/javascript">
            document.addEventListener("DOMContentLoaded", function() {
                const dentaireUpsellMenuItem = document.querySelector( '#adminmenu .wp-submenu a[href="https://awaikenthemes.com/dentaire-dentist-dental-clinic-wordpress-theme/?utm_source=theme_info&utm_medium=link&utm_campaign=dentaire"]' );

                if ( ! dentaireUpsellMenuItem ) {
                    return;
                }

                dentaireUpsellMenuItem.addEventListener( 'click', function( e ){
                    e.preventDefault();

                    const href = this.getAttribute( 'href' );
                    window.open( href, '_blank' );
                } );
            });
        </script>
        <?php
    }

    /**
     * This function will register scripts and styles for admin dashboard.
     *
     * @param string $page Current page.
     */
    public function admin_enqueue_scripts($hook)
    {
		wp_enqueue_style( 'dentaire-lite-bootstrap-5.3.2', DENTAIRE_LITE_THEME_URL . '/inc/admin/assets/css/bootstrap-grid.css', array(), DENTAIRE_LITE_THEME_VERSION );
        wp_enqueue_style( 'dentaire-lite-dashboard', DENTAIRE_LITE_THEME_URL . '/inc/admin/assets/css/dashboard.css', array(), DENTAIRE_LITE_THEME_VERSION);
    }
	
    public function dashboard_page_template() {
		
        $user_id             = get_current_user_id();
        $current_user        = wp_get_current_user();
        $notifications_count = 1;

        $theme_slug     = get_template();
        $theme_version  = wp_get_theme()->get( 'Version' );
		require_once DENTAIRE_LITE_THEME_DIR . '/inc/admin/views/dashboard.php'; // phpcs:ignore WPThemeReview.CoreFunctionality.FileInclude

	}
	
	public function free_vs_pro_page_template() {
		require_once DENTAIRE_LITE_THEME_DIR . '/inc/admin/views/free-vs-pro.php'; // phpcs:ignore WPThemeReview.CoreFunctionality.FileInclude
	}
	
	public function how_to_use_page_template() {
		require_once DENTAIRE_LITE_THEME_DIR . '/inc/admin/views/how-to-use.php'; // phpcs:ignore WPThemeReview.CoreFunctionality.FileInclude
	}
	
	public function license_page_template() {
		require_once DENTAIRE_LITE_THEME_DIR . '/inc/admin/views/license.php'; // phpcs:ignore WPThemeReview.CoreFunctionality.FileInclude
	}

}

new Dentaire_Lite_Dashboard();
