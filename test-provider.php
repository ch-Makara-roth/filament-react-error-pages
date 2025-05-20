<?php

// 1. Include the Composer autoloader
require_once __DIR__ . '/vendor/autoload.php';

use MakaraRoth\FilamentReactErrorPages\Providers\FilamentReactErrorPagesServiceProvider;

// Set up error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

echo "Starting test of FilamentReactErrorPagesServiceProvider...\n";

try {
    // 2. Create a mock Laravel application container
    $app = new class {
        protected $bindings = [];
        protected $instances = [];
        
        public function bind($abstract, $concrete)
        {
            $this->bindings[$abstract] = $concrete;
        }
        
        public function singleton($abstract, $concrete)
        {
            $this->bindings[$abstract] = $concrete;
        }
        
        public function make($abstract)
        {
            if (isset($this->instances[$abstract])) {
                return $this->instances[$abstract];
            }
            
            if (isset($this->bindings[$abstract])) {
                $concrete = $this->bindings[$abstract];
                if (is_callable($concrete)) {
                    return $concrete($this);
                }
                return $concrete;
            }
            
            // Special handling for specific requests
            if ($abstract == 'Filament\\Support\\Facades\\FilamentAsset') {
                // Return a mock FilamentAsset
                return new class {
                    public static function register($assets)
                    {
                        echo "Registering " . count($assets) . " assets with FilamentAsset\n";
                        foreach ($assets as $index => $asset) {
                            echo "Asset " . ($index + 1) . ": " . get_class($asset) . "\n";
                        }
                        return true;
                    }
                };
            }
            
            // Handle paths
            if ($abstract == 'path') {
                return __DIR__;
            }
            if ($abstract == 'path.config') {
                return __DIR__ . '/config';
            }
            
            // Return a default value for other cases
            return null;
        }
        
        public function instance($abstract, $instance)
        {
            $this->instances[$abstract] = $instance;
        }
        
        public function runningInConsole()
        {
            return true;
        }
        
        public function configPath($path = '')
        {
            return __DIR__ . '/config' . ($path ? '/' . $path : '');
        }
    };

    // 3. Instantiate the FilamentReactErrorPagesServiceProvider
    $provider = new FilamentReactErrorPagesServiceProvider($app);
    echo "Provider instantiated successfully\n";

    // 4. Call register and boot methods
    $provider->register();
    echo "Provider registered successfully\n";
    
    $provider->boot();
    echo "Provider booted successfully\n";
    
    // 5. Specifically test the registerFilamentAssets method
    // First, we need to modify the visibility of the protected method
    $reflection = new ReflectionClass($provider);
    $method = $reflection->getMethod('registerFilamentAssets');
    $method->setAccessible(true);
    
    // Set filamentInstalled property to true
    $property = $reflection->getProperty('filamentInstalled');
    $property->setAccessible(true);
    $property->setValue($provider, true);
    
    // Call the method
    echo "Testing registerFilamentAssets method...\n";
    $method->invoke($provider);
    echo "registerFilamentAssets executed successfully\n";
    
    echo "All tests passed successfully!\n";
} catch (Throwable $e) {
    echo "Error: " . $e->getMessage() . "\n";
    echo "File: " . $e->getFile() . " on line " . $e->getLine() . "\n";
    echo "Stack trace:\n" . $e->getTraceAsString() . "\n";
}

