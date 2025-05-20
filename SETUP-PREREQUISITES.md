# Setting Up Prerequisites for Laravel Package Development

Before you can use the Filament React Error Pages package, you need to set up a proper PHP and Laravel development environment. Follow these steps to get started:

## Installing PHP (macOS)

### Using Homebrew (Recommended)

1. Install Homebrew if you don't have it already:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

2. Install PHP:

```bash
brew install php
```

3. Verify the installation:

```bash
php -v
```

### Using MAMP/XAMPP (Alternative)

You can also install MAMP (https://www.mamp.info/) or XAMPP (https://www.apachefriends.org/) which provides PHP, MySQL, and Apache in one package.

## Installing Composer

1. Download and install Composer:

```bash
curl -sS https://getcomposer.org/installer | php
mv composer.phar /usr/local/bin/composer
chmod +x /usr/local/bin/composer
```

2. Verify the installation:

```bash
composer --version
```

## Installing Laravel

1. Create a new Laravel project:

```bash
composer create-project laravel/laravel example-app
cd example-app
```

2. Start the development server:

```bash
php artisan serve
```

## Installing Filament

1. Install the Filament package:

```bash
composer require filament/filament:"^3.0"
```

2. Create a Filament admin panel:

```bash
php artisan filament:install --panels
```

## Installing the Filament React Error Pages Package

Once you have set up your Laravel and Filament environment, you can install the Filament React Error Pages package:

```bash
composer require makararoth/filament-react-error-pages
```

## Post-Installation

1. Publish the configuration:

```bash
php artisan vendor:publish --tag=filament-react-error-pages-config
```

2. Publish the assets:

```bash
php artisan vendor:publish --tag=filament-react-error-pages-assets
```

3. Build the React components if you've made changes:

```bash
npm install
npm run build
```

4. Clear the application cache:

```bash
php artisan config:clear
php artisan cache:clear
```

## Troubleshooting

If you encounter any issues during installation, try the following:

- Ensure your PHP version is at least 8.1: `php -v`
- Check Composer dependencies: `composer diagnose`
- Make sure you've published all required assets: `php artisan vendor:publish --provider="MakaraRoth\FilamentReactErrorPages\Providers\FilamentReactErrorPagesServiceProvider"`
- Check Laravel logs at `storage/logs/laravel.log`

## Next Steps

After setting up the environment and installing the package, refer to the main README.md file for detailed usage instructions.
