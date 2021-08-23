<?php
/**
 * The sidebar containing the main widget area
 *
 */
?>

<?php if ( is_active_sidebar( 'main-sidebar' ) ) {?>
<aside id="secondary" class="primary-sidebar widget-area" role="complementary">
	<?php dynamic_sidebar( 'main-sidebar' ); ?>
</aside><!-- #secondary -->
<?php } ?>

