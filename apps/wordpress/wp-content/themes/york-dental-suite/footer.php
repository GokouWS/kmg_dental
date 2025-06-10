</div>
<footer id="colophon" class="site-footer">
  <div class="footer-top">
    <div class="container footer-top-container">
      <div class="footer-logos">
        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/logo.svg" alt="<?php bloginfo('name'); ?>">
        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/logo-invisalign.svg" alt="<?php esc_attr_e('Invisalign Diamond Provider', 'york-dental-suite'); ?>">
        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/logo-award.svg" alt="<?php esc_attr_e('Outstanding Patient Experience Award', 'york-dental-suite'); ?>">
      </div>

      <div class="footer-social">
        <?php
        $twitter_url = get_theme_mod('yds_twitter_url');
        $instagram_url = get_theme_mod('yds_instagram_url');
        $facebook_url = get_theme_mod('yds_facebook_url');
        ?>
        <?php if ($twitter_url) : ?>
          <a href="<?php echo esc_url($twitter_url); ?>" target="_blank" rel="noopener noreferrer" aria-label="<?php esc_attr_e('Follow us on Twitter', 'york-dental-suite'); ?>">
            <svg class="social-icon" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.223.085a4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </a>
        <?php endif; ?>
        <?php if ($instagram_url) : ?>
          <a href="<?php echo esc_url($instagram_url); ?>" target="_blank" rel="noopener noreferrer" aria-label="<?php esc_attr_e('Follow us on Instagram', 'york-dental-suite'); ?>">
            <svg class="social-icon" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069s-3.584-.011-4.85-.069c-3.225-.149-4.771-1.664-4.919-4.919-.058-1.265-.069-1.644-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.441c-3.171 0-3.543.012-4.782.069-2.76.128-3.921 1.282-4.05 4.05-.057 1.238-.068 1.612-.068 4.782s.011 3.543.068 4.782c.128 2.76 1.29 3.921 4.05 4.05 1.238.057 1.612.068 4.782.068s3.543-.011 4.782-.068c2.76-.128 3.921-1.29 4.05-4.05.057-1.238.068-1.612.068-4.782s-.011-3.543-.068-4.782c-.128-2.76-1.29-3.921-4.05-4.05-1.238-.057-1.612-.068-4.782-.068zM12 6.837c-2.846 0-5.163 2.317-5.163 5.163s2.317 5.163 5.163 5.163 5.163-2.317 5.163-5.163-2.317-5.163-5.163-5.163zm0 8.892c-2.056 0-3.729-1.673-3.729-3.729s1.673-3.729 3.729-3.729 3.729 1.673 3.729 3.729-1.673 3.729-3.729 3.729zm5.232-9.227c0 .592-.48.972-1.072.972s-1.072-.38-1.072-1.072.48-1.072 1.072-1.072 1.072.48 1.072 1.072z" />
            </svg>
          </a>
        <?php endif; ?>
        <?php if ($facebook_url) : ?>
          <a href="<?php echo esc_url($facebook_url); ?>" target="_blank" rel="noopener noreferrer" aria-label="<?php esc_attr_e('Follow us on Facebook', 'york-dental-suite'); ?>">
            <svg class="social-icon" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35C.59 0 0 .59 0 1.325v21.35C0 23.41.59 24 1.325 24H12.82v-9.29H9.69v-3.62h3.13V8.41c0-3.1 1.89-4.79 4.66-4.79 1.33 0 2.46.1 2.79.14v3.24h-1.92c-1.5 0-1.79.72-1.79 1.76v2.31h3.59l-.47 3.62h-3.12V24h5.71c.73 0 1.32-.59 1.32-1.32V1.32C24 .59 23.41 0 22.675 0z" />
            </svg>
          </a>
        <?php endif; ?>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="container footer-bottom-container">
      <div class="copyright-text">
        &copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. <?php esc_html_e('All rights reserved.', 'york-dental-suite'); ?>
      </div>
      <div class="privacy-text">
        <?php esc_html_e('Full details of how we handle your data and how you can change your contact preferences can be found in our', 'york-dental-suite'); ?>
        <a href="<?php echo esc_url(get_privacy_policy_url()); ?>"><?php esc_html_e('privacy policy.', 'york-dental-suite'); ?></a>
      </div>
    </div>
  </div>
</footer><?php wp_footer(); ?>
</body>

</html>