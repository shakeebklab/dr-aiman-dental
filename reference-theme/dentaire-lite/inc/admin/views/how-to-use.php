<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}
require_once DENTAIRE_LITE_THEME_DIR . '/inc/admin/views/header.php'; // phpcs:ignore WPThemeReview.CoreFunctionality.FileInclude

?>
<div class="container-fluid">
	<div class="row">
		<div class="col-md-12">
			<div class="info-box-wrapper">
				<div class="row">
					<div class="col-12">
						<div class="info-box">
							<h2><?php esc_html_e('1. Install Plugins', 'dentaire-lite'); ?></h2>
							<p>
							<?php 
								printf( /* translators: %s: Link to the plugin installation screen */
										wp_kses_post( __( 'To install plugins, Click on the <a href="%s" target="_blank"><strong>Begin installing plugins</strong></a> link at the top of the screen. After installation, activate the plugin.', 'dentaire-lite') ),
										esc_url( admin_url( 'themes.php?page=tgmpa-install-plugins&plugin_status=install' ) )  
									);

							?>
							</p>
						</div>
					</div>
					<div class="col-12">
						<div class="info-box">
							<h2><?php esc_html_e('2. Import Demo Data', 'dentaire-lite') ?></h2>
							<p>
							<?php 
								printf( /* translators: %s: Link to the demo import screen */
										wp_kses_post( __( '1. Download the demo content XML file from <a href="%s" target="_blank">Demo XML</a>', 'dentaire-lite') ),
										'https://cdn.awaikenthemes.com/demo-content/dentaire-lite/dentaire-lite.xml'
									);
							?>
							</p>
							<p>
							<?php 
								printf( /* translators: %s: Link to the demo import screen */
										wp_kses_post( __( '2. Navigate to <a href="%s" target="_blank"><strong>Appearance > Import Demo Data</strong></a>. 	In the <strong>Import Content</strong> field, upload the downloaded XML file, then click <strong>Continue & Import</strong> to proceed.', 'dentaire-lite') ),
										esc_url( admin_url( 'themes.php?page=one-click-demo-import' ) ) 
									);
							?>
						
							</p>
							
						</div>
					</div>
					<div class="col-12">
						<div class="info-box">
							<h2><?php esc_html_e('3. Edit pages', 'dentaire-lite') ?></h2>
							<p>
							<?php
								printf(
										wp_kses_post( __( 'To edit the page content, Go to Pages, click on the <strong>Edit With Elementor</strong> button to edit page.', 'dentaire-lite') )
									);
							?>
							</p>
						</div>
					</div>
					<div class="col-12">
						<div class="info-box footer-note">
							<p>
							<?php
								printf( /* translators: %s: Link to the WordPress dashboard */
										wp_kses_post( __( 'Once all the steps are complete, Go back to the <a href="%s">Dashboard</a> to explore the theme options.', 'dentaire-lite' ) ),
										esc_url( admin_url( 'admin.php?page=dentaire-lite-dashboard' ) ) 
									);
							?>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<?php 
require_once DENTAIRE_LITE_THEME_DIR . '/inc/admin/views/footer.php'; // phpcs:ignore WPThemeReview.CoreFunctionality.FileInclude
