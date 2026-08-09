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
							<h2><?php esc_html_e('Get Dentaire Pro', 'dentaire-lite') ?></h2>
							<p><?php esc_html_e('Take Dentaire to a whole other level by upgrading to the premium version.', 'dentaire-lite') ?></p>
							<p><a target="_blank" class="btn-custom mt-2" href="<?php echo esc_url($this->settings['promo_link']); ?>"><?php esc_html_e('Upgrade Now', 'dentaire-lite') ?></a></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<?php 
require_once DENTAIRE_LITE_THEME_DIR . '/inc/admin/views/footer.php'; // phpcs:ignore WPThemeReview.CoreFunctionality.FileInclude
