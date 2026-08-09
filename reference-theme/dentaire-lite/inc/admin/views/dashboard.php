<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}
require_once DENTAIRE_LITE_THEME_DIR . '/inc/admin/views/header.php'; // phpcs:ignore WPThemeReview.CoreFunctionality.FileInclude

if( get_option( 'dentaire_lite_demo_imported' ) == 1 ) {
?>
<div class="container-fluid">
	<div class="row">
		<div class="col-md-12">
			<div class="info-box-wrapper">
				<div class="row">
					<div class="col-12">
						<div class="info-box">
							<h2><?php esc_html_e('Theme Options', 'dentaire-lite') ?></h2>
							<p><?php esc_html_e('Here you can find options to customize the site logo, blog, general settings, and footer.', 'dentaire-lite') ?></p>
							<p><a target="_blank" class="btn-custom" href="<?php echo esc_url(admin_url( 'customize.php' )); ?>"><?php esc_html_e('Customize', 'dentaire-lite') ?></a></p>
						</div>
					</div>
					<?php if ( defined( 'ELEMENTOR_VERSION' ) && is_callable( '\Elementor\Plugin::instance' ) ) : ?>
					<div class="col-12">
						<div class="info-box">
							<h2><?php esc_html_e('Typography & Colors', 'dentaire-lite') ?></h2>
							<p><?php esc_html_e('Here, you can find options to customize the website\'s typography and colors.', 'dentaire-lite') ?></p>
							<p><a target="_blank" class="btn-custom" href="<?php echo esc_url($this->settings['site_settings_url']); ?>"><?php esc_html_e('Customize', 'dentaire-lite') ?></a></p>
						</div>
					</div>
					<?php endif; ?>
				</div>
			</div>
		</div>
	</div>
</div>
<?php 
}else{
?>
<div class="container-fluid">
	<div class="row">
		<div class="col-md-12">
			<div class="info-box-wrapper">
				<div class="row">
					<div class="col">
						<div class="info-box">
							<h2>
							<?php
								echo wp_kses_post(
									sprintf( /* translators: %s: Link to the Demo Import */
										__( 'To get started, go to the <a href="%s">Demo Import</a> tab.', 'dentaire-lite' ),
										esc_url( admin_url( 'admin.php?page=at-how-to-use' ) )
									)
								);
							?>
							</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<?php 	
}
require_once DENTAIRE_LITE_THEME_DIR . '/inc/admin/views/footer.php'; // phpcs:ignore WPThemeReview.CoreFunctionality.FileInclude
