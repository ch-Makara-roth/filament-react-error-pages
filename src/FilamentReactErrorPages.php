<?php

namespace MakaraRoth\FilamentReactErrorPages;

use Illuminate\Support\Facades\View;
use Illuminate\Support\Str;

class FilamentReactErrorPages
{
    /**
     * Available error codes that can be customized
     *
     * @var array
     */
    protected $availableErrorCodes = [
        400, 401, 403, 404, 419, 429, 500, 503
    ];

    /**
     * Custom error page components
     *
     * @var array
     */
    protected $customErrorComponents = [];

    /**
     * Global props to pass to all error components
     *
     * @var array
     */
    protected $globalProps = [];

    /**
     * Default React component to use for each error code
     *
     * @var array
     */
    protected $defaultComponents = [
        400 => 'BadRequest',
        401 => 'Unauthorized',
        403 => 'Forbidden',
        404 => 'NotFound',
        419 => 'PageExpired',
        429 => 'TooManyRequests',
        500 => 'ServerError',
        503 => 'ServiceUnavailable'
    ];

    /**
     * Create a new FilamentReactErrorPages instance
     */
    public function __construct()
    {
        // Initialize with any default props from config
        $this->globalProps = config('filament-react-error-pages.global_props', []);
    }

    /**
     * Check if a custom React error page exists for the given error code
     *
     * @param int $code
     * @return bool
     */
    public function hasCustomErrorPage(int $code): bool
    {
        return in_array($code, $this->availableErrorCodes);
    }

    /**
     * Register a custom React component for an error code
     *
     * @param int $code
     * @param string $component
     * @return $this
     */
    public function registerErrorComponent(int $code, string $component)
    {
        $this->customErrorComponents[$code] = $component;
        
        return $this;
    }

    /**
     * Get the React component name for a given error code
     *
     * @param int $code
     * @return string
     */
    public function getComponentName(int $code): string
    {
        return $this->customErrorComponents[$code] ?? $this->defaultComponents[$code] ?? 'GenericError';
    }

    /**
     * Add global props to be passed to all error components
     *
     * @param array $props
     * @return $this
     */
    public function withGlobalProps(array $props)
    {
        $this->globalProps = array_merge($this->globalProps, $props);
        
        return $this;
    }

    /**
     * Render a React error component for the given error code
     *
     * @param int $code
     * @param array $props
     * @return string
     */
    public function render(int $code, array $props = []): string
    {
        // Merge custom props with global props
        $mergedProps = array_merge($this->globalProps, $props);
        
        // Add error code to props
        $mergedProps['errorCode'] = $code;
        
        // Get component name
        $componentName = $this->getComponentName($code);
        
        // Convert props to JSON for passing to React
        $propsJson = htmlspecialchars(json_encode($mergedProps), ENT_QUOTES, 'UTF-8');
        
        return View::make('filament-react-error-pages::error-container', [
            'errorCode' => $code,
            'componentName' => $componentName,
            'props' => $propsJson,
            'reactAppId' => 'filament-react-error-app',
        ])->render();
    }

    /**
     * Get all available error codes
     *
     * @return array
     */
    public function getAvailableErrorCodes(): array
    {
        return $this->availableErrorCodes;
    }

    /**
     * Register multiple error components at once
     *
     * @param array $components
     * @return $this
     */
    public function registerErrorComponents(array $components)
    {
        foreach ($components as $code => $component) {
            $this->registerErrorComponent($code, $component);
        }
        
        return $this;
    }

    /**
     * Check if the package is configured to use custom error pages
     *
     * @return bool
     */
    public function isEnabled(): bool
    {
        return config('filament-react-error-pages.use_custom_error_pages', true);
    }

    /**
     * Check if the package is configured for Filament integration
     *
     * @return bool
     */
    public function isFilamentEnabled(): bool
    {
        return config('filament-react-error-pages.use_in_filament', true);
    }
}

