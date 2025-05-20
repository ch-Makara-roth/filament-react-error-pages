# Filament React Error Pages

A Laravel package that provides React-based custom error pages with Filament admin panel integration.

[![Latest Version on Packagist](https://img.shields.io/packagist/v/ch-makara-roth/filament-react-error-pages.svg?style=flat-square)](https://packagist.org/packages/ch-makara-roth/filament-react-error-pages)
[![GitHub Tests Action Status](https://img.shields.io/github/workflow/status/ch-makara-roth/filament-react-error-pages/run-tests?label=tests)](https://github.com/ch-makara-roth/filament-react-error-pages/actions?query=workflow%3Arun-tests+branch%3Amain)
[![Total Downloads](https://img.shields.io/packagist/dt/ch-makara-roth/filament-react-error-pages.svg?style=flat-square)](https://packagist.org/packages/ch-makara-roth/filament-react-error-pages)
[![License](https://img.shields.io/github/license/ch-makara-roth/filament-react-error-pages?style=flat-square)](LICENSE.md)

## Features

- Custom React-powered error pages for your Laravel application
- Seamless integration with Filament admin panel
- TypeScript support for better development experience
- Customizable styles and configurations
- Easy to extend with your own error components

## Screenshots

*Coming soon*

## Installation

### Prerequisites

- PHP 8.1 or higher
- Laravel 10.0 or higher
- Filament 3.0 or higher (for Filament integration)
- Node.js and npm/yarn (for building React components)

### Via Composer

```bash
composer require ch-makara-roth/filament-react-error-pages
```

### Publish Assets and Config

```bash
php artisan vendor:publish --tag=filament-react-error-pages-config
php artisan vendor:publish --tag=filament-react-error-pages-assets
```

### Troubleshooting Installation

If you encounter an error during the `artisan filament:upgrade` command after installation that indicates missing asset files, please ensure you're using the latest version of the package:

```bash
composer require makararoth/filament-react-error-pages:^0.1.5
```

The error might look like:
```
ErrorException: copy(...): Failed to open stream: No such file or directory
```

This issue was fixed in version 0.1.5 by ensuring the required asset files are properly published and available in the correct location.

If you're still experiencing issues after upgrading, you may need to manually publish the assets:

```bash
php artisan vendor:publish --tag=filament-react-error-pages-assets --force
```

This will ensure the CSS and JavaScript files are properly published to your application.

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

### Usage in Blade Templates

You can render error pages manually in your Blade templates:

```php
{!! app('filament-react-error-pages')->render(404, [
    'message' => 'The page you were looking for could not be found.',
    'companyName' => config('app.name'),
    'supportEmail' => 'support@example.com',
]) !!}
```

### Filament Integration

When Filament integration is enabled, the package will provide custom error pages within the Filament admin panel. Example usage:

```php
// In a Filament page or resource
public function render()
{
    try {
        // Your code that might throw an exception
    } catch (\Exception $e) {
        return view('filament-react-error-pages::examples.filament-integration', [
            'errorCode' => 500,
            'message' => 'An error occurred while processing your request.',
        ]);
    }
    
    return parent::render();
}
```

## Customization

### Styling the Error Pages

You can customize the appearance of error pages by:

1. Modifying the config file
2. Creating custom React components
3. Publishing and editing the views

### Supported Error Codes

- 400 (Bad Request)
- 401 (Unauthorized)
- 403 (Forbidden)
- 404 (Not Found)
- 419 (Page Expired)
- 429 (Too Many Requests)
- 500 (Server Error)
- 503 (Service Unavailable)

## Testing

```bash
composer test
npm test
```

## Changelog

Please see [CHANGELOG.md](CHANGELOG.md) for more information on what has changed recently.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## For Maintainers

### Releasing a New Version

When releasing a new version of this package, follow these steps to ensure assets are properly included:

1. Make your changes to the codebase
2. Run the build process to generate assets:
   ```bash
   npm run build
   ```
3. Check that the following files exist and have content:
   - `dist/js/app.js`
   - `dist/css/app.css`
   - `public/js/app.js`
   - `public/css/app.css`
4. Update the version number in `package.json`
5. Update the `CHANGELOG.md` with details of the changes
6. Commit all changes, including the built assets in the `dist` directory
7. Tag the release with the new version number
8. Push to the repository with tags:
   ```bash
   git push --tags
   ```
9. The package will automatically update on Packagist

**Important**: Do not ignore the `/dist` directory in `.gitignore`. The built assets must be included in the repository for the package to work correctly when installed via Composer.

## Security Vulnerabilities

If you discover a security vulnerability, please send an e-mail to Makara Roth via [your-email@example.com](mailto:your-email@example.com). All security vulnerabilities will be promptly addressed.

## Credits

- [Makara Roth](https://github.com/ch-makara-roth)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
