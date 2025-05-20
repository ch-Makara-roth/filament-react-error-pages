# Filament React Error Pages

A Laravel package that provides React-based custom error pages with Filament admin panel integration.

## Features

- Custom React-powered error pages for your Laravel application
- Seamless integration with Filament admin panel
- TypeScript support for better development experience
- Customizable styles and configurations
- Easy to extend with your own error components

## Installation

### Prerequisites

- PHP 8.1 or higher
- Laravel 10.0 or higher
- Filament 3.0 or higher (for Filament integration)
- Node.js and npm/yarn (for building React components)

### Via Composer

```bash
composer require makararoth/filament-react-error-pages
```

### Publish Assets and Config

```bash
php artisan vendor:publish --tag=filament-react-error-pages-config
php artisan vendor:publish --tag=filament-react-error-pages-assets
```

## Configuration

After publishing the configuration file, you can customize the error pages in the `config/filament-react-error-pages.php` file:

```php
// Enable or disable custom error pages
'use_custom_error_pages' => true,

// Enable or disable Filament integration
'use_in_filament' => true,

// Customize styles and appearance
'styles' => [
    'theme' => 'system',
    'colors' => [
        'primary' => '#3b82f6',
        // ...
    ],
    // ...
],

// Global props for all error components
'global_props' => [
    'back_button_text' => 'Go Back',
    'home_button_text' => 'Go to Homepage',
    // ...
],

// Custom components for specific error codes
'error_components' => [
    404 => 'CustomNotFoundPage',
    500 => 'CustomServerErrorPage',
],
```

## Usage

### Basic Usage

Once installed and configured, the package will automatically replace Laravel's default error pages with React-powered custom error pages.

### Custom Error Pages

You can create your own custom error components by:

1. Creating React components in your application
2. Registering them in the configuration:

```php
'error_components' => [
    404 => 'MyCustomNotFoundPage',
    500 => 'MyCustomServerErrorPage',
],
```

### Filament Integration

When Filament integration is enabled, the package will provide custom error pages within the Filament admin panel. This ensures a consistent look and feel across your admin interface.

## Building from Source

If you want to modify the React components:

1. Clone the repository
2. Install dependencies with `npm install`
3. Run `npm run build` to compile TypeScript and build the assets
4. Publish the built assets with `php artisan vendor:publish --tag=filament-react-error-pages-assets`

## Development

### Development Server

```bash
npm run dev
```

### Testing

```bash
npm run test
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This package is open-sourced software licensed under the MIT license.
