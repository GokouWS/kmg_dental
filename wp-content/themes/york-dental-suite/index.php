<?php get_header(); ?>

<main id="main" class="site-main">
    <?php
    if ( is_front_page() || is_home() ) {
        get_template_part('template-parts/hero');
        get_template_part('template-parts/our-invisalign-package');
        get_template_part('template-parts/contact-info');
    } else {
        // Fallback for other pages (e.g., blog posts, single pages)
        while ( have_posts() ) :
            the_post();
            the_content();
        endwhile;
    }
    ?>
</main>

<?php get_footer(); ?>