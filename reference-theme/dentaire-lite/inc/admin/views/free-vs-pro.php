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
						<table class="tbl-pricing">
							<thead>
								<tr>
									<th width="50%"><?php esc_html_e('Features', 'dentaire-lite') ?></th>
									<th width="25%"><?php esc_html_e('Free', 'dentaire-lite') ?></th>
									<th width="25%"><?php esc_html_e('Pro', 'dentaire-lite') ?></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td><?php esc_html_e('Updates', 'dentaire-lite') ?></td>
									<td><?php esc_html_e('Free Version Updates', 'dentaire-lite') ?></td>
									<td><?php esc_html_e('Pro Version Updates for 1 Year', 'dentaire-lite') ?></td>
								</tr>
								<tr>
									<td><?php esc_html_e('Premium Email Support', 'dentaire-lite') ?></td>
									<td><i class="at-freevspro-table__icon dashicons dashicons-no-alt"></i></td>
									<td><i class="at-freevspro-table__icon dashicons dashicons-saved"></i></td>
								</tr>
								<tr>
									<td><?php esc_html_e('Translation Ready', 'dentaire-lite') ?></td>
									<td><i class="at-freevspro-table__icon dashicons dashicons-saved"></i></td>
									<td><i class="at-freevspro-table__icon dashicons dashicons-saved"></i></td>
								</tr>
								<tr>
									<td><?php esc_html_e('Pages', 'dentaire-lite') ?></td>
									<td><?php esc_html_e('One page', 'dentaire-lite') ?></td>
									<td><?php esc_html_e('Full demo with inner pages', 'dentaire-lite') ?></td>
								</tr>
								<tr>
									<td><?php esc_html_e('Homepage Sections', 'dentaire-lite') ?></td>
									<td><?php esc_html_e('Less Sections', 'dentaire-lite') ?></td>
									<td><?php esc_html_e('More Sections', 'dentaire-lite') ?></td>
								</tr>
								<tr>
									<td><?php esc_html_e('Header Layouts', 'dentaire-lite') ?></td>
									<td><?php esc_html_e('No Header Layouts', 'dentaire-lite') ?></td>
									<td><?php esc_html_e('Four Header Layouts', 'dentaire-lite') ?></td>
								</tr>
								<tr>
									<td><?php esc_html_e('Footer Layouts', 'dentaire-lite') ?></td>
									<td><?php esc_html_e('No Footer Layouts', 'dentaire-lite') ?></td>
									<td><?php esc_html_e('Four Footer Layouts', 'dentaire-lite') ?></td>
								</tr>
								<tr>
									<td><?php esc_html_e('Flexibility', 'dentaire-lite') ?></td>
									<td><?php esc_html_e('Less Flexibility', 'dentaire-lite') ?></td>
									<td><?php esc_html_e('Better Flexibility', 'dentaire-lite') ?></td>
								</tr>
								<tr>
									<td><?php esc_html_e('Sticky Menu', 'dentaire-lite') ?></td>
									<td><i class="at-freevspro-table__icon dashicons dashicons-no-alt"></i></td>
									<td><i class="at-freevspro-table__icon dashicons dashicons-saved"></i></td>
								</tr>
								<tr>
									<td><?php esc_html_e('Header Builder', 'dentaire-lite') ?></td>
									<td><i class="at-freevspro-table__icon dashicons dashicons-no-alt"></i></td>
									<td><i class="at-freevspro-table__icon dashicons dashicons-saved"></i></td>
								</tr>
								<tr>
									<td><?php esc_html_e('Footer Builder', 'dentaire-lite') ?></td>
									<td><i class="at-freevspro-table__icon dashicons dashicons-no-alt"></i></td>
									<td><i class="at-freevspro-table__icon dashicons dashicons-saved"></i></td>
								</tr>
								<tr>
									<td><?php esc_html_e('Heading Animation', 'dentaire-lite') ?></td>
									<td><i class="at-freevspro-table__icon dashicons dashicons-no-alt"></i></td>
									<td><i class="at-freevspro-table__icon dashicons dashicons-saved"></i></td>
								</tr>
								<tr>
									<td><?php esc_html_e('Image Reveal Animation', 'dentaire-lite') ?></td>
									<td><i class="at-freevspro-table__icon dashicons dashicons-no-alt"></i></td>
									<td><i class="at-freevspro-table__icon dashicons dashicons-saved"></i></td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="col-12">
						<div class="info-box footer-note">
							<p>
								<?php
									printf( // translators: %s: URL to the upgrade page
										wp_kses_post( __( 'To take advantage of the Pro <a href="%s" target="_blank">Upgrade now</a>.', 'dentaire-lite' ) ),
										esc_url( $this->settings['promo_link'] )
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