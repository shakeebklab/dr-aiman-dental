<?php
/**
 * The template for displaying search results.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}
global $DENTAIRE_LITE_STORAGE;
$archive_page_layout	=	get_theme_mod( 'archive_page_layout', 'full-width' );
if($archive_page_layout == 'full-width') {
	$column = 'col-md-12';
}
else{
	$column = 'col-lg-9 col-md-12';
}
?>
<main id="content" class="site-main">
	<div class="page-header">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-md-12">
					<div class="page-header-box">
						<h1 class="entry-title">
							<?php echo esc_html__( 'Search results for: ', 'dentaire-lite' ); ?>
							<?php echo get_search_query(); ?>
						</h1>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="page-content">
		<div class="page-blog-archive">
			<div class="container">
				<div class="row">
					<div class="<?php echo esc_attr( $column ); ?>">
						<div class="row">
				<?php if ( have_posts() ) : ?>
					<?php
					while ( have_posts() ) {
						the_post();
						$post_link = get_permalink();
						?>
						<div class="col-lg-4 col-md-6">
							<div class="blog-item <?php if ( ! has_post_thumbnail() ) { echo 'notimage'; } ?>">
								<?php
									if ( has_post_thumbnail() ) {
										printf( '<div class="post-featured-image"><a href="%s"><figure class="image-anime">%s</figure></a></div>', esc_url( $post_link ), get_the_post_thumbnail( $post, 'large' ) );
									}
								?>
								<div class="post-item-body">
									<?php
										printf( '<h2><a href="%s">%s</a></h2>', esc_url( $post_link ), wp_kses_post( get_the_title() ) );
									?>									
									<?php the_excerpt(); ?>
								</div>

								<div class="post-item-footer">
									<?php
										printf( '<a href="%s" class="readmore-btn">%s</a>', esc_url( $post_link ), esc_html__('Read More','dentaire-lite'));
									?>
								</div>
							</div>
						</div>
					<?php } ?>
					<?php else : ?>
					<div class="col-md-12 text-center">
							<p><?php echo esc_html__( 'It seems we can\'t find what you\'re looking for.', 'dentaire-lite' ); ?></p>
					</div>
					<?php endif; ?>
							<div class="col-md-12">
								<?php
									// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
									echo get_the_posts_pagination( array(
											'mid_size' => 2,
											'prev_text' => '<i class="fa-solid fa-arrow-left-long"></i>',
											'next_text' => '<i class="fa-solid fa-arrow-right-long"></i>',
										) );
								?>
							</div>
						</div>
					</div>
				<?php 
					if($archive_page_layout == 'with-sidebar'):
						get_sidebar();
					endif;
				?>
				</div>
			</div>
		</div>
	</div>
</main>
