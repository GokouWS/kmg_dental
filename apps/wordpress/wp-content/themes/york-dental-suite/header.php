<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
  <a class="skip-link screen-reader-text" href="#main"><?php esc_html_e('Skip to content', 'york-dental-suite'); ?></a>

  <header id="masthead" class="site-header rich-header">
    <div class="container header-top-bar"> <?php // This will be for the dark bar
                                            ?>
      <div class="header-column invisalign-logo-area">
        <?php
        $invisalign_logo_url = get_theme_mod('yds_invisalign_logo');
        if ($invisalign_logo_url) : ?>
          <img src="<?php echo esc_url($invisalign_logo_url); ?>" alt="<?php esc_attr_e('Invisalign Diamond Provider', 'york-dental-suite'); ?>" class="invisalign-logo">
        <?php else : ?>
          <img src="<?php echo get_template_directory_uri(); ?>/assets/images/logo-invisalign.png" alt="<?php esc_attr_e('Invisalign Diamond Provider', 'york-dental-suite'); ?>" class="invisalign-logo">
        <?php endif; ?>
      </div>

      <div class="header-column site-branding-ornate">
        <?php
        if (function_exists('the_custom_logo') && has_custom_logo()) {
          the_custom_logo();
        } else {
          echo '<h1 class="site-title-fallback"><a href="' . esc_url(home_url('/')) . '">' . get_bloginfo('name') . '</a></h1>';
        }
        ?>
      </div>

      <div class="header-column right-area">

        <div class="header-column book-now-area">
          <?php
          $book_now_text = get_theme_mod('yds_book_now_text', 'Book Now'); // Default text
          $book_now_link = get_theme_mod('yds_book_now_link', '#');       // Default link
          ?>
          <a href="<?php echo esc_url($book_now_link); ?>" class="button book-now-button"><?php echo esc_html($book_now_text); ?></a>
        </div>

        <div class="header-column contact-info-area">
          <?php
          $phone_number = get_theme_mod('yds_phone_number');
          $email_address = get_theme_mod('yds_email_address');
          $phone_icon = get_theme_mod('yds_phone_icon');
          $email_icon = get_theme_mod('yds_email_icon');
          ?>
          <?php if ($phone_number) : ?>
            <div class="contact-item phone">
              <span class="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width:1em; height:1em; vertical-align: middle;">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </span>
              <div class="item-spacer"></div>
              <a href="tel:<?php echo esc_attr(str_replace(' ', '', $phone_number)); ?>"><?php echo esc_html($phone_number); ?></a>
            </div>
          <?php endif; ?>
          <?php if ($email_address) : ?>
            <div class="contact-item email">
              <span class="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width:1em; height:1em; vertical-align: middle;">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </span>
              <div class="item-spacer"></div>
              <a href="mailto:<?php echo esc_attr($email_address); ?>"><?php echo esc_html($email_address); ?></a>
            </div>
          <?php endif; ?>
        </div>
      </div>
    </div>

    <?php // WHERE DOES THE MAIN NAVIGATION GO? 
    ?>
    <nav id="site-navigation" class="main-navigation container"> <?php // Example: Below the bar 
                                                                  ?>
      <?php
      wp_nav_menu(array(
        'theme_location' => 'header-menu',
        'menu_id'        => 'primary-menu',
        'fallback_cb'    => false,
      ));
      ?>
    </nav>
  </header>

  <div id="content" class="site-content">