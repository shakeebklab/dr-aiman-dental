<?php
/**
 * The template for displaying singular post-types: posts and user-defined custom post types.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}
global $DENTAIRE_LITE_STORAGE;
$blog_single_page_layout	=	get_theme_mod( 'blog_single_page_layout', 'full-width' );
if($blog_single_page_layout == 'full-width') {
	$column = 'col-md-12';
}
else{
	$column = 'col-lg-9 col-md-12';
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
						<div class="post-single-meta wow fadeInUp" data-wow-delay="0.25s">
							<ul>
								<li><i class="fa-solid fa-calendar-days"></i><?php echo get_the_date(); ?></li>
								<li><i class="fa-solid fa-tag"></i>
									<?php
										// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
										printf( '%s %s', esc_html( '', 'dentaire-lite' ), get_the_category_list(', ') );
									?>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="page-single-post">
		<div class="container">
			<div class="row">
				<?php					
					if ( has_post_thumbnail() ) {
						printf( '<div class="col-md-12"><div class="post-single-image"><figure class="image-anime">%s</figure></div></div>', get_the_post_thumbnail( $post, 'large' ) );
					}
				?>

				<div class="<?php echo esc_attr( $column ); ?>">
					<div class="post-content">
						<div class="post-entry dentaire-block-style">
							<?php the_content(); ?>
							<?php wp_link_pages(); ?>
						</div>

						<div class="row align-items-center">
							<div class="col-lg-8">
								<div class="post-tags">
								<?php the_tags( '<span class="tag-links">' . esc_html__( 'Tags:', 'dentaire-lite' ), '', '</span>' ); ?>
								</div>
							</div>
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
				<?php 
					if($blog_single_page_layout == 'with-sidebar'):
						get_sidebar();
					endif;
				?>
			</div>
		</div>
	</div>
</main>
<?php
endwhile;
