<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}


?>
<div class="container-fluid">
	<div class="row">
		<div class="col-12">
			<div class="at-welcome-panel">
				<div class="at-welcome-panel-header">
					<h1 class="welcome-panel-title"><?php echo esc_html($this->settings['hero_title']); ?></h1>
					<p class="welcome-panel-description"><?php echo esc_html($this->settings['hero_desc']); ?></p>
				</div>
				<div class="at-dashboard-tabs">
					<ul class="at-dashboard-tabs-list">
						<li class="dashboard-tab"><a href="<?php echo esc_url_raw( admin_url( 'themes.php?page=dentaire-lite-dashboard' ) ); ?>"><?php echo esc_html__( 'Dashboard', 'dentaire-lite' ); ?></a></li>
						<li class="how-to-use-tab"><a href="<?php echo esc_url_raw( admin_url( 'themes.php?page=at-how-to-use' ) ); ?>"><?php echo esc_html__( 'Demo Import', 'dentaire-lite' ); ?></a></li>
						<li class="license-tab"><a href="<?php echo esc_url_raw( admin_url( 'themes.php?page=at-license' ) ); ?>"><?php echo esc_html__( 'License', 'dentaire-lite' ); ?></a></li>
						<li class="free-vs-Pro-tab"><a href="<?php echo esc_url_raw( admin_url( 'themes.php?page=at-free-vs-Pro' ) ); ?>"><?php echo esc_html__( 'Free vs Pro', 'dentaire-lite' ); ?></a></li>
					</ul>

					<div class="premium-btn">
						<?php
							printf( // translators: %s: URL to the upgrade page
								wp_kses_post( __( '<a href="%s" target="_blank">Upgrade now</a>', 'dentaire-lite' ) ),
								esc_url( $this->settings['promo_link'] )
							);
						?>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

