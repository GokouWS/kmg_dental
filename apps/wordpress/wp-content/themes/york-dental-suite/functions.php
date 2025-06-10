<?php

/**
 * Theme setup, features, and asset enqueueing.
 */

function york_dental_suite_setup()
{
    load_theme_textdomain('york-dental-suite', get_template_directory() . '/languages');
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo', array(
        'height'      => 115,
        'width'       => 291,
        'flex-height' => true,
        'flex-width'  => true,
    ));
    register_nav_menus(
        array(
            'header-menu' => esc_html__('Header Menu', 'york-dental-suite'),
            'footer-menu' => esc_html__('Footer Menu', 'york-dental-suite'),
        )
    );
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script'));
}
add_action('after_setup_theme', 'york_dental_suite_setup');

function york_dental_suite_scripts()
{
    // Enqueue Google Font: Jost (example with multiple weights)
    wp_enqueue_style(
        'york-dental-suite-jost-font', // Handle for the font stylesheet
        'https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap',
        array(),
        null
    );

    // Enqueues the main stylesheet (style.css).
    wp_enqueue_style('main-style', get_stylesheet_uri(), array(), '1.0');

    // Enqueue Header-specific stylesheet.
    wp_enqueue_style(
        'york-dental-suite-header-style',
        get_template_directory_uri() . '/assets/css/header.css',
        array('main-style'),
        '1.0'
    );

    // Enqueue Footer-specific stylesheet.
    wp_enqueue_style(
        'york-dental-suite-footer-style',
        get_template_directory_uri() . '/assets/css/footer.css',
        array('main-style'),
        '1.0'
    );

    // Enqueues custom JavaScript file.
    wp_enqueue_script('main-script', get_template_directory_uri() . '/assets/js/main.js', array('jquery'), '1.0', true);
}
add_action('wp_enqueue_scripts', 'york_dental_suite_scripts');

function york_dental_suite_customize_register($wp_customize)
{
    // Header Contact Section
    $wp_customize->add_section('yds_header_contact_section', array(
        'title'    => __('Header Details', 'york-dental-suite'),
        'priority' => 30,
    ));

    // Phone Number
    $wp_customize->add_setting('yds_phone_number', array(
        'default'           => '',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('yds_phone_number_ctrl', array(
        'label'    => __('Phone Number', 'york-dental-suite'),
        'section'  => 'yds_header_contact_section',
        'settings' => 'yds_phone_number',
        'type'     => 'text',
    ));

    // Email Address
    $wp_customize->add_setting('yds_email_address', array(
        'default'           => '',
        'sanitize_callback' => 'sanitize_email',
    ));
    $wp_customize->add_control('yds_email_address_ctrl', array(
        'label'    => __('Email Address', 'york-dental-suite'),
        'section'  => 'yds_header_contact_section',
        'settings' => 'yds_email_address',
        'type'     => 'email',
    ));

    // Book Now Button Text
    $wp_customize->add_setting('yds_book_now_text', array(
        'default'           => 'Book Now',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('yds_book_now_text_ctrl', array(
        'label'    => __('"Book Now" Button Text', 'york-dental-suite'),
        'section'  => 'yds_header_contact_section',
        'settings' => 'yds_book_now_text',
        'type'     => 'text',
    ));

    // Book Now Button Link
    $wp_customize->add_setting('yds_book_now_link', array(
        'default'           => '#',
        'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control('yds_book_now_link_ctrl', array(
        'label'    => __('"Book Now" Button Link', 'york-dental-suite'),
        'section'  => 'yds_header_contact_section',
        'settings' => 'yds_book_now_link',
        'type'     => 'url',
    ));

    // Invisalign Logo Uploader
    $wp_customize->add_setting('yds_invisalign_logo', array(
        'default'           => '',
        'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'yds_invisalign_logo_ctrl', array(
        'label'    => __('Invisalign Logo', 'york-dental-suite'),
        'section'  => 'yds_header_contact_section', // Or 'title_tagline' section
        'settings' => 'yds_invisalign_logo',
    )));

    // SOCIAL MEDIA SECTION
    $wp_customize->add_section('yds_social_media_section', array(
        'title'    => __('Social Media Links', 'york-dental-suite'),
        'priority' => 120, // Display it in the Customizer panel
    ));

    // Twitter URL
    $wp_customize->add_setting('yds_twitter_url', array('sanitize_callback' => 'esc_url_raw'));
    $wp_customize->add_control('yds_twitter_url_ctrl', array(
        'label'    => __('Twitter URL', 'york-dental-suite'),
        'section'  => 'yds_social_media_section',
        'type'     => 'url',
    ));

    // Instagram URL
    $wp_customize->add_setting('yds_instagram_url', array('sanitize_callback' => 'esc_url_raw'));
    $wp_customize->add_control('yds_instagram_url_ctrl', array(
        'label'    => __('Instagram URL', 'york-dental-suite'),
        'section'  => 'yds_social_media_section',
        'type'     => 'url',
    ));

    // Facebook URL
    $wp_customize->add_setting('yds_facebook_url', array('sanitize_callback' => 'esc_url_raw'));
    $wp_customize->add_control('yds_facebook_url_ctrl', array(
        'label'    => __('Facebook URL', 'york-dental-suite'),
        'section'  => 'yds_social_media_section',
        'type'     => 'url',
    ));
}
add_action('customize_register', 'york_dental_suite_customize_register');
