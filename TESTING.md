# Testing Your Laravel Package with React and Filament Support

This guide covers how to test your Laravel package that includes React components and Filament integration.

## Prerequisites

Before testing, ensure you have:

- PHP installed (8.1 or higher)
- Composer installed
- Node.js and npm installed
- A Laravel project set up for testing

If these are not set up, please refer to the `SETUP-PREREQUISITES.md` file first.

## 1. Testing React Components

### Unit Testing React Components

1. Install testing dependencies:

```bash
npm install --save-dev vitest jsdom @testing-library/react @testing-library/jest-dom
```

2. Create a test setup file at `resources/tsx/tests/setup.ts`:

```typescript
import '@testing-library/jest-dom';
import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

// Run cleanup after each test case
afterEach(() => {
  cleanup();
});
```

3. Update your `vite.config.ts` to include test configuration:

```typescript
// Add to your existing vite.config.ts
test: {
  globals: true,
  environment: 'jsdom',
  setupFiles: './resources/tsx/tests/setup.ts',
}
```

4. Create a test file for each component. For example, to test the NotFound component:

```typescript
// resources/tsx/components/errors/__tests__/NotFound.test.tsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import NotFound from '../NotFound';

describe('NotFound Component', () => {
  it('renders with default props', () => {
    render(<NotFound />);
    expect(screen.getByText('Page Not Found')).toBeInTheDocument();
  });

  it('renders with custom message', () => {
    render(<NotFound message="Custom not found message" />);
    expect(screen.getByText('Custom not found message')).toBeInTheDocument();
  });
});
```

5. Run the tests:

```bash
npm test
```

### Manual Testing React Components

To manually test the React components in isolation:

1. Create a development server using Vite:

```bash
npx vite
```

2. Create a sample page in `resources/tsx/dev/index.html`:

```html
<!DOCTYPE html>
<html>
<head>
  <title>React Error Pages Dev</title>
</head>
<body>
  <div id="app"></div>
  <script type="module" src="./main.tsx"></script>
</body>
</html>
```

3. Create a `resources/tsx/dev/main.tsx` file:

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { NotFound, ServerError, GenericError } from '../index';

ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
      <h1>Error Page Components</h1>
      
      <div>
        <h2>NotFound (404)</h2>
        <NotFound />
      </div>
      
      <div>
        <h2>ServerError (500)</h2>
        <ServerError />
      </div>
      
      <div>
        <h2>GenericError</h2>
        <GenericError errorCode={403} title="Forbidden" message="You don't have permission to access this resource." />
      </div>
    </div>
  </React.StrictMode>
);
```

4. Point your browser to the development server (usually http://localhost:5173/resources/tsx/dev/) to see the components in action.

## 2. Testing the Laravel Package

### PHPUnit Tests

The package already includes basic PHPUnit tests in the `tests` directory. To run them:

1. Set up a testing environment:

```bash
composer require --dev orchestra/testbench phpunit/phpunit
```

2. Create a `phpunit.xml` file if it doesn't exist:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<phpunit xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:noNamespaceSchemaLocation="./vendor/phpunit/phpunit/phpunit.xsd"
         bootstrap="vendor/autoload.php"
         colors="true">
    <testsuites>
        <testsuite name="Feature">
            <directory suffix="Test.php">./tests/Feature</directory>
        </testsuite>
        <testsuite name="Unit">
            <directory suffix="Test.php">./tests/Unit</directory>
        </testsuite>
    </testsuites>
    <php>
        <env name="APP_ENV" value="testing"/>
    </php>
</phpunit>
```

3. Run the tests:

```bash
./vendor/bin/phpunit
```

### Manual Testing in a Laravel Project

To test the package in a real Laravel project:

1. Create a Laravel project (or use an existing one):

```bash
composer create-project laravel/laravel test-project
cd test-project
```

2. Add your package as a local repository in the Laravel project's `composer.json`:

```json
"repositories": [
    {
        "type": "path",
        "url": "../path/to/your/laravel12-filiment-react-error-page"
    }
],
"require": {
    "makararoth/filament-react-error-pages": "*",
    ...
}
```

3. Install the package:

```bash
composer update
```

4. Publish the assets and configuration:

```bash
php artisan vendor:publish --tag=filament-react-error-pages-config
php artisan vendor:publish --tag=filament-react-error-pages-assets
```

5. Test error pages by creating routes that trigger errors:

```php
// routes/web.php
Route::get('/test-404', function () {
    abort(404);
});

Route::get('/test-500', function () {
    abort(500);
});
```

6. Start the Laravel development server:

```bash
php artisan serve
```

7. Visit the test routes in your browser to see if the custom error pages are working correctly.

## 3. Testing Filament Integration

To test the Filament integration:

1. Install Filament in your test Laravel project:

```bash
composer require filament/filament:"^3.0"
php artisan filament:install --panels
```

2. Create a Filament resource or page that might trigger an error:

```bash
php artisan make:filament-page TestErrorPage
```

3. Modify the generated page to test error handling:

```php
// app/Filament/Pages/TestErrorPage.php
public function render()
{
    // Uncomment to test 404 error
    // abort(404);
    
    // Uncomment to test 500 error
    // throw new \Exception('Test exception');
    
    return view('filament.pages.test-error-page');
}
```

4. Visit the Filament admin panel and navigate to your test page to verify error handling.

## 4. Testing in Production-like Environment

For more thorough testing before releasing:

1. Build the React components for production:

```bash
npm run build
```

2. Test in different browsers to ensure compatibility.

3. Test with various screen sizes to verify responsive design.

4. Test with JavaScript disabled to ensure graceful fallback.

## 5. Performance Testing

For performance testing:

1. Use browser developer tools to check load times and resource usage.

2. Consider using tools like Lighthouse to analyze performance.

3. Test with larger datasets if your error pages include dynamic data.

## Common Testing Issues and Solutions

- **Assets not loading**: Ensure you've published the assets correctly with `php artisan vendor:publish`
- **React errors**: Check browser console for JavaScript errors
- **PHP errors**: Check Laravel logs in `storage/logs/laravel.log`
- **Styling issues**: Verify CSS is being loaded properly
- **Integration issues**: Ensure service provider is registered correctly

## Additional Testing Resources

- [Laravel Testing Documentation](https://laravel.com/docs/10.x/testing)
- [React Testing Library Documentation](https://testing-library.com/docs/react-testing-library/intro/)
- [Filament Testing Documentation](https://filamentphp.com/docs/3.x/panels/testing)
