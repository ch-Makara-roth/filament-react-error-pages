<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Custom Error Pages
    |--------------------------------------------------------------------------
    |
    | Enable or disable the custom React error pages.
    | When enabled, the package will override Laravel's default error pages
    | with React-powered custom error pages.
    |
    */
    'use_custom_error_pages' => true,

    /*
    |--------------------------------------------------------------------------
    | Filament Integration
    |--------------------------------------------------------------------------
    |
    | Enable or disable integration with Filament admin panel.
    | When enabled, the package will provide custom React error pages
    | within the Filament admin panel interface.
    |
    */
    'use_in_filament' => true,

    /*
    |--------------------------------------------------------------------------
    | Error Page Styles
    |--------------------------------------------------------------------------
    |
    | Customize the appearance of your error pages.
    |
    */
    'styles' => [
        // Base theme: 'light', 'dark', or 'system' (follows user preference)
        'theme' => 'system',
        
        // Custom colors for various error page elements
        'colors' => [
            'primary' => '#3b82f6',      // Primary brand color
            'secondary' => '#10b981',    // Secondary accent color
            'danger' => '#ef4444',       // For error indicators
            'warning' => '#f59e0b',      // For warning indicators
            'info' => '#3b82f6',         // For information indicators
            'success' => '#10b981',      // For success indicators
            'background' => '#ffffff',   // Page background
            'text' => '#1f2937',         // Main text color
        ],
        
        // Layout settings
        'layout' => [
            'centered' => true,          // Center content vertically and horizontally
            'max_width' => '32rem',      // Maximum width of the error content
            'padding' => '2rem',         // Padding around the error content
        ],
        
        // Animation settings
        'animations' => [
            'enabled' => true,           // Enable or disable animations
            'type' => 'fade',            // Type of animation: 'fade', 'slide', 'bounce'
            'duration' => 300,           // Duration of animations in milliseconds
        ],
        
        // Custom CSS classes
        'custom_classes' => [
            'container' => '',           // Custom class for the main container
            'header' => '',              // Custom class for the header section
            'content' => '',             // Custom class for the content area
            'button' => '',              // Custom class for buttons
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Global Props
    |--------------------------------------------------------------------------
    |
    | Define global props that will be passed to all error components.
    | These can be overridden per error page when needed.
    |
    */
    'global_props' => [
        // Customize button text
        'back_button_text' => 'Go Back',
        'home_button_text' => 'Go to Homepage',
        
        // Show or hide specific elements
        'show_back_button' => true,
        'show_home_button' => true,
        'show_error_code' => true,
        'show_stacktrace' => false,      // Careful: only enable in development!
        
        // URLs
        'home_url' => '/',
        
        // Additional debugging information (be careful with this in production!)
        'debug' => false,
        
        // Custom logos and images
        'logo_url' => null,              // URL to your application's logo
        'illustration_url' => null,      // URL to a custom illustration for error pages
        
        // Company information
        'company_name' => null,
        'support_email' => null,
    ],

    /*
    |--------------------------------------------------------------------------
    | Custom Error Components
    |--------------------------------------------------------------------------
    |
    | Define custom React components to use for specific error codes.
    | Keys should be the HTTP status codes, values should be the
    | component names (without file extension).
    |
    */
    'error_components' => [
        // Examples:
        // 404 => 'CustomNotFoundPage',
        // 500 => 'CustomServerErrorPage',
    ],

    /*
    |--------------------------------------------------------------------------
    | Development Mode
    |--------------------------------------------------------------------------
    |
    | When development mode is enabled, additional debugging information
    | may be shown on error pages. This should be disabled in production.
    |
    */
    'development_mode' => env('APP_DEBUG', false),
];

