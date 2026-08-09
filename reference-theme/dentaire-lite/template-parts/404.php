<?php
/**
 * The template for displaying 404 pages (not found).
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}
?>
<main id="content" class="site-main">
	<div class="page-header">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-md-12">
					<div class="page-header-box">
						<h1 class="text-anime"><?php echo esc_html__( 'Page Not Found', 'dentaire-lite' ); ?></h1>
						<?php do_action('dentaire_lite_action_get_breadcrumb');	?>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<div class="error-page">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div class="notfoundbox">
						<div class="error-page-content">
							<div class="error-page-content-heading">
								<p><?php echo esc_html__( 'The page you are looking for does not exist', 'dentaire-lite' ); ?></p>
							</div>
							<a class="btn-default" href="<?php echo esc_url( home_url('/') ); ?>"><?php echo esc_html__( 'Back To Home', 'dentaire-lite' ); ?></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

</main>
