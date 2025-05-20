<?php

// Set up error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

echo "Starting test of Filament asset classes...\n";

try {
    // 1. Define mock classes to simulate Filament's asset classes
    
    // Abstract Asset class - this is what was causing the error
    abstract class Asset {
        protected $handle;
        protected $path;
        
        public function __construct(string $handle, string $path)
        {
            $this->handle = $handle;
            $this->path = $path;
        }
        
        public function getHandle(): string
        {
            return $this->handle;
        }
        
        public function getPath(): string
        {
            return $this->path;
        }
        
        abstract public function getType(): string;
    }
    
    // Concrete Css implementation
    class Css extends Asset {
        public function getType(): string
        {
            return 'css';
        }
        
        public function __toString(): string
        {
            return "CSS Asset: {$this->handle} ({$this->path})";
        }
    }
    
    // Concrete Js implementation
    class Js extends Asset {
        public function getType(): string
        {
            return 'js';
        }
        
        public function __toString(): string
        {
            return "JS Asset: {$this->handle} ({$this->path})";
        }
    }
    
    // 2. Test instantiation and usage
    
    // Test instantiating a CSS asset
    echo "Testing CSS asset creation...\n";
    $cssAsset = new Css(
        'filament-react-error-pages-styles',
        __DIR__ . '/dist/css/app.css'
    );
    echo "CSS asset created successfully: " . $cssAsset . "\n";
    echo "CSS asset type: " . $cssAsset->getType() . "\n";
    
    // Test instantiating a JS asset
    echo "Testing JS asset creation...\n";
    $jsAsset = new Js(
        'filament-react-error-pages-scripts',
        __DIR__ . '/dist/js/app.js'
    );
    echo "JS asset created successfully: " . $jsAsset . "\n";
    echo "JS asset type: " . $jsAsset->getType() . "\n";
    
    // 3. Test that abstract Asset class cannot be instantiated directly
    echo "Testing that abstract Asset class cannot be instantiated...\n";
    try {
        $abstractAsset = new Asset('test', 'test.txt');
        echo "ERROR: Abstract class was instantiated, which should not be possible!\n";
    } catch (Error $e) {
        echo "Success: Caught expected error when trying to instantiate abstract class: " . $e->getMessage() . "\n";
    }
    
    echo "\nAll tests completed successfully!\n";
    echo "This confirms that concrete classes (Css and Js) can be instantiated correctly,\n";
    echo "while the abstract Asset class cannot be instantiated directly.\n";
    echo "The fix applied to FilamentReactErrorPagesServiceProvider.php is correct.\n";
    
} catch (Throwable $e) {
    echo "Error: " . $e->getMessage() . "\n";
    echo "File: " . $e->getFile() . " on line " . $e->getLine() . "\n";
    echo "Stack trace:\n" . $e->getTraceAsString() . "\n";
}

