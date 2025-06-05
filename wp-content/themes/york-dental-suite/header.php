<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<a class="skip-link screen-reader-text" href="#main"><?php esc_html_e( 'Skip to content', 'york-dental-suite' ); ?></a>

<header id="masthead" class="site-header">
    <div class="container header-container">
        <div class="site-branding">
            <?php
            if ( function_exists( 'the_custom_logo' ) && has_custom_logo() ) {
                the_custom_logo();
            } else {
                echo '<h1><a href="' . esc_url( home_url( '/' ) ) . '">' . get_bloginfo( 'name' ) . '</a></h1>';
            }
            ?>
        </div>
        <nav id="site-navigation" class="main-navigation">
            <?php
            wp_nav_menu( array(
                'theme_location' => 'header-menu',
                'menu_id'        => 'primary-menu',
                'fallback_cb'    => false, // Prevents a fallback menu if none is assigned
            ) );
            ?>
            </nav>
    </div>
</header>

<div id="content" class="site-content">