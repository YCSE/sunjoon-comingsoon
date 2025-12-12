/**
 * SUNJOON F&B - Coming Soon Page
 * Minimal JavaScript for enhanced interactions
 */

(function() {
    'use strict';

    // DOM Ready
    document.addEventListener('DOMContentLoaded', init);

    function init() {
        initSmoothScroll();
        initPhoneTracking();
        initKeyboardNavigation();
    }

    /**
     * Smooth scroll for any internal links
     */
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    /**
     * Track phone button clicks (for future analytics)
     */
    function initPhoneTracking() {
        const phoneLink = document.querySelector('.contact-phone');
        if (phoneLink) {
            phoneLink.addEventListener('click', function() {
                // Future: Send analytics event
                console.log('Phone contact clicked');

                // Add click feedback for touch devices
                this.classList.add('clicked');
                setTimeout(() => {
                    this.classList.remove('clicked');
                }, 200);
            });
        }
    }

    /**
     * Enhanced keyboard navigation
     */
    function initKeyboardNavigation() {
        // Add visible focus for keyboard users
        document.body.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-nav');
            }
        });

        document.body.addEventListener('mousedown', function() {
            document.body.classList.remove('keyboard-nav');
        });
    }

})();
