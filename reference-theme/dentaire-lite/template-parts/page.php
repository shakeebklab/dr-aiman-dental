<?php
/**
 * The template for displaying pages.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

while ( have_posts() ) :
	the_post();
?>
<main id="content" <?php post_class( 'site-main' ); ?>>
	<div class="page-header">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-md-12">
					<div class="page-header-box">
						<?php the_title( '<h1 class="text-anime">', '</h1>' ); ?>
						<?php do_action('dentaire_lite_action_get_breadcrumb');	?>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="page-single-post single-page">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<?php
						if ( has_post_thumbnail() ) {
							printf( '<div class="post-featured-image"><a href="%s"><figure class="hover-anime">%s</figure></a></div>', esc_url( get_permalink() ), get_the_post_thumbnail( get_the_ID(), 'large' ) );
						}
					?>
					<div class="post-content">
						<div class="post-entry dentaire-block-style">
							<?php the_content(); ?>
							<?php wp_link_pages(); ?>
						</div>
					</div>
					<?php 
						if ( comments_open() || get_comments_number() ) :
						echo '<div class="comment-box">';
							comments_template();
						echo '</div>';
						endif;
					?>
				</div>
			</div>
		</div>
	</div>
</main>
<?php
endwhile;
