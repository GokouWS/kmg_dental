<?php
/**
 * Theme setup, features, and asset enqueueing.
 */

function york_dental_suite_setup() {
    load_theme_textdomain( 'york-dental-suite', get_template_directory() . '/languages' );
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'custom-logo', array(
        'height'      => 115,
        'width'       => 291,
        'flex-height' => true,
        'flex-width'  => true,
    ) );
    register_nav_menus(
        array(
            'header-menu' => esc_html__( 'Header Menu', 'york-dental-suite' ),
            'footer-menu' => esc_html__( 'Footer Menu', 'york-dental-suite' ),
        )
    );
    add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script' ) );
}
add_action( 'after_setup_theme', 'york_dental_suite_setup' );

function york_dental_suite_scripts() {
    wp_enqueue_style( 'main-style', get_stylesheet_uri(), array(), '1.0' );
    wp_enqueue_script( 'main-script', get_template_directory_uri() . '/assets/js/main.js', array('jquery'), '1.0', true );
}
add_action( 'wp_enqueue_scripts', 'york_dental_suite_scripts' );
?>