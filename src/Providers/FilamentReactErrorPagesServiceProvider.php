<?php

namespace MakaraRoth\FilamentReactErrorPages\Providers;

use Filament\Support\Assets\Asset;
use Filament\Support\Facades\FilamentAsset;
use Illuminate\Support\ServiceProvider;
use Illuminate\Contracts\Debug\ExceptionHandler;
use Illuminate\Support\Facades\Blade;
use Illuminate\Foundation\AliasLoader;
use Illuminate\Support\Facades\View;
use MakaraRoth\FilamentReactErrorPages\Http\Middleware\HandleErrorsWithReact;

class FilamentReactErrorPagesServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        // Register the config file
        $this->mergeConfigFrom(
            __DIR__.'/../../config/filament-react-error-pages.php', 'filament-react-error-pages'
        );

        // Bind any services to the container here
        $this->app->singleton('filament-react-error-pages', function ($app) {
            return new \MakaraRoth\FilamentReactErrorPages\FilamentReactErrorPages();
        });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        // Publish configuration
        $this->publishes([
            __DIR__.'/../../config/filament-react-error-pages.php' => config_path('filament-react-error-pages.php'),
        ], 'filament-react-error-pages-config');

        // Publish views
        $this->publishes([
            __DIR__.'/../../resources/views' => resource_path('views/vendor/filament-react-error-pages'),
        ], 'filament-react-error-pages-views');

        // Publish assets
        $this->publishes([
            __DIR__.'/../../public' => public_path('vendor/filament-react-error-pages'),
        ], 'filament-react-error-pages-assets');

        // Load views
        $this->loadViewsFrom(__DIR__.'/../../resources/views', 'filament-react-error-pages');

        // Register Filament assets
        $this->registerFilamentAssets();

        // Configure error handling if enabled
        if (config('filament-react-error-pages.use_custom_error_pages', true)) {
            $this->configureErrorHandling();
        }

        // Configure Filament integration if enabled
        if (config('filament-react-error-pages.use_in_filament', true)) {
            $this->configureFilamentIntegration();
        }
    }

    /**
     * Register assets required for Filament integration.
     *
     * @return void
     */
    protected function registerFilamentAssets()
    {
        // Register package scripts and styles with Filament
        FilamentAsset::register([
            // CSS
            Asset::make('filament-react-error-pages-styles', __DIR__.'/../../dist/css/app.css')
                ->isStylesheet(),
            
            // JS
            Asset::make('filament-react-error-pages-scripts', __DIR__.'/../../dist/js/app.js')
                ->isScript(),
        ]);
    }

    /**
     * Configure error handling.
     *
     * @return void
     */
    protected function configureErrorHandling()
    {
        // This will register a view composer to inject React components into error views
        View::composer(['errors::*'], function ($view) {
            $view->with('reactErrorPages', true);
            $view->with('reactAppId', 'filament-react-error-app');
        });

        // Register custom exception handler or middleware if needed
        if ($this->app->runningInConsole() === false) {
            $this->app->make('router')->aliasMiddleware(
                'react-error-pages', HandleErrorsWithReact::class
            );
        }
    }

    /**
     * Configure Filament integration.
     *
     * @return void
     */
    protected function configureFilamentIntegration()
    {
        // Register error pages with Filament
        // This will be executed when Filament is installed and being used
        // The exact implementation depends on what integration points Filament provides
    }
}

