</div><footer id="colophon" class.site-footer">
    <div class="container footer-container">
        <div class="footer-widgets">
            <div class="footer-section contact-info">
                <h4><?php esc_html_e( 'Contact Us', 'york-dental-suite' ); ?></h4>
                <p>123 Dental Street, York, YO1 1AB</p>
                <p>Phone: 01904 123456</p>
                <p>Email: info@yorkdentalsuite.co.uk</p>
            </div>
            <div class="footer-section social-links">
                 <h4><?php esc_html_e( 'Follow Us', 'york-dental-suite' ); ?></h4>
                 </div>
            <div class="footer-section footer-navigation">
                <?php
                wp_nav_menu( array(
                    'theme_location' => 'footer-menu',
                    'menu_id'        => 'footer-primary-menu',
                    'depth'          => 1, // Keep footer menu simple
                    'fallback_cb'    => false,
                ) );
                ?>
            </div>
        </div>
        <div class="site-info">
            &copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. <?php esc_html_e( 'All Rights Reserved.', 'york-dental-suite' ); ?>
            </div>
    </div>
</footer>
<?php wp_footer(); ?>
</body>
</html>